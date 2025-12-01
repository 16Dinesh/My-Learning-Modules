import React, { useState, useEffect } from "react";

const PostForm = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setBody(post.body || "");
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onSave({ ...post, title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <label>Body</label>
        <br />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: "100%", height: "150px" }}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: "0.5rem" }}>
        Cancel
      </button>
    </form>
  );
};

export default PostForm;
