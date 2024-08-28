const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clients');
const productRoutes = require('./routes/products');
const invoiceRoutes = require('./routes/invoices');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/api/clients', clientRoutes);
app.use('/api/products', productRoutes);
app.use('/api/invoices', invoiceRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
