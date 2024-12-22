import React from "react";

const BlogSlide = ({ imageSrc, title, description }) => {
  return (
    <div>
      <div className="text-center absolute top-[0%] left-[45%] poppins-font">
        <h1>
          <span className="text-2xl">Grand</span> <br />
          <span className="text-8xl font-semibold">Blog</span>
        </h1>
      </div>
      <div className="mt-24">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="py-10 space-y-4">
        <h1 className="text-center text-5xl font-bold">{title}</h1>
        <p className="text-xl text-center px-60">{description}</p>
      </div>
    </div>
  );
};

export default BlogSlide;
