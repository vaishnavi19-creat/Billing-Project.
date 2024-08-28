const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes for product history
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

