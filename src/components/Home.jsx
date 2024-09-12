import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import mainImg from "../images/destroyed-by-hurricane-ian-subur.png";
import mainImg2 from "../images/hurricane-season.png";
import mainImg3 from "../images/wildfire001.png";
import Work from "./Works";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Loading from "./Loading"; // Import the Loading component
import Impact from "./Impact"; // Import the Impact component
import { FaRegNewspaper } from "react-icons/fa";
import Partners from "./Partners"; // Import the Partners component

function Home() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showImpact, setShowImpact] = useState(false); // State to control Impact visibility
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const containerRef = useRef(null);

  const images = [mainImg, mainImg2, mainImg3];

  const imageOrderMap = useMemo(() => {
    const map = new Map();
    let size = images.length;
    for (let i = 0; i < size; i++) {
      map.set((activeIndex + i) % size, size - 1 - i);
    }
    return map;
  }, [activeIndex, images.length]);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If not visited, show loading screen
      const loadingTimer = setTimeout(() => {
        setLoading(false); // Set loading to false after images are loaded
        localStorage.setItem("hasVisited", "true"); // Set the flag in localStorage
      }, 2000); // Adjust the time as needed

      return () => clearTimeout(loadingTimer);
    } else {
      // If visited, skip loading
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText1(true), 200);
    const timer2 = setTimeout(() => setShowText2(true), 400);
    const timer3 = setTimeout(() => setShowText3(true), 600);
    const timer4 = setTimeout(() => setShowButton(true), 800);
    const timer5 = setTimeout(() => setShowImage(true), 1000);
    const timer6 = setTimeout(() => setShowImpact(true), 1500); // Show Impact after a delay

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearInterval(interval);
    };
  }, [images.length]);

  if (loading) {
    return <Loading />; // Show loading component while loading
  }

  return (
    <div className="w-full h-full overflow-hidden p-5 justify-center text-center">
      <div className="flex flex-col md:flex-row p-10 h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-2">
          <p
            className={`text-sm font-bold transition-transform duration-700 ease-in-out ${
              showText1
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            We are here to...
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
            className={`text-md md:text-md font-semibold transition-transform duration-700 ease-in-out w-full md:w-[80%] ${
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
            <Link to="/donate">
              <button className="relative py-2 px-6 w-full md:w-max text-white text-base font-bold rounded-full overflow-hidden bg-blue-500 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 bg-green-600">
                Donate Now
              </button>
            </Link>
            <Link to="/programs">
              <button className="relative py-2 px-6 w-full md:w-auto text-white text-base font-bold rounded-full overflow-hidden bg-blue-50 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-300 before:to-blue-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 bg-blue-500">
                <span className="flex flex-row items-center justify-center">
                  <IoIosInformationCircleOutline size={20} /> &nbsp;Learn More
                </span>
              </button>
            </Link>
            <a
              href="https://hopethreads-newsletter.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative py-2 px-6 w-full md:w-auto text-white text-base font-bold rounded-full overflow-hidden bg-blue-50 transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-300 before:to-blue-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 bg-blue-500">
                <span className="flex flex-row items-center justify-center">
                  <FaRegNewspaper size={20} /> &nbsp;Our Newsletter
                </span>
              </button>
            </a>
          </div>
        </div>
        <div
          className={`w-full md:w-1/2 flex flex-col items-center justify-center relative mt-28 mb-24 md:mt-0 md:mb-0 transition-transform duration-700 ease-in-out ${
            showImage
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
          ref={containerRef}
        >
          {images.map((image, i) => {
            const order = imageOrderMap.get(i);
            const zIndex = imageOrderMap.size - order;
            const scale = 1 - 0.1 * order;
            const translateX = 10 * order;

            return (
              <img
                key={i}
                src={image}
                alt={`Slide ${i}`}
                className="absolute rounded-lg shadow-lg transition-transform duration-500 ease-in-out md:h-[130%]"
                style={{
                  transform: `scale(${scale}) translateX(${translateX}px)`,
                  zIndex: zIndex,
                  opacity: order === 0 ? 1 : 0.7,
                }}
              />
            );
          })}
        </div>
      </div>
      <Work />
      <Impact impact={showImpact} /> {/* Pass showImpact to Impact component */}
      <Partners /> {/* Include the Partners component */}
    </div>
  );
}

export default Home;
