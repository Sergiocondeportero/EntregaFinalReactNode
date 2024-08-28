import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/videojuegos">Lista de Videojuegos</Link></li>
        <li><Link to="/search">Buscar Videojuego por ID</Link></li>
        <li><Link to="/add">Agregar Videojuego</Link></li>
        <li><Link to="/delete">Eliminar Videojuego por ID</Link></li>
        <li><Link to="/update">Actualizar Videojuego</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

