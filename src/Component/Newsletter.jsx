import React from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  return (
    <div className="hero bg-base-200 mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZyUyMHF1YXRlfGVufDB8fDB8fHww"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-10/12 mx-auto mt-20 py-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Stay Updated with Our Latest News!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Join our newsletter to receive the latest updates, exclusive offers,
            and insightful content directly to your inbox. Stay in the loop!
          </p>

          <form
            onSubmit={(e) => {
                e.preventDefault()
              Swal.fire({
                title: "Thank you for subscribing to our newsletter",
                icon: "success",
                confirmButtonText: "Okay",
                customClass: {
                  confirmButton:
                    "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
                },
                buttonsStyling: false, // Disable default SweetAlert2 button styles
              });
              e.target.reset();
            }}
            className="mt-6 flex justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-64 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
