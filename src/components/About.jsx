import { IoMdHome } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../components/anim";
import teamIMG from "../images/thteam.png";
import Mission from "./Mission"; // Adjust the path as necessary
import { AboutSection } from "./AboutTop"; // Adjust the path as necessary
import yoshita from "../images/yoshita.jpeg";
import piya from "../images/piya.jpeg";

const About = () => {
  return (
    <>
      {/* Main About Us Heading */}
      <div className="h-36">
        <div className="flex items-center justify-center mb-2">
          <h1 className="text-2xl font-extrabold">About Us</h1>
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
          <h2 className="text-sm font-extrabold">About Us</h2>
        </div>
      </div>

      <AboutSection />

      <Mission />

      {/* New Section for Introducing Members */}
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col items-center justify-center mt-5 bg-[#b3e1fb] bg-opacity-20 p-6 overflow-hidden"
      >
        <h2 className="text-5xl font-bold text-blue-600">Meet Our Team</h2>
        <img src={teamIMG} alt="s" className="rounded mt-5" />
        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          {/* Member 1 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 1"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Nidhi Thammineni</h3>
            <p className="text-xs text-gray-600">
              Chief Officer of Technology Communication
            </p>
          </div>
          {/* Member 2 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src={yoshita} // Replace with actual member image
              alt="Member 2"
              className="rounded-full w-32 h-32 mb-2 object-cover" // Added object-cover
              style={{ maxWidth: "100%", maxHeight: "100%" }} // Ensures the image does not exceed its container
            />
            <h3 className="font-bold">Yoshita Virdi</h3>
            <p className="text-xs text-gray-600">Chief Financial Officer</p>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src={piya} // Replace with actual member image
              alt="Member 3"
              className="rounded-full w-32 h-32 mb-2 object-cover" // Added object-cover
              style={{ maxWidth: "100%", maxHeight: "100%" }} // Ensures the image does not exceed its container
            />
            <h3 className="font-bold">Piya Kumar</h3>
            <p className="text-xs text-gray-600">
              Chief Officer of Program Management{" "}
            </p>
          </div>
          {/* Member 4 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 1"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Katya Abramova</h3>
            <p className="text-xs text-gray-600">Founder & CEO</p>
          </div>
          {/* Member 5 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 1"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Norah Thomas</h3>
            <p className="text-xs text-gray-600">Chief Officer of Marketing</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
