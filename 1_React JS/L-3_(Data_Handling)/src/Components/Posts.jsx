import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/posts');
        const response = await res.json();
        console.log(response.posts);
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        setData(response?.posts.slice(0, 2));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {data && data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
