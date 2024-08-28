import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import '../css/VideojuegosList.css'; 

const VideojuegoList = () => {
  const { data, loading } = useFetch('https://proyectoreactnode.onrender.com/videojuegos');

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Lista de Videojuegos</h2>
      <div className="videojuegos-container">
        {data.map((vj) => (
          <div key={vj._id} className="videojuego-item">
            <img src={vj.imagen || "default-image.jpg"} alt={vj.titulo} />  
            <Link to={`/videojuego/${vj._id}`}>{vj.titulo}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideojuegoList;

