import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      navigate(`/videojuego/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ID del videojuego"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
