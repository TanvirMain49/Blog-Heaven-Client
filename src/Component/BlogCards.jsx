import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_CALL}all-blogs`);
    setBlogs(data);
  };
  return (
    <div>
      <div className="w-10/12 mx-auto mt-20 grid grid-cols-3 gap-4">
      {
          blogs.map(blog=><Card key={blog._id} blog={blog}></Card>)
        }
      </div>
    </div>
  );
};

export default BlogCards;
