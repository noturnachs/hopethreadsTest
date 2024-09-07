import React, { useState } from "react";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    involvement: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the message to send with Markdown formatting
    const message = `
*New Form Submission:*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Involvement:* ${formData.involvement}
*Message:* ${formData.message}
    `;

    // Send the message to the Telegram chat
    const botId = process.env.REACT_BOT_FORMTOKEN;
    const chatIds = ["6459500077", "5352462717"]; // Array of chat IDs
    const url = `https://api.telegram.org/bot${botId}/sendMessage`;

    try {
      // Send message to each chat ID
      await Promise.all(
        chatIds.map((chatId) =>
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "Markdown", // Enable Markdown parsing
            }),
          })
        )
      );

      console.log("Messages sent successfully");
      setSuccessMessage("Your submission has been sent successfully!"); // Set success message
      // Clear the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        involvement: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending messages:", error);
      setSuccessMessage(
        "There was an error sending your submission. Please try again."
      ); // Set error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-4">
      <h2 className="text-4xl font-bold text-blue-600">Get Involved</h2>

      {/* Volunteer Now Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf38YS_2xe8NMysAQVK5wWjRL_-f-TfpDz3d7yPId6jONx0Ew/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      >
        Volunteer Now
      </a>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">
          {successMessage}
        </div>
      )}

      {/* Form Section */}
      <form className="w-full max-w-lg mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="involvement"
          >
            How Would You Like to Get Involved?
          </label>
          <select
            id="involvement"
            name="involvement"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.involvement}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="volunteer">Volunteer</option>
            <option value="donate">Donate</option>
            <option value="sponsor">Sponsor an Event</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInvolved;
