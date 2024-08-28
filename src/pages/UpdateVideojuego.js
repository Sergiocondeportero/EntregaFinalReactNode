import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UpdateVideojuego.css'
const UpdateVideojuego = () => {
  const [id, setId] = useState('');  
  const [videojuego, setVideojuego] = useState(null);
  const [precio, setPrecio] = useState('');
  const [genero, setGenero] = useState('');
  const navigate = useNavigate();

  const fetchVideojuego = () => {
    fetch(`https://proyectoreactnode.onrender.com/videojuegos/${id}`)
      .then((res) => {
        if (!res.ok) {
          return res.text().then(text => {
            throw new Error(`HTTP error! status: ${res.status}, message: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        setVideojuego(data);
        setPrecio(data.precio || '');
        setGenero(data.genero || '');
      })
      .catch((error) => {
        console.error('Error fetching videojuego details:', error);
        alert('Error al cargar los detalles del videojuego.');
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://proyectoreactnode.onrender.com/videojuegos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ precio, genero }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then(text => {
            throw new Error(`HTTP error! status: ${res.status}, message: ${text}`);
          });
        }
        return res.json();
      })
      .then(() => {
        alert('Videojuego actualizado exitosamente!');
        navigate(`/videojuego/${id}`);
      })
      .catch((error) => {
        console.error('Error updating videojuego:', error);
        alert('Error al actualizar el videojuego.');
      });
  };

  return (
    <div>
      <h2>Actualizar Videojuego</h2>
      <div>
        <label htmlFor="id">ID del Videojuego:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button onClick={fetchVideojuego}>Cargar Videojuego</button>
      </div>
      {videojuego && (
        <form onSubmit={handleUpdate}>
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
          <button type="submit">Actualizar</button>
        </form>
      )}
    </div>
  );
};

export default UpdateVideojuego;
