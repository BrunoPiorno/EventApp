import React, { useState } from 'react';
import './PhotoGallery.css';
import './modal.css';

function PhotoGallery({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(true); // Estado para controlar qué conjunto de fotos mostrar

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
  };

  const goToPreviousPhoto = (event) => {
    event.stopPropagation();
    setSelectedPhotoIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === 0) {
        return photos.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };
  
  const goToNextPhoto = (event) => {
    event.stopPropagation();
    setSelectedPhotoIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === photos.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleShowAllPhotos = () => {
    setShowAllPhotos(true); // Cambiar el estado para mostrar todas las fotos
  };

  const handleShowMyPhotos = () => {
    setShowAllPhotos(false); // Cambiar el estado para mostrar solo las fotos del usuario actual
  };

  return (
    <div className="gallery-container">
      <h2>Galería de Fotos</h2>
      <div className="gallery-container__filters">
        <button className="all-photos" onClick={handleShowAllPhotos}>Todas las fotos</button>
        <button className="my-photos" onClick={handleShowMyPhotos}>Mis fotos</button>
      </div>
      <div className="gallery">
        {showAllPhotos 
          ? photos.map((photo, index) => (
              <div key={index} className="photo-item" onClick={() => openModal(index)}>
                <img src={photo} alt={`Photo ${index}`} />
              </div>
            ))
          : photos.map((photo, index) => (
              // Suponiendo que cada foto tiene un campo 'userId' que identifica al usuario que la subió
              // y un campo 'currentUserId' que identifica al usuario actual
              photo.userId === photo.currentUserId && (
                <div key={index} className="photo-item" onClick={() => openModal(index)}>
                  <img src={photo} alt={`Photo ${index}`} />
                </div>
              )
            ))
        }
      </div>

      {selectedPhotoIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>X</span>
            <img src={photos[selectedPhotoIndex]} alt={`Photo ${selectedPhotoIndex}`} />

            <button className="prev-button" onClick={goToPreviousPhoto}>
              Prev
            </button>
            <button className="next-button" onClick={goToNextPhoto}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
