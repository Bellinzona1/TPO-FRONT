import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // Importar useDispatch
import { clearUser } from '../Redux/userActions'; // Importar la acción clearUser
import './Styles/ProfileComponent.css';

export const ProfileComponent = ({ userAplication }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch(); // Inicializar el dispatch de Redux

  useEffect(() => {
    // Activa la animación después de que el componente se ha montado
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Un ligero retraso para asegurar que la transición se vea
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userAplication');
    
    // Despachar la acción para limpiar el estado en Redux
    dispatch(clearUser());

    window.location.reload()
  };

  return (
    <div className={`ProfileComponent ${isLoaded ? 'loaded' : ''}`}>
      <p>{userAplication.username}</p>

      <a href="">Mi perfil</a>
      <a href="/MyProducts">Mis productos</a>
      <a href="/Cart">Cart</a>

      {/* Botón de salir que ejecuta handleLogout */}
      <button onClick={handleLogout}>Salir</button>
    </div>
  );
};
