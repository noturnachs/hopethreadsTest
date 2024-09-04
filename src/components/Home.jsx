import React, { useEffect, useState } from "react";
import mainImg from "../images/destroyed-by-hurricane-ian-subur.png"; // Import your main image
import mainImg2 from "../images/hurricane-season.png";
import mainImg3 from "../images/wildfire001.png";
import Work from "./Works"; // Import the Work component

import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

function Home() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); // State to control fade effect

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText1(true), 500); // Show first text after 500ms
    const timer2 = setTimeout(() => setShowText2(true), 1000); // Show second text after 1000ms
    const timer3 = setTimeout(() => setShowText3(true), 1500); // Show third text after 1500ms
    const timer4 = setTimeout(() => setShowButton(true), 2000); // Show button after 2000ms

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const images = [
    mainImg, // Replace with your image URLs
    mainImg2,
    mainImg3,
  ];

  // Function to go to the next image
  const nextImage = () => {
    setFade(true); // Start fade effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false); // End fade effect
    }, 300); // Match this duration with the CSS transition duration
  };

  // Function to go to the previous image
  const prevImage = () => {
    setFade(true); // Start fade effect
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFade(false); // End fade effect
    }, 300); // Match this duration with the CSS transition duration
  };

  return (
    <div className="w-full  h-full overflow-hidden p-5 justify-center text-center">
      <div className="flex flex-col md:flex-row p-10 h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-2">
          <p
            className={`text-sm font-bold transition-transform duration-700 ease-in-out ${
              showText1
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            we are here to...
          </p>
          <h2
            className={`font-extrabold text-3xl md:text-5xl max-w-md transition-transform duration-700 ease-in-out ${
              showText2
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Help Bring Hope to Disaster - Affected Communities
          </h2>
          <p
            className={`text-sm md:text-md font-regular transition-transform duration-700 ease-in-out w-full md:w-[80%] ${
              showText3
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Donate now. Your contributions can provide essential supplies, food,
            and shelter to those in need. Every donation, no matter how small,
            makes a significant impact in the lives of disaster-affected
            families. Join us in our mission to bring hope and support to those
            who need it most.
          </p>
          <div
            className={`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 transition-transform duration-700 ease-in-out ${
              showButton
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <button className="relative py-2 px-6 w-full md:w-max text-white text-base font-bold rounded-full overflow-hidden bg-blue-500 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Donate Now
            </button>

            <button className="relative py-2 px-6 w-full md:w-auto text-black text-base font-bold rounded-full overflow-hidden bg-blue-50 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ff7e5f] before:to-[#feb47b] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              <span className="flex flex-row items-center justify-center">
                <IoIosInformationCircleOutline size={20} /> &nbsp;Learn More
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative mt-10 md:mt-0">
          {/* Display the current image with fade effect */}
          <img
            src={images[currentIndex]}
            alt="Main Content"
            className={`relative z-10 h-auto md:h-96 md:w-auto w-max rounded-lg shadow-lg mb-4 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`} // Apply fade effect
          />

          {/* Navigation buttons as arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent transition duration-300 z-20"
          >
            <FaChevronLeft size={30} color="white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent transition duration-300 z-20"
          >
            <FaChevronRight size={30} color="white" />
          </button>
        </div>
      </div>
      {/* Add the Work component here */}
      <Work />
    </div>
  );
}

export default Home;
