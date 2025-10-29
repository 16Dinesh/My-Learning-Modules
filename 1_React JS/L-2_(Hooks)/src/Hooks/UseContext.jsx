import { useContext } from "react";
import MyContext from "../context";
import { useState } from "react";

export default function UseContextHook() {
  const context = useContext(MyContext);
  const [state, setState] = useState(context);

//   console.log(context);
//   console.log(state);

  function toggleTheme() {
     setState((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <div>
        <hr />
        <h3>Use Context Hook</h3>
        <p>The current theme is: {state}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}
