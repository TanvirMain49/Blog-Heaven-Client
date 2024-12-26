import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const TrendingCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, imageUrl, userName } = blog || {};
  const wishList = {
    blog_id: _id,
    title,
    imageUrl,
    userEmail: user?.email,
    authorName: userName,
  };

  return (
    <Link to={`all-blogs/${_id}`} className="max-w-sm hover:border-blue-400 hover:border-b-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-200 transition-transform duration-300 transform hover:-translate-y-2 flex flex-col">
      <div>
        <a href="#">
          <img
            className="rounded-t-lg h-72 w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </a>
        <div className="p-5 text-black flex-grow">
          <div >
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          </div>
        </div>
      </div>

    </Link>
  );
};

export default TrendingCard;
;