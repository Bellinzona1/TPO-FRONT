const InicioSesion = () => {
  return (
    <>
      <h1>Inicio de sesion</h1>
      <div class="username">
        <input type="text" required />
        <label htmlFor="">Ingrese Gmail o nombre de usuario</label>
      </div>
      <div class="contrasena">
        <input type="password" required />
        <label htmlFor="">Ingrese contraseña</label>
      </div>
    </>
  );
};

export default InicioSesion;
