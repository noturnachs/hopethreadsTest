import React from "react";
import bgtop from "../images/bg-pr.png";

function Programs() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Background Image Section */}
      <div
        className="relative h-64 bg-cover bg-center mb-4 rounded"
        style={{
          backgroundImage: `url("${bgtop}")`,
        }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-50 rounded">
          Our Programs
        </h1>
      </div>

      {/* Clothing Donation Boxes Section */}
      <div className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50">
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
          <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400">
            Donate your Clothes now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/490x600/png"
            alt="Clothing Donation"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Clothing Sorting Section */}
      <div className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50">
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
          <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400">
            Help Sort Clothes
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/490x600/png"
            alt="Clothing Sorting"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Community Engagement Sessions Section */}
      <div className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50">
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
          <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400">
            Join a Session
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/490x600/png"
            alt="Community Engagement"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Social Media Advocates Section */}
      <div className="flex flex-col md:flex-row mt-8 bg-[#8bd3f9] bg-opacity-50">
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
          <button className="rounded-full p-2 border-green-500 border-2 hover:bg-green-400">
            Become an Advocate
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/490x600/png"
            alt="Social Media Advocacy"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Programs;
