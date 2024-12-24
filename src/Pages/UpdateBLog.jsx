import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBLog = () => {
  const { user } = useContext(AuthContext);
  const Blog = useLoaderData();
  const navigation = useNavigate();

  const handleUpdate = async (e) => {
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
    const updatedBlog = {
      userName,
      userEmail,
      title,
      imageUrl,
      userPhoto,
      category,
      longDescription,
    };

    try {
      const { data } = await axios.put(`${import.meta.env.VITE_API_CALL}update-blogs/${Blog._id}`, updatedBlog);
      console.log("Blog updated successfully:", data);

      // Show success alert
      Swal.fire({
        title: "Blog updated successfully",
        icon: "success",
      });

      // Navigate to the updated blog page
      navigation(`/all-blogs/${Blog._id}`);
    } catch (error) {
      console.error("Error updating blog:", error);
      Swal.fire({
        title: "Error updating blog",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Section Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Update Blog</h1>
        <p className="text-gray-600">
          Fill in the details below to create a new blog post. Make sure to
          provide accurate and descriptive information.
        </p>
      </div>

      {/* Form Container */}
      <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-6">
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
              defaultValue={Blog.title}
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
              defaultValue={Blog.imageUrl}
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
              defaultValue={Blog.category}
              required
            >
              <option disabled>Select a category</option>
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
              defaultValue={Blog.longDescription}
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
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBLog;
