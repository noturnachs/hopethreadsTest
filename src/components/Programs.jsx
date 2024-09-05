import React from "react";
import bgtop from "../images/bg-pr.png";
import { motion } from "framer-motion";
import { fadeIn } from "../components/anim";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Programs() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Background Image Section */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="relative h-64 bg-cover bg-center mb-4 rounded"
        style={{
          backgroundImage: `url("${bgtop}")`,
        }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-50 rounded">
          Our Programs
        </h1>
      </motion.div>

      {/* Clothing Donation Boxes Section */}
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-extrabold mb-5">
            Clothing Donation Boxes
          </h2>
          <p>
            <span className="font-semibold ">
              Do you have used clothing in good condition that's stuck in the
              back of your closet? Do you want to help disaster-stricken
              communities in need but don't know how?
            </span>{" "}
            <br />
            <br />
            At every Loudoun County school, HopeThreads boxes are set up to
            collect used clothes that are still in good condition. These boxes
            are located either in the school library or cafeteria. Every three
            clothing items donated is equivalent to one volunteer hour. Donate
            your clothes today and track your volunteer hours below!
          </p>
          <Link to="/get-involved">
            <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400 transition-transform transform hover:scale-105 ">
              Join Now
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={img1}
            alt="Clothing Donation"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>

      {/* Clothing Sorting Section */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-extrabold mb-5">Clothing Sorting</h2>
          <p>
            At the end of each month, we go to each school/shop where we have
            set up our donation boxes and collect the clothes. The clothes we
            receive come in a range from age to size and must be sorted. If you
            want to earn a couple of volunteer hours, click the link below to
            help us sort through the clothes which will then be donated to those
            affected by disasters.
          </p>
          <Link to="/get-involved">
            <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400 transition-transform transform hover:scale-105 ">
              Join Now
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={img2}
            alt="Clothing Sorting"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>

      {/* Community Engagement Sessions Section */}
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-extrabold mb-5">
            Community Engagement Sessions
          </h2>
          <p>
            Many people want to help those affected by disasters but are not
            sure how to. Many individuals are also not fully aware of current
            disasters and the full details of what is going on. We provide
            sessions in the Brambleton library and Ashburn library to educate
            kids and adults about current disasters. Attendees can engage in
            various activities to help understand conflicts and encourage
            positive teamwork. Join us in learning how to provide hope and
            happiness to victims during difficult times!
          </p>
          <Link to="/get-involved">
            <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400 transition-transform transform hover:scale-105 ">
              Join Now
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={img3}
            alt="Community Engagement"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>

      {/* Social Media Advocates Section */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 p-5 flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-extrabold mb-5">
            Social Media Advocates
          </h2>
          <p>
            Social media is a powerful tool in disaster management. HopeThreads
            provides social media advocates to spread awareness and reach out to
            more people during disasters. Join us in spreading hope and
            awareness through social media!
          </p>
          <Link to="/get-involved">
            <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400 transition-transform transform hover:scale-105 ">
              Join Now
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={img4}
            alt="Social Media Advocacy"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Programs;
