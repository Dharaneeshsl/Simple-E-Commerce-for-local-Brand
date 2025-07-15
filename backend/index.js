const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory product data
const products = [
  { id: 1, name: 'Handmade Soap', price: 5.99, description: 'Natural handmade soap with essential oils.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Organic Tea', price: 9.99, description: 'Fresh organic tea leaves for a perfect brew.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Local Honey', price: 7.49, description: 'Pure honey from local farms, unfiltered and raw.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Artisan Coffee', price: 12.99, description: 'Locally roasted artisan coffee beans.', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Scented Candle', price: 8.99, description: 'Hand-poured soy wax candle with natural scents.', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Organic Jam', price: 6.49, description: 'Homemade organic fruit jam, no preservatives.', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Herbal Lotion', price: 10.99, description: 'Moisturizing lotion with herbal extracts.', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: 'Bamboo Toothbrush', price: 3.99, description: 'Eco-friendly bamboo toothbrush for daily use.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Handcrafted Mug', price: 14.99, description: 'Ceramic mug, hand-painted by local artists.', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Natural Lip Balm', price: 4.99, description: 'Lip balm made with beeswax and shea butter.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Reusable Tote Bag', price: 5.49, description: 'Stylish and sturdy tote bag for shopping.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 12, name: 'Granola Mix', price: 7.99, description: 'Healthy granola mix with nuts and dried fruits.', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80' },
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