const invoices = require('../data/invoices');

//  all invoices
exports.getInvoices = (req, res) => {
    res.json(invoices);
};

// Getting a single invoice 
exports.getInvoiceById = (req, res) => {
    const invoice = invoices.find(i => i.id === parseInt(req.params.id));
    if (!invoice) return res.status(404).send('Invoice not found');
    res.json(invoice);
};

// Add a new invoice
exports.addInvoice = (req, res) => {
    const invoice = {
        id: invoices.length + 1,
        ...req.body
    };
    invoices.push(invoice);
    res.status(201).json(invoice);
};

// Update a invoice
exports.updateInvoice = (req, res) => {
    const invoice = invoices.find(i => i.id === parseInt(req.params.id));
    if (!invoice) return res.status(404).send('Invoice not found');

    Object.assign(invoice, req.body);
    res.json(invoice);
};

// Delete a invoice
exports.deleteInvoice = (req, res) => {
    const invoiceIndex = invoices.findIndex(i => i.id === parseInt(req.params.id));
    if (invoiceIndex === -1) return res.status(404).send('Invoice not found');

    invoices.splice(invoiceIndex, 1);
    res.status(204).send();
};
