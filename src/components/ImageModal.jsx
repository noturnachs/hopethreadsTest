import React from "react";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        &times; {/* Close button */}
      </button>
      <img
        src={imageSrc}
        alt="Fullscreen"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()} // Prevent click on image from closing the modal
      />
    </div>
  );
};

export default ImageModal;
