import React, { useState } from 'react';
import "../Components/Styles/Login.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!password) {
      setError('Please enter your password');
      return;
    }

    setError('');
    // Aquí manejarías la autenticación de usuario
    console.log({
      email,
      password
    });
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
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
