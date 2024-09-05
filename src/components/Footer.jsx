// Footer.js
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa"; // Import additional icons

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 text-sm py-6 mt-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div
            className="flex items-center space-x-2 hover:text-blue-600 transition duration-200"
            title="Email"
          >
            <MdOutlineEmail size={20} />
            <span>hopethreadsco@gmail.com</span>
          </div>

          <div
            className="flex items-center space-x-2 hover:text-blue-600 transition duration-200"
            title="Phone"
          >
            <FaPhoneAlt size={15} />
            <span>240-721-0434</span>
          </div>

          <a
            href="https://www.instagram.com/hopethreads.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-600 transition duration-200"
            title="Instagram"
          >
            <FaInstagram size={20} />
            <span>hopethreads.co</span>
          </a>
        </div>
        <div className="text-sm font-light mt-4 md:mt-0 text-center md:text-right">
          &copy; {new Date().getFullYear()} Hope Threads Co. All rights
          reserved.
        </div>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
    </div>
  );
};

export default Footer;
