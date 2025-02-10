import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import * as motion from "motion/react-client";


const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_CALL}all-blogs-home`);
    setBlogs(data);
  };
  return (
    <motion.div >
      <div className="space-y-3">
        <div className="border border-gray-400 md:mx-52 mx-16 md:mt-6"></div>
        <h1 className="text-center lg:text-4xl md:text-3xl text-xl font-bold pt-8">Discover Inspiring Stories and Insights</h1>
        <p className="md:text-base text-sm italic text-center lg:px-0 md:px-12 px-8">Dive into a curated collection of engaging blogs, covering diverse topics to spark your interest and fuel your knowledge.</p>
      </div>
      <div  className="w-11/12 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
          blogs.map(blog=><Card key={blog._id} blog={blog}></Card>)
        }
      </div>
    </motion.div>
  );
};

export default BlogCards;
