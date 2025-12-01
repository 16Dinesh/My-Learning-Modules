import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  // Load posts initially
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.posts);
        setPosts(data?.posts.slice(0, 4)); 
      })
      .catch((err) => console.error("Failed to fetch posts", err));
  }, []);

  const handleSelect = (post) => {
    setSelectedPost(post);
    setEditingPost(null);
  };

  const handleNew = () => {
    setEditingPost({ title: "", body: "" });
    setSelectedPost(null);
  };

  const handleSave = async (post) => {
    if (post.id) {
      // Update existing
      try {
        const res = await fetch(
          `https://dummyjson.com/posts/${post.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
          }
        );
        const updated = await res.json();
        setPosts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
        setSelectedPost(updated);
        setEditingPost(null);
      } catch (err) {
        console.error("Error updating post", err);
      }
    } else {
      // Create new
      try {
        const res = await fetch(
          "https://dummyjson.com/posts/add",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
          }
        );
        const created = await res.json();
        // JSONPlaceholder returns id = 101+, but fine for demo
        setPosts((prev) => [created, ...prev]);
        setSelectedPost(created);
        setEditingPost(null);
      } catch (err) {
        console.error("Error creating post", err);
      }
    }
  };

  const handleDelete = async (post) => {
    if (!post.id) return;
    try {
      await fetch(`https://dummyjson.com/posts/${post.id}`, {
        method: "DELETE",
      });
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      setSelectedPost(null);
    } catch (err) {
      console.error("Error deleting post", err);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "1rem" }}>
      <h1>Blog App</h1>
      <button onClick={handleNew}>New Post</button>
      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <div style={{ flex: 1 }}>
          <PostList posts={posts} onSelect={handleSelect} />
        </div>
        <div style={{ flex: 2 }}>
          {editingPost ? (
            <PostForm post={editingPost} onSave={handleSave} onCancel={() => setEditingPost(null)} />
          ) : selectedPost ? (
            <PostDetail
              post={selectedPost}
              onEdit={() => setEditingPost(selectedPost)}
              onDelete={() => handleDelete(selectedPost)}
            />
          ) : (
            <p>Select a post or create a new one.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
