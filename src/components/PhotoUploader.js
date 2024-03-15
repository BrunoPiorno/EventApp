import React, { useState } from 'react';

function PhotoUploader({ onPhotoUploaded }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        onPhotoUploaded(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div className="photo-uploader-container">
      <h2>Subir Foto</h2>
      <div className="photo-uploader__cont">
        <input type="file" className="file-input" onChange={handleFileChange} />
        <button className="upload-button" onClick={handleUpload}>Guardar</button>
      </div>
    </div>
  );
}

export default PhotoUploader;