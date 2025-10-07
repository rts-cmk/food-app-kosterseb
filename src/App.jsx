import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import UserPage from './components/UserPage';
import NotFoundPage from './components/NotFoundPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Product Route with dynamic ID parameter */}
        <Route path="/product/:id" element={<ProductPage />} />
        
        {/* User Profile Route */}
        <Route path="/user-profile" element={<UserPage />} />
        
        {/* 404 Route */}
        <Route path="/page-not-found" element={<NotFoundPage />} />
        
        {/* Wildcard Route - catches all unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;