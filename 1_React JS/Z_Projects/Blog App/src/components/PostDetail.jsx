import React from "react";

const PostDetail = ({ post, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete} style={{ marginLeft: "0.5rem" }}>
        Delete
      </button>
    </div>
  );
};

export default PostDetail;
