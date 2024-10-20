import React, { useState } from 'react';
import './Styles/Navbar.css';

export const Navbar = ({ userAplication }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className='Navbar'>
      <div className="containerNav">
        <div className="containerLogo">
          <img className='imgLogo' src="https://cdn-icons-png.flaticon.com/512/860/860810.png" alt="" />
          <h1>MarketPlaceX</h1>
        </div>
        <div className="options">
          <a href="">Home</a>
          <div className="productsOptions">
            <a href="#" onClick={toggleSubmenu}>Products Listing</a>
            {showSubmenu && (
              <div className="submenu">
                <a href="">opcion 1</a>
                <a href="">opcion 2</a>
                <a href="">opcion 3</a>
              </div>
            )}
          </div>


          {userAplication ? <div className="UserNav">

            <img src="https://cdn-icons-png.flaticon.com/512/6676/6676016.png" alt="" />






          </div> : <div className='btnsLogOut'>

            <a href="/login" className='iniciarSesion'>Iniciar Sesion</a>

            <a href="/register" className='RegisterBtn'>Registrarse</a>
            
            
            
            
             </div>}




        </div>
      </div>
    </div>
  );
};
