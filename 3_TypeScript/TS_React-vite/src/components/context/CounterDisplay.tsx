import { useCounter } from "./CounterContext";

export const CounterDisplay = () => {
  const { count, increment } = useCounter();
  return (
    <div className="counter-box">
      <h3>Context Example</h3>
      <p>Count from context: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
