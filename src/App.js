import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import PhotoUploader from './components/PhotoUploader';
import PhotoGallery from './components/PhotoGallery';
import userIcon from './images/icon.jpg';

function App() {
  // Obtenemos las fotos del localStorage al iniciar la aplicación
  const [menuOpen, setMenuOpen] = useState(false);
  const initialPhotos = JSON.parse(localStorage.getItem('photos')) || [];
  const [photos, setPhotos] = useState(initialPhotos);

  //cerrar sesion
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  // actualizo el localStorage cada vez que se agregan nuevas fotos
  useEffect(() => {
    localStorage.setItem('photos', JSON.stringify(photos));
  }, [photos]);

  const handlePhotoUploaded = (photoData) => {
    setPhotos([...photos, photoData]);
  };

  return (
    <Router>
      <div className="container">
      <header className="header">
        <h1>Nombre de tu evento</h1>
        <div className="user-icon-container">
          <img
            src={userIcon}
            alt="User Icon"
            className="user-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>
                <Link to="/profile">Perfil</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={
              <>
                <PhotoUploader onPhotoUploaded={handlePhotoUploaded} />
                <div className="gallery-container">
                  <PhotoGallery photos={photos} />
                </div>
              </>
            } />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; PiornoApp</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
