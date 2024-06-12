import React, { useState } from 'react';
import './styles.css';

function OlvideContrasena({ setView }) {
  const [username, setUsername] = useState('');
  const [isUserValid, setIsUserValid] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const validateUser = () => {
    
    if (username) {
      setIsUserValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    alert('Contraseña cambiada exitosamente');
    setView('login');
  };

  return (
    <div className="formulario">
      {!isUserValid ? (
        <>
          <h1>Recuperar Contraseña</h1>
          <form onSubmit={(e) => { e.preventDefault(); validateUser(); }}>
            <div className="usuario">
              <input 
                type="text" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Nombre de Usuario</label>
            </div>
            <input type="submit" value="Validar Usuario" />
            <div className="recordar" onClick={() => setView('login')}>
              Volver al inicio de sesión
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>Cambiar Contraseña</h1>
          <form onSubmit={handlePasswordChange}>
            <div className="contrasena">
              <input 
                type="password" 
                required 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label>Nueva Contraseña</label>
            </div>
            <input type="submit" value="Cambiar Contraseña" />
            <div className="recordar" onClick={() => setView('login')}>
              Volver al inicio de sesión
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default OlvideContrasena;
