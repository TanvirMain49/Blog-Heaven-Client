import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Recommended = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_CALL}all-blogsRecommended?category=Travel`
    );
    setBlogs(data);
    return blogs;
  };
  console.log(blogs);
  return (
    <div className="my-16">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold text-gray-800">Trending Posts</h2>
        <p className="text-gray-600 italic mt-2">
          Discover what’s popular and making waves in the blogging world right
          now. Stay ahead with our top picks!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 w-10/12 mx-auto">
        {blogs.map((blog) => (
          <Card key={blog._id} blog={blog}></Card>
        ))}
      </div>
      <div className=" flex justify-center mt-8 items-center">
        <Link
          to="/allBlogs"
          className="btn flex items-center gap-2 text-lg"
        >
          See All <FaArrowAltCircleRight></FaArrowAltCircleRight>
        </Link>
      </div>
    </div>
  );
};

export default Recommended;
