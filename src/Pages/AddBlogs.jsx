import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const AddBlogs = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract values into variables
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const title = e.target.title.value;
    const imageUrl = e.target.imageUrl.value;
    const userPhoto = e.target.userPhoto.value;
    const category = e.target.category.value;
    const longDescription = e.target.longDescription.value;

    // Create a blogPost object
    const blogPost = {
      userName,
      userEmail,
      title,
      imageUrl,
      userPhoto,
      category,
      longDescription,
    };

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_CALL}blogs`,
      blogPost
    );
    Swal.fire({
      title: "Blog added successfully",
      icon: "success",
      confirmButtonText: "Ok",
      customClass: {
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
      },
      buttonsStyling: false,
    });
    navigation("/allBlogs");
  };



  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Section Title and Description */}
      <div className="text-center mb-8">
        <h1 className="md:text-4xl text-3xl font-bold mb-2">Add a New Blog</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Fill in the details below to create a new blog post. Make sure to
          provide accurate and descriptive information.
        </p>
      </div>

      {/* Form Container */}
      <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-3">
          {/* User Name */}
          <div>
            <label className="block text-sm font-medium mb-2">User Name</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              defaultValue={user?.displayName}
              readOnly
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block text-sm font-medium mb-2">User Email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              defaultValue={user?.email}
              readOnly
              className="w-full p-2 border rounded"
              required
            />
          </div>
          {/* User Photo */}
          <div>
            <label className="block text-sm font-medium mb-2">User Photo</label>
            <input
              type="text"
              name="userPhoto"
              placeholder="Enter photo URL"
              defaultValue={user?.photoURL}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Blog Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Blog Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter image URL"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
            </select>
          </div>

          {/* Long Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              Long Description
            </label>
            <textarea
              name="longDescription"
              placeholder="Enter detailed blog description"
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center my-8">
        <Link to="/" className="btn bg-blue-500 text-white mb-4">
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AddBlogs;
