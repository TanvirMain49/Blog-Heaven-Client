import React from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleContactUs = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank you for Contacting Us",
      icon: "success",
      confirmButtonText: "Okay",
      customClass: {
        confirmButton:
          "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
      },
      buttonsStyling: false,
    });
    e.target.reset();
  };
  return (
    <div
      className="text-white px-4 mt-20 bg-fixed"
      id="contact"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: "center",
      }}
    >
      <div className="md:w-7/12 mx-auto pb-24 pt-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-blue-500 mb-8">
          Contact Us
        </h2>

        {/* Form with Glassy Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-500"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="col-span-1 md:col-span-2 p-3 rounded-lg bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:blue-red-600 border border-gray-500"
          />
          {/* Textarea */}
          <textarea
            placeholder="Your Message"
            className="col-span-1 md:col-span-2 h-32 p-3 rounded-lg bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500"
          ></textarea>

          {/* Button */}
          <button
            onClick={handleContactUs}
            type="submit"
            className="col-span-1 md:col-span-2 flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
