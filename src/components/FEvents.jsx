import { FaCalendarAlt } from "react-icons/fa";
import React from "react";

const Fevent = () => {
  // Sample events data
  const events = [
    {
      date: "2024-09-10",
      title: "Pickleball Tournament",
      description:
        "At Hal & Berni Pickleball Courts with entry fee to raise money.",
    },
    {
      date: "2024-09-15",
      title: "Board Game Nights",
      description: "At local boba shop, Kung Fu Tea.",
    },
    {
      date: "2024-09-20",
      title: "Global Crises Information Sessions",
      description: "At local libraries.",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-extrabold mb-5 text-black">Future Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Fevent;
