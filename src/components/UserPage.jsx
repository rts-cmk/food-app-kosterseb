import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileIcon from '../assets/profile-icon-large.svg';

function UserPage() {
  const navigate = useNavigate();
  const [user] = useState({
    name: '',
    email: '',
    address: '',
    avatar: profileIcon
  });

  return (
    <div className="page user-page">
      <header className="user-header">
        <button className="back-btn" onClick={() => navigate('/')}><img src="/src/assets/arrow-icon.svg" alt="" /></button>
        <button className="settings-btn"><img src="/src/assets/settings-icon.svg" alt="" /></button>
      </header>

      <div className="profile-section">
        <div className="profile-pic-large"><img src={user.avatar} alt=""></img></div>

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
          <label>Password</label>
          <input type="password" value="••••••••••" readOnly />
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn" onClick={() => navigate('/')}>Log out →</button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;