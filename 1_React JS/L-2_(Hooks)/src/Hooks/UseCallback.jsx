import { useState } from "react";
import React, { useCallback } from "react";

export default function UseCallbackHook() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>
        <hr />
        <h3>Use CallBack Hook</h3>
        <h2>Count: {count}</h2>
        <Button onClick={increment} />
      </div>
    </>
  );
}

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Increment</button>;
});
