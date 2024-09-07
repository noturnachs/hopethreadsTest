import { FaCalendarAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Fevent = () => {
  // State to hold events data
  const [events, setEvents] = useState([]);

  // Fetch events from the server on component mount
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/events`) // Use the environment variable
      .then((response) => {
        setEvents(response.data); // Set events data
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []); // Empty dependency array means this will only run once when the component mounts

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-extrabold mb-5 text-black">Future Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-red-500 mr-2" />
                <span className="font-bold text-gray-800">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))
        ) : (
          <p>No events available at the moment.</p>
        )}
      </div>
    </div>
  );
};
export default Fevent;
