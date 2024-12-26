import React from "react";
import * as motion from "motion/react-client";

const BlogSlide = ({ imageSrc, title, description }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1,}}
    transition={{ ease: "easeOut", duration: 0.8 }} className="bg-gray-50">
      <motion.div 
       className="text-center absolute top-[0%] left-[40%]">
        <h1>
          <span
           
            className="text-2xl"
          >
            Blog
          </span>{" "}
          <br />
          <span className="text-8xl font-bold playfair-font">Heaven</span>
        </h1>
      </motion.div>
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
    </motion.div>
  );
};

export default BlogSlide;
