import React, { useState } from 'react';
import './PhotoGallery.css';
import './modal.css';

function PhotoGallery({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

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

  return (
    <div className="gallery-container">
      <h2>Galería de Fotos</h2>
      <div class="gallery-container__filters">
        <button class="all-photos">Todas las fotos</button>
        <button class="my-photos">Mis fotos</button>
      </div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item" onClick={() => openModal(index)}>
            <img src={photo} alt={`Photo ${index}`} />
          </div>
        ))}
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