import React from "react";

const BlogSlide = ({ imageSrc, title, description }) => {
  return (
    <div>
      <div className="text-center absolute top-[0%] left-[45%] poppins-font">
        <h1>
          <span className="text-2xl">Grand</span> <br />
          <span className="text-8xl font-bold playfair-font">Blog</span>
        </h1>
      </div>
      <div className="mt-20">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[580px] object-cover"
        />
      </div>
      <div className="py-10 space-y-4">
        <p className="text-xl text-blue-500 text-center">Art / LifeStyle</p>
        <h1 className="text-center text-5xl font-bold pb-4">{title}</h1>
        <div className="border border-gray-400 mx-[47%]"></div>
        <p className="text-xl text-center px-60 pt-4">{description}</p>
      </div>
    </div>
  );
};

export default BlogSlide;
