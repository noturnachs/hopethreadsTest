import React, { useState } from "react";

// Import your images
import slide1 from "../images/destroyed-by-hurricane-ian-subur.png";
import slide2 from "../images/hurricane-season.png";
import slide3 from "../images/wildfire001.png";

const slides = [
  {
    image: slide1,
    text: "Comforting Communities in Need",
  },
  {
    image: slide2,
    text: "Help Bring Hope to Disaster-Affected Communities",
  },
  {
    image: slide3,
    text: "Preparing for Disaster Relief",
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [textSlideIn, setTextSlideIn] = useState(true);

  const handleDotClick = (index) => {
    setFade(false);
    setTextSlideIn(false); // Start sliding out the text and button
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
      setTextSlideIn(true); // Start sliding in the text and button
    }, 600); // Match this duration with the CSS transition duration
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].text}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <span
          className={`text-white text-4xl p-3 md:text-5xl font-extrabold transition-transform duration-1000 ease-in-out ${
            textSlideIn ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {slides[currentSlide].text}
        </span>
        {slides[currentSlide].text ===
          "Help Bring Hope to Disaster-Affected Communities" && (
          <button
            className={`mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-500 ease-in-out ${
              textSlideIn
                ? "translate-x-0 opacity-100" // Final position
                : "-translate-x-10 opacity-0" // Start position (off-screen to the left)
            } hover:bg-blue-600`}
          >
            Donate Now
          </button>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
