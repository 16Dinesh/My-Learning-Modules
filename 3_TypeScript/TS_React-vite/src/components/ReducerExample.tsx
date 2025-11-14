import { useReducer } from "react";

type State = { count: number };
type Action = { type: "inc" } | { type: "dec" } | { type: "reset" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    case "reset": return { count: 0 };
    default: return state;
  }
};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>useReducer Example</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
