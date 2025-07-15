const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory product data
const products = [
  { id: 1, name: 'Handmade Soap', price: 5.99, description: 'Natural handmade soap.', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Organic Tea', price: 9.99, description: 'Fresh organic tea leaves.', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Local Honey', price: 7.49, description: 'Pure honey from local farms.', image: 'https://via.placeholder.com/150' },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 