import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AddVideojuegoForm.css';

const AddVideojuego = () => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [fechasalida, setFechasalida] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVideojuego = {
      titulo,
      genero,
      plataforma,
      fechasalida,
      imagen,
      precio
    };

    fetch('https://proyectoreactnode.onrender.com/videojuegos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideojuego),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('Videojuego creado exitosamente!');
        navigate('/videojuegos');
      })
      .catch((error) => {
        console.error('Error creando el videojuego:', error);
        alert('Error al crear el videojuego.');
      });
  };

  return (
    <div className="add-videojuego-form-container">
      <h2>Agregar Nuevo Videojuego</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="genero">Género:</label>
          <input
            type="text"
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="plataforma">Plataforma:</label>
          <input
            type="text"
            id="plataforma"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fechasalida">Fecha de Salida:</label>
          <input
            type="date"
            id="fechasalida"
            value={fechasalida}
            onChange={(e) => setFechasalida(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imagen">Imagen URL:</label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            step="0.01"
            min="0"
            required
          />
        </div>
        <button type="submit">Agregar Videojuego</button>
      </form>
    </div>
  );
};

export default AddVideojuego;
