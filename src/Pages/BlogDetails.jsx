import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import CommentSection from "../Component/CommentSection";
import { FaCommentDots } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoHeartCircleSharp } from "react-icons/io5";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const blog = useLoaderData();
  // console.log(blog);

  const handleComment = async (e) => {
    e.preventDefault();
    const from = e.target;
    const comment = from.commentBox.value;
    const commentId = blog._id;
    const commentUser = user?.displayName;
    const commentUserPhoto = user?.photoURL;

    // cheek if user if the owner of the blog
    if (blog.userEmail === user?.email) {
      Swal.fire({
        title: "Can not comment on own blog",
        icon: "error",
      });
      return;
    }

    const blogCommentDetails = {
      commentId,
      commentUser,
      commentUserPhoto,
      comment,
    };
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_CALL}blog-Comment`,
      blogCommentDetails
    );
    console.log(data);
    if (data.acknowledged) {
      const newComment = {
        _id: data.insertedId,
        commentId,
        commentUser,
        commentUserPhoto,
        comment,
      };
      setComments((prevComments) => [...prevComments, newComment]);
      Swal.fire({
        title: "Comment added",
        icon: "success",
      });
      from.reset();
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
    <div>
      <div className="w-8/12 mx-auto bg-white border border-gray-200 rounded-lg shadow p-6">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src={blog.userPhoto}
              alt=""
              className="rounded-full w-20 h-20 border-2 border-blue-500 p-1"
            />
            <div>
              <h1 className="text-xl text-blue-600 font-bold">
                {blog.userName}
              </h1>
              <p className="text-sm text-gray-600">
                {blog.userEmail}
              </p>
            </div>
          </div>
          {blog.userEmail === user?.email && (
            <div className="flex gap-3 items-center">
              <Link to={`/update-Blogs/${blog._id}`} className="btn">
                <MdEdit className="text-2xl" />
              </Link>
            </div>
          )}
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
        <form onSubmit={handleComment} className="flex items-center gap-2">
          <img
            src={user?.photoURL}
            alt=""
            className="w-16 h-16 rounded-full border-2 p-1"
          />
          <textarea
            type="text"
            className="border-2 text-left pl-4 pt-3 w-full rounded-2xl"
            placeholder="Add a comment"
            name="commentBox"
          />
          <input
            type="submit"
            value="Comment"
            className="btn bg-blue-500 text-white"
          />
        </form>
        <div className="my-8 space-y-9">
          <div class="mb-4 flex items-center gap-2">
            <FaCommentDots />
            <h2 class="text-lg font-bold flex items-center">
              Comments ({comments.length})
            </h2>
          </div>
          {comments.map((comment) => (
            <CommentSection
              key={comment._id}
              comment={comment}
            ></CommentSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
