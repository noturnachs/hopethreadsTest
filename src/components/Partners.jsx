// Partners.jsx
import React from "react";
import borgenLogo from "../images/borgen.png"; // Adjust the path as necessary
import virginiaHeartLogo from "../images/doctors.png"; // Adjust the path as necessary
import saveTheChildrenLogo from "../images/savethechildren.png"; // Adjust the path as necessary

function Partners() {
  return (
    <div className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h3 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
        Our Partners
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
        <a
          href="https://borgenproject.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={borgenLogo}
            alt="Borgen Project"
            className="h-16 md:h-20 transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a
          href="https://www.virginiaheart.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={virginiaHeartLogo}
            alt="Virginia Heart"
            className="h-16 md:h-20 transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a
          href="https://www.savethechildren.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={saveTheChildrenLogo}
            alt="Save the Children"
            className="h-16 md:h-20 transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
}

export default Partners;
