import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, onSelect }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
