import React from "react";

export default function ContactForm() {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto bg-white rounded-2xl shadow-lg mt-20 mb-10 p-6 sm:p-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
        Send Us a Message
      </h2>

      <form className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Send Message 📩
          </button>
        </div>
      </form>
    </div>
  );
}
