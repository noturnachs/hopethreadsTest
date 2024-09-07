import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../components/anim";
import Fevent from "./FEvents"; // Import Fevent from FEvents.jsx
import blend from "../images/blend.jpeg";
import sterling from "../images/sterling.jpeg";
import { FaInstagram } from "react-icons/fa";
import sud from "../images/sudan.jpeg";
import sud2 from "../images/ourorg3.jpeg";

const Fundraisers = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Main Fundraisers Heading */}
      <div className="h-36">
        <div className="flex items-center justify-center mb-2">
          <h1 className="text-2xl font-extrabold">Fundraisers</h1>
        </div>
        {/* Navigation Section */}
        <div className="flex items-center justify-center space-x-1">
          <div className="flex items-center">
            <IoMdHome size={15} />
            <h2 className="text-sm ml-1">Home</h2>
          </div>
          <span className="flex items-center">
            <FaArrowRight size={15} />
          </span>
          <h2 className="text-sm font-extrabold">Fundraisers</h2>
        </div>
        <h3 className="flex justify-center mt-10 font-semibold text-md">
          Read about our past and upcoming fundraisers with local stores we have
          partnered with!
        </h3>
      </div>

      {/* Future Events Section */}
      <Fevent />

      {/* Blend Coffee Bar Section */}
      <div className="border-t border-black mt-10" />

      <h2 className="text-3xl font-extrabold mb-5 mt-5">
        Fundraiser Highlights
      </h2>
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50 rounded-lg"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-5">Blend Coffee Bar</h2>
          <p>
            On December 3rd, our team and a couple of volunteers (Srijan
            Challapalli, Shafaat Ramzani, & Akul Kumar) sold hot chocolate and
            cookies at Blend to fundraise for Palestinian refugees. A grand
            total of{" "}
            <span className="text-green-500 font-semibold">$1,067 </span>was
            raised and all profits were donated to Islamic Relief USA.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={blend}
            alt="Blend Coffee Bar Fundraiser"
            className="w-full h-auto rounded"
          />
        </div>
      </motion.div>

      {/* SterlingFest Section */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50 rounded-lg"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-5">SterlingFest</h2>
          <p>
            On October 7th, our team held a fundraiser at the SterlingFest. We
            were the only high school vendors and made over{" "}
            <span className="text-green-500 font-semibold">$600+</span> for Maui
            Wildfires. We sold donuts and apple cider.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={sterling}
            alt="SterlingFest Fundraiser"
            className="w-full h-auto rounded"
          />
        </div>
      </motion.div>

      {/* sudan */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50 rounded-lg"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold mb-5">
            Sudan Humanitarian Relief Fundraiser
          </h2>
          <p>additional text here</p>
        </div>
        <div className="md:w-1/2">
          <img
            src={sud}
            alt="sudan fundraiser"
            className="w-full h-auto rounded"
          />
        </div>
      </motion.div>

      {/* sudan 2 */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50 rounded-lg"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-5">
            Trivia Night for Sudan
          </h2>
          <p>additional text here</p>
        </div>
        <div className="md:w-1/2">
          <img
            src={sud2}
            alt="sudan trivia night"
            className="w-full h-auto rounded"
          />
        </div>
      </motion.div>

      {/* View More Fundraisers Section */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-md font-bold">More Fundraisers</h2>
        <a
          href="https://www.instagram.com/hopethreads.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 mt-2 text-2xl font-semibold"
        >
          <FaInstagram size={24} className="mr-2 text-pink-500" />{" "}
          @hopethreads.co
        </a>
      </div>
    </div>
  );
};

export default Fundraisers;
