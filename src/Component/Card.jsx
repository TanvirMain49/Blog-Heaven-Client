import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

const Card = ({ blog }) => {
  console.log(blog);
  const { title, imageUrl, longDescription } = blog || {};

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
            {longDescription?.substring(0, 180)}...see more
          </p>
        </div>
      </div>

      {/* Button at the bottom */}
      <div className="mt-auto p-5 flex flex-col gap-2">
        <Link
          className="inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <TbListDetails className="text-xl" />
          Details
        </Link>
        <Link
          className="inline-flex justify-center items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <CiHeart className="text-xl" />
          Wish List
        </Link>
      </div>
    </div>
  );
};

export default Card;
