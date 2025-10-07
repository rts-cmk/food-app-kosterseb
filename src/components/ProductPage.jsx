import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spicyLevel, setSpicyLevel] = useState(50);
  const [portion, setPortion] = useState(2);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    // If product not found, redirect to 404
    navigate('/page-not-found');
    return null;
  }

  return (
    <div className="page product-page">
      <header className="product-header">
        <button className="back-btn" onClick={() => navigate('/')}>←</button>
        <button className="search-btn">🔍</button>
      </header>

      <div className="product-detail-image">
        <div className="burger-emoji"><img src={product.image}></img></div>
      </div>

      <div className="product-details">
        <h2>{product.name} {product.subtitle}</h2>
        <div className="product-meta">
          <span className="rating">⭐ {product.rating}</span>
          <span className="prep-time">🕐 {product.prepTime}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="controls">
          <div className="spicy-control">
            <label>Spicy</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={spicyLevel}
              onChange={(e) => setSpicyLevel(e.target.value)}
            />
            <div className="spicy-labels">
              <span>Mild</span>
              <span>Hot</span>
            </div>
          </div>

          <div className="portion-control">
            <label>Portion</label>
            <div className="portion-buttons">
              <button onClick={() => setPortion(Math.max(1, portion - 1))}>−</button>
              <span>{portion}</span>
              <button onClick={() => setPortion(portion + 1)}>+</button>
            </div>
          </div>
        </div>

        <div className="product-actions">
          <div className="price-tag">${product.price}</div>
          <button className="order-btn">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;