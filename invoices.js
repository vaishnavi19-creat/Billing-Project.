const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');


// Invoice routes for invoice history
router.get('/', invoiceController.getInvoices);
router.get('/:id', invoiceController.getInvoiceById);
router.post('/', invoiceController.addInvoice);
router.put('/:id', invoiceController.updateInvoice);
router.delete('/:id', invoiceController.deleteInvoice);

module.exports = router;
