
const db = require('../config/database');

// Consultar todos los productos
const getAllProducts = async () => {
    const [rows] = await db.query(
        'SELECT * FROM productos'
    );
    return rows;
};

// Buscar un producto por su ID
const getProductById = async (id) => {
    const [rows] = await db.query(
        'SELECT * FROM productos WHERE id = ?',
        [id]
    );
    return rows[0];
};

// Agregar un producto
const createProduct = async (product) => {
    const { nombre, descripcion, precio, imagen, stock } = product;

    const [result] = await db.query(
        `INSERT INTO productos (nombre, descripcion, precio, imagen, stock)
         VALUES (?, ?, ?, ?, ?)`,
        [nombre, descripcion, precio, imagen, stock]
    );

    return result.insertId;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};
