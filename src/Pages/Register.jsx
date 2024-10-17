import { useState } from 'react';
import { register } from '../Services/Auth.service';
import "../Components/Styles/Register.css"; 

export const Register = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords don’t match');
      return;
    }

    setError('');
    setSuccess('');

    const userData = {
      username,
      firstname,
      surname,
      phone_number,
      email,
      password,
      Role: role
    };

    register(userData)
      .then(response => {
        console.log("Registration successful:", response);
        setSuccess("Registration successful! You can now log in.");
      })
      .catch(err => {
        console.error("Registration failed:", err);
        setError("Registration failed. Please check your details.");
      });
  };

  return (
    <div className="register-container">
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="firstname">First Name:</label>
          <input 
            type="text" 
            id="firstname" 
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="surname">Surname:</label>
          <input 
            type="text" 
            id="surname" 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input 
            type="tel" 
            id="phone_number" 
            value={phone_number} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
