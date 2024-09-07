import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pubproof1 from "../images/pubproof1.png"; // Import the publications image
import pubproof2 from "../images/proof2pub.png"; // Import the publications image
import vol1 from "../images/vol1.jpeg"; // Import the publications image
import vol2 from "../images/vol2.jpeg"; // Import the publications image
import ImageModal from "./ImageModal"; // Import the ImageModal component

// Hardcoded images for each metric
const metricImages = {
  volunteers: [
    vol1, // Replace with actual image URLs
    vol2,
  ],
  "funds raised": [
    "https://placehold.co/500x400/png",
    "https://placehold.co/500x400/png",
  ],
  "social media impressions": [
    "https://placehold.co/600x400/png",
    "https://placehold.co/600x400/png",
  ],
  "community engagement": [
    "https://placehold.co/600x400/png",
    "https://placehold.co/600x400/png",
  ],
  publications: [pubproof1, pubproof2], // Use the imported publications image
};

const Impact = ({ impact }) => {
  const [metrics, setMetrics] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL2}/metrics`
        );
        const data = await response.json();

        // Check if data is available and valid
        if (data && Array.isArray(data)) {
          setMetrics(data);
        } else {
          console.error("Invalid metrics data:", data);
        }
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics(); // Fetch metrics from the server
  }, []);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <div
      className={`mt-10 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg transition-transform duration-700 ease-in-out ${
        impact ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      <h3 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
        Our Impact
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => {
          return (
            <div
              key={index}
              className="p-6 bg-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {metric.label}
                </h4>
                <p className="text-md text-gray-600">
                  {metric.value} / {metric.max}+
                </p>
              </div>
              <div className="relative">
                <div className="bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{
                      width: `${(metric.value / metric.max) * 100}%`,
                      transition: "width 0.5s ease-in-out",
                    }}
                  />
                </div>
              </div>
              {/* Render hardcoded images below the progress bar */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {metricImages[metric.label.toLowerCase()] ? (
                  metricImages[metric.label.toLowerCase()].map(
                    (image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${metric.label} proof ${imgIndex + 1}`}
                        className="w-full h-52 rounded-lg object-cover cursor-pointer" // Set fixed height and maintain aspect ratio
                        onClick={() => handleImageClick(image)} // Handle image click
                      />
                    )
                  )
                ) : (
                  <p>No images available for this metric.</p> // Fallback message
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <Link to="/get-involved">
          <button className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Get Involved
          </button>
        </Link>
      </div>

      {/* Modal for fullscreen image */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Impact;
