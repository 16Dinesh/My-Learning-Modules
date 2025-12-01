import React from "react";

const PostItem = ({ post, onSelect }) => {
  return (
    <li
      style={{
        border: "1px solid #ccc",
        marginBottom: "0.5rem",
        padding: "0.5rem",
        cursor: "pointer",
      }}
      onClick={() => onSelect(post)}
    >
      <strong>{post.title}</strong>
      <p style={{ margin: 0 }}>{post.body.slice(0, 80)}…</p>
    </li>
  );
};

export default PostItem;
