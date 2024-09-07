import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Impact = ({ impact }) => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/metrics`
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

    fetchMetrics();
  }, []);

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
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-blue-600">{metric.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {metric.label}
                </h4>
                <p className="text-md text-gray-600">
                  {metric.value} / {metric.max}+
                </p>
              </div>
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
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/get-involved">
          <button className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Get Involved
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Impact;
