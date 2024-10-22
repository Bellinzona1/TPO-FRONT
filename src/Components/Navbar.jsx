import React, { useState } from 'react';
import './Styles/Navbar.css';
import { ProfileComponent } from './ProfileComponent';

export const Navbar = ({ userAplication }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile); // Alterna la visibilidad del ProfileComponent
  };

  return (
    <div className='Navbar'>
      <div className="containerNav">
        <div className="containerLogo">
          <img className='imgLogo' src="https://cdn-icons-png.flaticon.com/512/860/860810.png" alt="" />
          <h1>ElectricThings</h1>
        </div>
        <div className="options">
          <a href="/">Home</a>
          <div className="productsOptions">
            <a href="#" onClick={toggleSubmenu}>Products Listing</a>
            {showSubmenu && (
              <div className="submenu">
                <a href="#">opcion 1</a>
                <a href="#">opcion 2</a>
                <a href="#">opcion 3</a>
              </div>
            )}
          </div>

          {userAplication ? (
            <div className="UserNav" onClick={toggleProfile}>
              <img src="https://cdn-icons-png.flaticon.com/512/6676/6676016.png" alt="User Icon" />
            </div>
          ) : (
            <div className='btnsLogOut'>
              <a href="/login" className='iniciarSesion'>Iniciar Sesion</a>
              <a href="/register" className='RegisterBtn'>Registrarse</a>
            </div>
          )}
        </div>
      </div>

      {showProfile && (
        <ProfileComponent userAplication={userAplication} />
      )}
    </div>
  );
};
