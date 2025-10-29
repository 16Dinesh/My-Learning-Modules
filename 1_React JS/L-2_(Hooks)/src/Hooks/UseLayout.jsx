import { useLayoutEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function UseLayoutHook() {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useLayoutEffect(() => {
    // Measure the width before the browser paints
    const width = boxRef.current.getBoundingClientRect().width;
    setBoxWidth(width);
  }, []);

  return (
    <>
      <div>
        <hr />
        <h3>Use Layout Hook</h3>
        <div ref={boxRef} >
          Resize the window
        <p>Box width: {boxWidth}px</p>
        </div>
      </div>
    </>
  );
}
