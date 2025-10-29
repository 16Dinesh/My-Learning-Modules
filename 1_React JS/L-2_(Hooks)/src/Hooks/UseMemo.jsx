import { useState } from "react";
import { useMemo } from "react";

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Simulate expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return total;
  }, [count]); // Only re-run if `count` changes

  return (
    <>
      <div>
        <hr />
        <h3>UseMemo Hook</h3>
        <h5>Expensive Value: {expensiveValue}</h5>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something"
        />
      </div>
    </>
  );
}
