import React from "react";
import * as motion from "motion/react-client";

const BlogSlide = ({ imageSrc, title, description }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1,}}
    transition={{ ease: "easeOut", duration: 0.8 }} >
      <motion.div 
       className="text-center absolute md:top-[0%] top-[0%] lg:left-[40%] md:left-[30%] left-[35%]">
        <h1>
          <span
           
            className="md:text-2xl text-base"
          >
            Blog
          </span>{" "}
          <br />
          <span className="md:text-8xl text-4xl font-bold playfair-font">Heaven</span>
        </h1>
      </motion.div>
      <div className="md:mt-20 mt-12">
        <img
          src={imageSrc}
          alt={title}
          className="w-full md:h-[580px] h-[380px] object-cover"
        />
      </div>
      <div className="py-10 space-y-4">
        <p className="md:text-xl text-base text-blue-500 text-center">Art / LifeStyle</p>
        <h1 className="text-center md:text-5xl text-3xl font-bold pb-4">{title}</h1>
        <div className="border border-gray-400 md:mx-[47%] mx-[20%]"></div>
        <p className="lg:text-xl text-base italic text-center lg:px-60 md:px-32 px-3 pt-4">{description}</p>
      </div>
    </motion.div>
  );
};

export default BlogSlide;
