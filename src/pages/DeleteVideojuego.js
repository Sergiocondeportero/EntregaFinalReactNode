import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/DeleteVideojuego.css'; // Importa el archivo CSS

const DeleteVideojuego = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`https://proyectoreactnode.onrender.com/videojuegos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('Videojuego eliminado exitosamente!');
        navigate('/videojuegos');
      })
      .catch((error) => {
        console.error('Error al eliminar el videojuego:', error);
        alert('Error al eliminar el videojuego.');
      });
  };

  return (
    <div className="delete-videojuego-form-container">
      <h2>Eliminar Videojuego por ID</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="ID del Videojuego"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
};

export default DeleteVideojuego;
