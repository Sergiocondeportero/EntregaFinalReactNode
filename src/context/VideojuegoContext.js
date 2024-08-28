// src/context/VideojuegoContext.js
import React, { createContext, useState, useEffect } from 'react';

export const VideojuegoContext = createContext();

export const VideojuegoProvider = ({ children }) => {
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    fetch('https://proyectoreactnode.onrender.com/videojuegos')
      .then(res => res.json())
      .then(data => setVideojuegos(data.videojuegos));
  }, []);

  return (
    <VideojuegoContext.Provider value={{ videojuegos, setVideojuegos }}>
      {children}
    </VideojuegoContext.Provider>
  );
};
