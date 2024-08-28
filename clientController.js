const clients = require('../data/clients');

// Get all clients
exports.getClients = (req, res) => {
    res.json(clients);
};

// Getting a single client by ID
exports.getClientById = (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) return res.status(404).send('Client not found');
    res.json(client);
};

//  for Add a new client
exports.addClient = (req, res) => {
    const client = {
        id: clients.length + 1,
        ...req.body
    };
    clients.push(client);
    res.status(201).json(client);
};

// Update a client
exports.updateClient = (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) return res.status(404).send('Client not found');

    Object.assign(client, req.body);
    res.json(client);
};

// Delete a client
exports.deleteClient = (req, res) => {
    const clientIndex = clients.findIndex(c => c.id === parseInt(req.params.id));
    if (clientIndex === -1) return res.status(404).send('Client not found');

    clients.splice(clientIndex, 1);
    res.status(204).send();
};
