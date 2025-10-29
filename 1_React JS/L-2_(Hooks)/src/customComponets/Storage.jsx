import React from 'react';
import useLocalStorage from './../customHooks/UseStorage';

function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;