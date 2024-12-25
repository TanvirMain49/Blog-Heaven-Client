import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Card = ({ blog }) => {
  const {user} = useContext(AuthContext);
  const { _id, title, imageUrl, longDescription, userName } = blog || {};
  const wishList = {blog_id: _id, title, imageUrl, userEmail: user?.email, authorName: userName};
  console.log(wishList);
  const handleWishList = async () => {
    try {
      console.log(wishList);
      await axios.post(`${import.meta.env.VITE_API_CALL}wishList`, wishList);
        Swal.fire({
          title: "WishList added successfully",
          icon: "success",
        });
      
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      Swal.fire({
        title: "Error",
        text: error?.response?.data,
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow grow flex flex-col">
      <div>
        <a href="#">
          <img
            className="rounded-t-lg h-72 w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </a>
        <div className="p-5 text-black flex-grow">
          <Link to="/blogDetails">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700">
            {longDescription?.substring(0, 180)}
            <Link
              to={`/all-blogs/${_id}`}
              className="text-blue-500 font-semibold"
            >
              ...see more
            </Link>
          </p>
        </div>
      </div>

      {/* Button at the bottom */}
      <div className="mt-auto p-5 flex flex-col gap-2">
        <Link
          to={`/all-blogs/${_id}`}
          className="inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <TbListDetails className="text-xl" />
          Details
        </Link>
        <button
          onClick={handleWishList}
          className="inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <CiHeart className="text-xl" />
          Wish List
        </button>
      </div>
    </div>
  );
};

export default Card;
