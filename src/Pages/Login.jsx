import React, { useState } from 'react';
import "../Components/Styles/Login.css";

export const Login = () => {
  const [Contraseña, setpassword] = useState("");
  const [usuario, setusuario] = useState("");

  // Manejar el cambio en el campo de usuario
  const handleUsuarioChange = (e) => {
    setusuario(e.target.value);
  };

  // Manejar el cambio en el campo de contraseña
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  // Manejar el click en el botón de iniciar sesión
  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    const usuarioLogin = { Contraseña, usuario };
    console.log('Datos de inicio de sesión:', usuarioLogin);
    // Aquí puedes realizar cualquier acción necesaria como enviar los datos al backend
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder='Ingresa tu nombre'
          value={usuario}
          onChange={handleUsuarioChange}
        />
        <input
          type="password"
          placeholder='Ingresa tu Contraseña'
          value={Contraseña}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLoginClick}>Iniciar sesión</button>
      </form>
    </div>
  );
}
