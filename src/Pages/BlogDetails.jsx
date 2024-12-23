import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const BlogDetails = () => {
    const{user} = useContext(AuthContext);
    const blog = useLoaderData();
    console.log(blog);
  return (
    <div>
      <div className="w-8/12 mx-auto bg-white border border-gray-200 rounded-lg shadow p-6">
        <div className="flex items-center gap-2">
            <img src={blog.userPhoto} alt="" className="rounded-full w-20 h-20 border-2 p-2" />
            <h1 className="text-xl font-bold">{blog.userName}</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h2>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="my-4">
            <h5 className="text-2xl font-bold">Description: </h5>
            <p className="py-2">{blog.longDescription}</p>
        </div>
        <div className="flex items-center gap-2">
            <img src={user?.photoURL} alt="" className="w-16 h-16 rounded-full border-2 p-1"/>
            <textarea type="text" className="border-2 text-left pl-4 pt-3 w-full mt-5 rounded-r-xl" placeholder="Add a comment" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
