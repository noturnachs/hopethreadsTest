import React, { useEffect, useState } from "react";
import { ring2 } from "ldrs";

ring2.register();

const Donate = () => {
  const [loading, setLoading] = useState(true);

  // Hide loading animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleZeffyClick = () => {
    window.open(
      "https://www.zeffy.com/en-US/fundraising/da758469-dc65-47a0-b056-a6935aa60a2e",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-4">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Support Us</h2>

      {/* Donation Options */}
      <div className="w-full max-w-md">
        <h3 className="text-md font-semibold text-gray-800 mb-4 text-center">
          Your generous donations help us make a difference in the lives of
          those in need.
        </h3>

        {/* Loading Animation or GoFundMe */}
        <div className="bg-white rounded-lg shadow p-4 mb-4 relative">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <l-ring-2
                size="40"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8"
                color="black"
              ></l-ring-2>
              <p className="mt-2 text-gray-700 font-bold">
                Donate via GoFundMe
              </p>
            </div>
          ) : (
            <iframe
              src="https://www.gofundme.com/f/join-hopethreads-in-helping-gazas-children/widget/large"
              width="100%"
              height="450" // Default height for mobile
              className="rounded-lg md:h-[485px] " // Set height to 500px for medium screens and above
              title="GoFundMe Donation"
            ></iframe>
          )}
        </div>

        {/* Zeffy Button */}
        <div className="bg-white rounded-lg shadow p-4">
          <button
            onClick={handleZeffyClick}
            className="w-full bg-blue-500 text-white hover:bg-blue-600 rounded-lg py-2 font-semibold"
          >
            Donate via Zeffy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
