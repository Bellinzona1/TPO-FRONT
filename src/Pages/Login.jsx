import React, { useState } from 'react';
import "../Components/Styles/Login.css";
import { login } from '../Services/Auth.service';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!username) {
      setError('Please enter your email');
      return;
    }

    if (!password) {
      setError('Please enter your password');
      return;
    }

    setError('');

    login({ username, password })
      .then(response => {
        console.log("Login successful:", response);

        window.location.replace('/')
        

      })
      .catch(err => {
        console.error("Login failed:", err);
        setError("Login failed. Please check your credentials.");
      });
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
