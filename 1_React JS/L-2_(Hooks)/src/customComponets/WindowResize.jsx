import React from 'react';
import useWindowResize from './../customHooks/UseWindowResize';

function ResponsiveComponent() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      {width < 768 ? (
        <p>📱 You're on a small screen (mobile)</p>
      ) : (
        <p>💻 You're on a large screen (desktop)</p>
      )}
    </div>
  );
}

export default ResponsiveComponent;
