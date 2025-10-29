import React, { useEffect, useState } from "react";

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const urls = Array.from({ length: 30 }).map((_, idx) =>
      `https://dummyjson.com/image/150?text=Image+${idx + 1}`
    );
    setImages(urls);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Blog Image Gallery</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {images.map((url, i) => (
          <div key={i} className="overflow-hidden bg-gray-100 dark:bg-gray-800 rounded">
            <img
              src={url}
              alt={`Dummy ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
