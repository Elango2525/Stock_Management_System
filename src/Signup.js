// Signup.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook
import './style/Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useUser(); // Use the useUser hook to access user context

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{15,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

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

    // Update the user context with signup data
    const userData = { name, email, password };
    updateUser(userData);

    // Mocking a successful signup for demonstration purposes
    alert('Signup successful!');
    navigate('/'); // Redirect to the Profile page
  };

  return (
    <div className="main-container">
      <div className="signup-container">
        <h2>User Signup</h2>
        {error && <div className="error-message">{error}</div>}
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
          <p>
            Already have an account? <Link to="/">Login here</Link>.
          </p>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
