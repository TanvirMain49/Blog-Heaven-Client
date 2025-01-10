import React from "react";
import Swal from "sweetalert2";

const AboutUs = () => {
   const handleClick = ()=>{
    Swal.fire({
        title: "We send you a mail",
        icon: "success",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
        },
        buttonsStyling: false,
      })
   }
  return (
    <section class="about-us bg-gray-100 py-10">
      <div class="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        <div class="text-section md:w-1/2">
          <h2 class="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
          <p class="text-lg text-gray-700 mb-4">
            Welcome to <strong>Blog Heaven</strong>, your go-to platform for
            insightful and engaging content on Blogs. We aim to empower readers
            with up-to-date knowledge and inspire meaningful conversations.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Founded in 2024, <strong>Blog Heaven</strong> started as a passion
            project to connect like-minded individuals through storytelling and
            knowledge sharing.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Join us as we explore topics that matter to you. Together, let's
            learn, grow, and inspire!
          </p>
          <button
            onClick={handleClick}
            class="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
        <div class="image-section md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            class="rounded-lg shadow-lg w-full h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
