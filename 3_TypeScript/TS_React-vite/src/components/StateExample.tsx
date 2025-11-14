import { useState } from "react";

export const StateExample = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState(""); // inferred as string

  return (
    <div>
      <h3>useState Example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <input 
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>You typed: {text}</p>
    </div>
  );
};
