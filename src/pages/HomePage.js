import React from 'react';
import '../css/HomePage.css'; 

const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenido a la Tienda de Videojuegos</h1>
        <p className="description">
          En nuestra tienda, encontrarás una amplia selección de videojuegos para todas las plataformas, desde los clásicos que marcaron una época hasta las últimas novedades que te sumergirán en mundos increíbles. Ya seas un jugador casual o un hardcore gamer, tenemos algo para todos.
        </p>
      </header>
      
      <section className="featured-section">
        <h2 className="featured-title">¿Por qué elegirnos?</h2>
        <p className="featured-content">
          En la Tienda de Videojuegos, nos enorgullecemos de ofrecer:
          <ul>
            <li>Una selección curada de los mejores títulos.</li>
            <li>Precios competitivos y ofertas exclusivas.</li>
            <li>Un servicio al cliente dedicado y eficiente.</li>
            <li>Entrega rápida y opciones de pago seguras.</li>
          </ul>
          Además, nuestro equipo de expertos siempre está disponible para recomendarte el juego perfecto según tus gustos y preferencias.
        </p>
      </section>
      
      <section className="list-container">
        <h2 className="featured-title">Nuestra Colección</h2>
        <p className="featured-content">
          Explora nuestra colección de videojuegos, actualizada regularmente para incluir las últimas novedades del mercado. Navega por nuestras categorías, descubre joyas ocultas, y encuentra tu próximo juego favorito.
        </p>
       
      </section>

      
    </div>
  );
};

export default HomePage;
