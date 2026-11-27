
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Consultar todos los productos
router.get('/', productController.getProducts);

// Consultar un producto por su ID
router.get('/:id', productController.getProduct);

module.exports = router;
