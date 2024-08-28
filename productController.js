const products = require('../data/products');

// Get  products all
exports.getProducts = (req, res) => {
    res.json(products);
};

// Getting a single product by ID
exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
};

// Add a new product
exports.addProduct = (req, res) => {
    const product = {
        id: products.length + 1,
        ...req.body
    };
    products.push(product);
    res.status(201).json(product);
};

// Update a product
exports.updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');

    Object.assign(product, req.body);
    res.json(product);
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');

    products.splice(productIndex, 1);
    res.status(204).send();
};
