// Profile.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import './style/Profile.css';

const Profile = () => {
  const { user, logout } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    logout();
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user && (
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Password:</strong>{' '}
            {showPassword ? (
              user.password
            ) : (
              <span className="password-placeholder">********</span>
            )}
            <button className="custom-button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </p>
        </div>
      )}
      <button className="custom-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
