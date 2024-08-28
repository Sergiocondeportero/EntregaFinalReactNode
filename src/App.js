import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Barra';
import VideojuegoList from './components/VideojuegoList';
import VideojuegoDetail from './components/VideojuegoDetail';
import AddVideojuegoForm from './components/AddVideojuegoForm';
import DeleteVideojuego from './pages/DeleteVideojuego';
import UpdateVideojuego from './pages/UpdateVideojuego';
import Footer from "./components/Pie";
import SearchVideojuego from "./components/SearchForm"
import HomePage from './pages/HomePage';
import './css/App.css'
const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/videojuegos" element={<VideojuegoList />} />
          <Route path="/videojuego/:id" element={<VideojuegoDetail />} />
          <Route path="/add" element={<AddVideojuegoForm />} />
          <Route path="/delete" element={<DeleteVideojuego />} />
          <Route path="/search" element={<SearchVideojuego />} />
          <Route path="/update" element={<UpdateVideojuego />} /> 
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
};

export default App;

