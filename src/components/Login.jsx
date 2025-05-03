// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // 
import '../LoginPage.css'; // 

const Login = () => { // 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To display login errors
  const [isLoading, setIsLoading] = useState(false); // To disable button during login
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors
    setIsLoading(true); // Indicate loading

    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      // Use the imported 'auth' instance
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful!
      setIsLoading(false);
      navigate('/dashboard'); // Redirect to admin dashboard route
    } catch (err) {
      console.error("Firebase Login Error:", err);
      
       if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-email') {
           setError('Invalid email or password. Please try again.');
       } else {
           setError('An unexpected error occurred. Please try again later.');
       }
      setIsLoading(false); // Re-enable button
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="admin@example.com"
              aria-label="Email Input" // Added for accessibility
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="********"
              aria-label="Password Input" // Added for accessibility
            />
          </div>

          {error && <p className="error-message" role="alert">{error}</p>} {/* Added role="alert" */}

          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; // Ensure export default uses the correct component name 'Login'
