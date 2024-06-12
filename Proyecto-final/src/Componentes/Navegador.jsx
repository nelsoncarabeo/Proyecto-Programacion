import React, { useState } from 'react';
import './styles.css';
import Registrarse from './Registrarse';
import OlvideContrasena from './OlvideContrasena';

function Navegador() {
  const [view, setView] = useState('login');

  return (
    <div className="formulario">
      {view === 'login' && (
        <>
          <h1>Inicio de Sesión</h1>
          <form method="post">
            <div className="usuario">
              <input type="text" required />
              <label> Usuario</label>
            </div>
            <div className="contrasena">
              <input type="password" required />
              <label>Contraseña</label>
            </div>
            <div className="recordar" onClick={() => setView('olvideContrasena')}>
              ¿Olvido su contraseña?
            </div>
            <input type="submit" value="Iniciar" />
            <div className="registrarse">
              <a href="#" onClick={() => setView('registrarse')}>registrarse</a>
            </div>
          </form>
        </>
      )}
      {view === 'registrarse' && <Registrarse setView={setView} />}
      {view === 'olvideContrasena' && <OlvideContrasena setView={setView} />}
    </div>
  );
}

export default Navegador;
