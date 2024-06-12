import React from 'react';
import './styles1.css';

function Principal() {
  return (
    <main>
      <header>
        <h1>Biblioteca Mística de Thalindor</h1>
        <a href="Navegador.html" id="logout">Cerrar Sesión</a>
      </header>

      <section>
        <table>
          <tbody>
            <tr>
              <td>Gestionar Biblioteca Personal</td>
            </tr>
            <tr>
              <td>Buscar Libros</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <img 
          className="transparent-image" 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNI1pfXdm3lJwe737BvgxhiTbGnS4j0VvQylmrzQxXgF6lTTUkXYwwpBwq1yKP4fWDrsEcH0YCkU-p-fUnYLQddjv_AUBhe0C05t_bKzqP7Ez8PoHvg65KQBdrE8LBtH6cY3tTAESpua85/s1600/Sitios+web+y+bibliotecas+para+descargar+libros+gratis.jpg" 
          width="800px" 
          height="255px" 
          alt="Biblioteca"
        />
      </section>
    </main>
  );
}

export default Principal;
