import { IoMdHome } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../components/anim";
import teamIMG from "../images/thteam.png";
import Mission from "./Mission"; // Adjust the path as necessary
import { AboutSection } from "./AboutTop"; // Adjust the path as necessary

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

      {/* New Section for Our Organization */}
      {/* <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row items-center justify-center mt-8 space-x-0 md:space-x-4 h-auto p-4 overflow-hidden"
      >
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img
            src="https://placehold.co/498x614/png"
            alt="ds"
            className="w-1/2 h-auto rounded" // Adjust width for mobile
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-md font-bold flex items-center text-blue-600 p-2 md:p-0">
            <FaHandHoldingHeart className="mr-2 " />
            About Hopethreads
          </h2>
          <h1 className="font-extrabold text-2xl p-2 md:p-0">
            Bringing Hope to Communities in Need
          </h1>
          <span className="w-auto md:w-[80%] p-2 md:p-0">
            <p className="mt-2 text-md">
              <span className="font-bold">Hopethreads</span> is a dedicated
              non-profit organization focused on uplifting disaster-affected
              communities. We actively organize fundraising events and clothing
              drives to deliver comfort and support to those in distress. Our
              mission is rooted in the belief that everyone deserves to feel
              safe, cherished, and supported during challenging times.
            </p>
            <p className="mt-4">
              Our passionate team works relentlessly to provide essential aid
              and foster resilience in communities facing adversity. We are
              committed to making a meaningful impact, believing that together,
              we can inspire hope and transform lives for those who need it
              most.
            </p>
          </span>
          <div className="border-t border-gray-500 w-full md:w-[80%] mt-5" />
          <div className="flex flex-col md:flex-row mt-5 space-y-5 md:space-y-0 p-2 md:p-0">
            <div className="flex flex-row space-x-2">
              <div className="bg-violet-400 p-2 rounded bg-opacity-40">
                <img src={fund} className="h-full w-max" alt="sdfg" />
              </div>
              <div className="w-1/2">
                <h1 className="font-bold text-md">Fundraising Events</h1>
                <p className="text-sm">
                  Organizing events to raise support and awareness.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-2">
              <div className="bg-violet-400 p-2 rounded bg-opacity-40">
                <img src={clothes} className="h-full" alt="sdfg" />
              </div>
              <div className="w-1/2">
                <h1 className="font-bold text-md">Clothing Drives</h1>
                <p className="text-sm">
                  Providing comfort through essential clothing donations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div> */}
      <AboutSection />

      <Mission />

      {/* New Section for Introducing Members */}
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
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
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
          {/* Member 2 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 2"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Yoshita Virdi</h3>
            <p className="text-sm text-gray-600">Chief Financial Officer</p>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 3"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Piya Kumar</h3>
            <p className="text-sm text-gray-600">Volunteer Coordinator</p>
          </div>
          {/* Member 4 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 1"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Katya Abramova</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
          {/* Member 5 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2">
            <img
              src="https://placehold.co/150x150/png" // Replace with actual member image
              alt="Member 1"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h3 className="font-bold">Norah Thomas</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
