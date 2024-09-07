import { motion } from "framer-motion";
import { fadeIn } from "../components/anim";
import { FaHandHoldingHeart, FaMoneyBillWave, FaTshirt } from "react-icons/fa"; // Import relevant icons

const AboutSection = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.01 }}
      className="flex flex-col md:flex-row items-center justify-center mt-8 space-x-0 md:space-x-4 h-auto p-4 overflow-hidden"
    >
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <motion.img
          src="https://placehold.co/498x614/png"
          alt="About Us"
          className="w-1/2 h-auto rounded shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-md font-bold flex items-center text-blue-600 p-2 md:p-0">
          <FaHandHoldingHeart className="mr-2" />
          About Hopethreads
        </h2>
        <h1 className="font-extrabold text-2xl p-2 md:p-0">
          Bringing Hope to Communities in Need
        </h1>
        <p className="mt-2 text-md">
          <span className="font-bold">Hopethreads</span> is a dedicated
          non-profit organization focused on uplifting disaster-affected
          communities. We actively organize fundraising events and clothing
          drives to deliver comfort and support to those in distress. Our
          mission is rooted in the belief that everyone deserves to feel safe,
          cherished, and supported during challenging times.
        </p>
        <p className="mt-4">
          Our passionate team works relentlessly to provide essential aid and
          foster resilience in communities facing adversity. We are committed to
          making a meaningful impact, believing that together, we can inspire
          hope and transform lives for those who need it most.
        </p>
        <div className="border-t border-gray-500 w-full md:w-[80%] mt-5" />
        <div className="flex flex-col md:flex-row mt-5 space-y-5 md:space-y-0 p-2 md:p-0">
          <div className="flex flex-row items-center space-x-2">
            <div className="bg-violet-400 p-2 rounded bg-opacity-40 transition-transform transform hover:scale-105">
              <FaMoneyBillWave className="h-8 w-8 text-blue-600" />{" "}
              {/* Fundraising icon */}
            </div>
            <div className="w-1/2">
              <h1 className="font-bold text-md">Fundraising Events</h1>
              <p className="text-sm">
                Organizing events to raise support and awareness.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="bg-violet-400 p-2 rounded bg-opacity-40 transition-transform transform hover:scale-105">
              <FaTshirt className="h-8 w-8 text-blue-600" />{" "}
              {/* Clothing drives icon */}
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
    </motion.div>
  );
};

// Export the AboutSection
export { AboutSection };
