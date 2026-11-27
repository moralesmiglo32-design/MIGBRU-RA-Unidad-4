
const productQueries = require('../database/productQueries');

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await productQueries.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error('Error al consultar productos:', error);
        res.status(500).json({
            message: 'Error al obtener los productos'
        });
    }
};

// Obtener un producto por ID
const getProduct = async (req, res) => {
    try {
        const product = await productQueries.getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: 'Producto no encontrado'
            });
        }

        res.json(product);
    } catch (error) {
        console.error('Error al consultar producto:', error);
        res.status(500).json({
            message: 'Error al obtener el producto'
        });
    }
};

module.exports = {
    getProducts,
    getProduct
};
