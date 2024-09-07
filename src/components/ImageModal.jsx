// ImageModal.js
import React from "react";
import ReactDOM from "react-dom";

const ImageModal = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close modal on click
    >
      <img
        src={image}
        alt="Fullscreen"
        className="max-h-full max-w-full object-contain" // Maintain aspect ratio
      />
    </div>,
    document.body // Render the modal at the root level
  );
};

export default ImageModal;
