import useCounterStore from "../store/counter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
        <h2>Counter App</h2>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ margin: "0.8em" }}>
        +
      </button>
      <button onClick={decrement} style={{ margin: "0.8em" }}>
        {" "}
        -
      </button>
      <button onClick={reset} style={{ margin: "0.8em" }}>
        {" "}
        reset
      </button>
    </div>
  );
}
