import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onFavorite }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="subtitle">{product.subtitle}</p>
        <div className="product-footer">
          <span className="rating">⭐ {product.rating}</span>
          <button 
            className="favorite-btn"
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(product.id);
            }}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;