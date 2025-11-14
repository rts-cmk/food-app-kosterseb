import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onFavorite }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image"><img src={product.image}></img></div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="subtitle">{product.subtitle}</p>
        <div className="product-footer">
          <span className="rating"><img src="/src/assets/rating-star-icon.svg"></img> {product.rating}</span>
          <button 
            className="favorite-btn"
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(product.id);
            }}
          >
            <img src="/src/assets/product-fav-icon.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;