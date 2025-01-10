import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import CommentSection from "../Component/CommentSection";
import { FaCommentDots } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


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
      <div className="md:w-8/12 w-11/12 mx-auto bg-white border border-gray-200 rounded-lg shadow md:p-6 p-3">
        <div className="flex justify-between items-center md:gap-2 gap-5">
          <div className="flex items-center gap-2">
            <img
              src={blog.userPhoto}
              alt=""
              className="rounded-full md:w-20 md:h-20 w-14 h-14 border-2 border-blue-500 p-1"
            />
            <div>
              <h1 className="md:text-xl text-lg text-blue-600 font-bold">
                {blog.userName}
              </h1>
              <p className="text-sm mr-6 md:mr-0 text-gray-600">
                {blog.userEmail}
              </p>
            </div>
          </div>
          {blog.userEmail === user?.email && (
            <div className="flex items-center md:ml-0 ml-9">
              <Link to={`/update-Blogs/${blog._id}`} className="btn">
                <MdEdit className="md:text-2xl" />
              </Link>
            </div>
          )}
        </div>
        <h2 className="md:text-3xl text-xl font-bold text-gray-900 mb-4">{blog.title}</h2>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="my-4">
          <h5 className="md:text-2xl text-lg font-bold">Description: </h5>
          <p className="py-2 md:text-base text-sm">{blog.longDescription}</p>
        </div>
        <form onSubmit={handleComment} className="flex items-center gap-2">
          <img
            src={user?.photoURL}
            alt=""
            className="md:w-16 md:h-16 w-12 h-12 rounded-full border-2 p-1"
          />
          <textarea
            type="text"
            className="border-2 text-left md:pl-4 pl-3 md:pt-3 md:placeholder:pt-0 placeholder:pt-3 w-full md:rounded-2xl rounded-lg"
            placeholder="Add a comment"
            name="commentBox"
          />
          <input
            type="submit"
            value="Comment"
            className="btn bg-blue-500 text-white"
          />
        </form>
        <div className="my-8 space-y-4">
          <div class="mb-4 flex items-center gap-2">
            <FaCommentDots />
            <h2 class="md:text-lg text-base font-bold flex items-center">
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
