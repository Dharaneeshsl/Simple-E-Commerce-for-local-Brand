import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
  };

  const backToList = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <h1>Local Brand Shop</h1>
      <div className="main-content">
        <div className="product-section">
          {selectedProduct ? (
            <div className="product-detail">
              <button onClick={backToList}>Back</button>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <p><b>${selectedProduct.price}</b></p>
              <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
            </div>
          ) : (
            <div className="product-list">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => viewProduct(product)}>View</button>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cart-section">
          <h2>Cart</h2>
          {cart.length === 0 ? <p>Cart is empty</p> : (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
