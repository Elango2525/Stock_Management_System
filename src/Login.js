// Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

    // Encode the email to use it as a key in localStorage
    const encodedEmail = encodeURIComponent(email);

    // Retrieve user details from localStorage
    const storedUserData = localStorage.getItem(encodedEmail);

    if (!storedUserData) {
      setError('User not found. Please sign up first.');
      return;
    }

    const userData = JSON.parse(storedUserData);

    // Check if the entered password matches the stored password
    if (userData.password !== password) {
      setError('Incorrect password.');
      return;
    }

    // Mocking a successful login for demonstration purposes
    alert('Login successful!');
    navigate('/home', { state: { userName: userData.name } });
  };

  return (
    <div className="main-container">
      <div className="login-container">
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
        <p>
          Don't have an account?{' '}
          <Link className="signup-link" to="/signup">
            <span className="blink">Signup here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
