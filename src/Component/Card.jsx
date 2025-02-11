import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegComment } from "react-icons/fa";
import { axiosInstance } from "../hook/AxiosSecure";

const Card = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const [wish, setWish] = useState([]);
  const [comments, setComments] = useState([]);
  const {
    _id,
    title,
    imageUrl,
    longDescription,
    userName,
    userPhoto,
    category,
  } = blog || {};

  const wishList = {
    blog_id: _id,
    title,
    imageUrl,
    userEmail: user?.email,
    userPhoto: user?.photoURL,
    authorName: userName,
  };
  const handleWishList = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_CALL}wishList`, wishList);
      Swal.fire({
        title: "WishList added successfully",
        icon: "success",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
        },
        buttonsStyling: false,
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

  // wish List
  useEffect(() => {
    fetchWishList();
  }, [wish]);

  const fetchWishList = async () => {
    try {
      const { data } = await axiosInstance.get(`wishList-loved/${_id}`);
      setWish(data);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Could not fetch wishlist data",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchAllComments();
  }, []);

  const fetchAllComments = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_CALL}blog-Comment/${blog._id}`
    );
    setComments(data);
  };

  return (
    <div className="max-w-sm md:hover:border-blue-400 md:shadow-none md:border-t-0 border-t-1 border shadow-lg hover:border-b-4 rounded-lg shadow-b-lg hover:shadow-xl hover:shadow-blue-200 transition-transform duration-300 transform hover:-translate-y-2 flex flex-col dark:text-white dark:border-black hover:dark:shadow-none">
      <div className="flex items-center gap-2 mb-3 ml-3 mt-3">
        <img src={userPhoto} alt="" className="w-10 h-10 rounded-full" />
        <div className="mb-3">
          <h1 className="text-base font-semibold">{userName}</h1>
          <p className="text-xs">{category}</p>
        </div>
      </div>
      <div>
        <a href="#">
          <img
            className=" h-52 w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </a>
        <div className="p-5 text-black flex-grow">
          <Link to="/blogDetails">
            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white">{title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-100">
            {longDescription?.substring(0, 80)}
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
      <div className="mt-auto pb-5 flex flex-col">
        <div className="flex items-center pl-3 pb-4">
          {wish.length > 0 && (
            <>
              {wish.map((item, index) => (
                <div key={index} className="flex items-center">
                  <img
                    src={item.userPhoto}
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                </div>
              ))}
              <p className="text-sm ml-1 font-semibold">liked your blog</p>
            </>
          )}
        </div>
        <div className="flex items-center">
          <button
            data-tip="Like"
            onClick={handleWishList}
            className="tooltip inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center"
          >
            <CiHeart className="text-3xl font-bold" />
          </button>
          <Link
            to={`/all-blogs/${_id}`}
            data-tip="Comment"
            className="relative tooltip inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center"
          >
            {comments.length > 0 && (
              <p className="bg-blue-500 text-white absolute px-2 bottom-5 left-7 rounded-full">
                {comments.length}
              </p>
            )}
            <FaRegComment className="text-2xl" />
          </Link>

          <Link
            data-tip="Details"
            to={`/all-blogs/${_id}`}
            className="tooltip inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center"
          >
            <TbListDetails className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* Button at the bottom */
}
// <div className="mt-auto p-5 flex flex-col gap-2">
//   <Link
//     to={`/all-blogs/${_id}`}
//     className="inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//   >
//     <TbListDetails className="text-xl" />
//     Details
//   </Link>
//   <button
//     onClick={handleWishList}
//     className="inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//   >
//     <CiHeart className="text-xl" />
//     Wish List
//   </button>
// </div>
