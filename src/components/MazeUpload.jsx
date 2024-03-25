import React, { useState } from 'react';
import mazeUploadValidation from '../utils/MazeUploadValidation';

const MazeUpload = () => {
  const [dragging, setDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadDisplayText, setUploadDisplayText] = useState("Drag and drop files here");

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);
    // Handle the dropped files (e.g., upload to server, process locally, etc.)
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Assuming only one file is being uploaded for simplicity
    const uploadedFile = files[0];
    console.log("uploaded" + uploadedFile)
    const mazeValidated = mazeUploadValidation(uploadedFile);
    if (mazeValidated===false) {
      setUploadDisplayText("Only image files are accepted :-). Please try again.");
    }
    else {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  return (
    <div
      className={`drag-upload ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {uploadedImage ? (
        <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px' }} />
      ) : (
        <p>{uploadDisplayText}</p>
      )}
    </div>
  );
};

export default MazeUpload;
