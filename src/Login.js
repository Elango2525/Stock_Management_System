// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{15,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 15 characters long and include uppercase, lowercase, numbers, and symbols.'
      );
      return;
    }

    // Mocking a successful login for demonstration purposes
    // Replace this with your actual authentication logic
    // and redirect to the Homepage upon successful login
    alert('Login successful!');
    // history.push('/homepage'); // Redirect to the Homepage
    navigate('/home');
  };

  return (
    <div className="main-container"><div className="login-container">
      
        <h2>Manager Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button-l" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
