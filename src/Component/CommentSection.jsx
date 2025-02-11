import React from "react";

const CommentSection = ({ comment }) => {
  return (
    <div className="chat chat-start ">
      <div className="chat-image avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={comment.commentUserPhoto}
          />
        </div>
      </div>
      <div className="chat-header text-black dark:text-white">
        {comment.commentUser}
      </div>
      <div className="chat-bubble bg-gray-100 text-black dark:bg-black dark:text-white">{comment.comment}</div>
    </div>
  );
};

export default CommentSection;
