import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import '../css/VideojuegoDetail.css'; 

const VideojuegoDetail = () => {
  const { id } = useParams();
  const { data, loading } = useFetch('https://proyectoreactnode.onrender.com/videojuegos');

  if (loading) return <p>Cargando...</p>;

  const videojuego = data.find(vj => vj._id === id);

  if (!videojuego) return <p>Videojuego no encontrado.</p>;

  return (
    <div className="videojuego-detail-container">
      <h2>{videojuego.titulo}</h2>
      <p>Género: {videojuego.genero}</p>
      <p>Plataforma: {videojuego.plataforma}</p>
      <p>Precio: ${videojuego.precio}</p>
      <img src={videojuego.imagen} alt={videojuego.titulo} />
    </div>
  );
};

export default VideojuegoDetail;
