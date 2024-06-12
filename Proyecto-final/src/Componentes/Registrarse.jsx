import React from 'react';
import './styles.css';

function Registrarse({ setView }) {
  return (
    <div className="formulario">
      <h1>Registrarse</h1>
      <form method="post">
        <div className="usuario">
          <input type="text" required />
          <label> Usuario</label>
        </div>
        <div className="contrasena">
          <input type="password" required />
          <label>Contraseña</label>
        </div>
        <div className="contrasena">
          <input type="password" required />
          <label>Confirmar Contraseña</label>
        </div>
        <input type="submit" value="Registrar" />
        <div className="recordar" onClick={() => setView('login')}>
          Volver al inicio de sesión
        </div>
      </form>
    </div>
  );
}

export default Registrarse;
