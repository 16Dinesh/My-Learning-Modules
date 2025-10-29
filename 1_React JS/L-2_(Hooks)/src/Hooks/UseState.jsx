import { useState } from "react";

export default function UseStateHook() {
  const initialState = 0;

  const [state, setState] = useState(initialState);

  function handleClick() {
    setState(state + 1);
  }

  return (
    <>
      <h3>UseState</h3>
      <p>{state}</p>
      <button onClick={handleClick}>Click to Inc</button>
    </>
  );
}
