import React, { useEffect, useState } from 'react';
import './Styles/ProfileComponent.css';

export const ProfileComponent = ({ userAplication }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Activa la animación después de que el componente se ha montado
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Un ligero retraso para asegurar que la transición se vea
  }, []);

  return (
    <div className={`ProfileComponent ${isLoaded ? 'loaded' : ''}`}>
      <p>{userAplication.username}</p>

      <div className="profile-links">
        <a href="">
          <img src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png" alt="My Profile Icon" />
          My Profile
        </a>
        <a href="/MyProducts">
          <img src="https://cdn-icons-png.flaticon.com/512/743/743131.png" alt="My Products Icon" />
          My Products
        </a>
        <a href="/Cart">
          <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Cart Icon" />
          Cart
        </a>
      </div>

      <button>Sign out</button>
    </div>
  );
};
