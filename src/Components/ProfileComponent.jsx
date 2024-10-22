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

      
      <a href="">Mi perfil</a>
      <a href="/MyProducts">Mis productos</a>
      <a href="/Cart">Cart</a>
      
      <button>Salir</button>
    </div>
  );
};
