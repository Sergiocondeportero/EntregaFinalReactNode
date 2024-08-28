import React, { useState, useContext } from 'react';
import { VideojuegoContext } from '../context/VideojuegoContext';

const VideojuegoForm = ({ isUpdate, videojuego }) => {
  const { setVideojuegos } = useContext(VideojuegoContext);
  const [formData, setFormData] = useState({
    titulo: videojuego?.titulo || '',
    genero: videojuego?.genero || '',
    plataforma: videojuego?.plataforma || '',
    precio: videojuego?.precio || '',
    imagen: videojuego?.imagen || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isUpdate
      ? `https://proyectoreactnode.onrender.com/videojuegos/${videojuego._id}`
      : 'https://proyectoreactnode.onrender.com/videojuegos';

    const method = isUpdate ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (isUpdate) {
          setVideojuegos((prev) =>
            prev.map((vj) => (vj._id === data._id ? data : vj))
          );
        } else {
          setVideojuegos((prev) => [...prev, data]);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={formData.titulo}
        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Género"
        value={formData.genero}
        onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
      />
      <input
        type="text"
        placeholder="Plataforma"
        value={formData.plataforma}
        onChange={(e) =>
          setFormData({ ...formData, plataforma: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Precio"
        value={formData.precio}
        onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL Imagen"
        value={formData.imagen}
        onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
      />
      <button type="submit">{isUpdate ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default VideojuegoForm;
