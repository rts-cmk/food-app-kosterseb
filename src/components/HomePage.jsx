import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

function HomePage() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="page home-page">
      <header className="home-header">
        <div>
          <h1 className="logo">Foodgo</h1>
          <p className="tagline">Order your favourite food!</p>
        </div>
        <div className="profile-pic-small" onClick={() => navigate('/user-profile')}>
        <img src="/src/assets/profile-icon.svg"></img>
        </div>
      </header>

      <div className="search-bar">
        <span className="search-icon"><img src="/src/assets/search-icon.svg" alt="" /></span>
        <input type="text" placeholder="Search" />
        <button className="filter-btn"><img src="/src/assets/slider-icon.svg"></img></button>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onFavorite={toggleFavorite}
          />
        ))}
      </div>

      <nav className="bottom-nav">
        <button className="nav-btn active" onClick={() => navigate('/')}><img src="/src/assets/home-icon.svg"></img></button>
        <button className="nav-btn" onClick={() => navigate('/user-profile')}><img src="/src/assets/profile-icon.svg"></img></button>
        <button className="nav-btn add-btn">+</button>
        <button className="nav-btn"><img src="/src/assets/chat-icon.svg"></img></button>
        <button className="nav-btn"><img src="/src/assets/fav-icon.svg"></img></button>
      </nav>
    </div>
  );
}

export default HomePage;