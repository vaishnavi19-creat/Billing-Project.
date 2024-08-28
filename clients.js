const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Client routes for client history
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClientById);
router.post('/', clientController.addClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;


