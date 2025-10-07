import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();
  const [user] = useState({
    name: '',
    email: '',
    address: '',
    avatar: '👤'
  });

  return (
    <div className="page user-page">
      <header className="user-header">
        <button className="back-btn" onClick={() => navigate('/')}>←</button>
        <button className="settings-btn">⚙</button>
      </header>

      <div className="profile-section">
        <div className="profile-pic-large">{user.avatar}</div>

        <div className="profile-field">
          <label>Name</label>
          <input type="text" value={user.name} readOnly />
        </div>

        <div className="profile-field">
          <label>Email</label>
          <input type="email" value={user.email} readOnly />
        </div>

        <div className="profile-field">
          <label>Delivery address</label>
          <input type="text" value={user.address} readOnly />
        </div>

        <div className="profile-field">
          <label>Password 🔒</label>
          <input type="password" value="••••••••••" readOnly />
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile ✏️</button>
          <button className="logout-btn" onClick={() => navigate('/')}>Log out →</button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;