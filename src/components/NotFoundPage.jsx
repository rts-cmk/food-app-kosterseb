import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <div className="not-found-emoji">🍔❌</div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p className="not-found-message">
          It seems this burger has gone missing from our menu!
        </p>
        <button className="home-button" onClick={() => navigate('/')}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;