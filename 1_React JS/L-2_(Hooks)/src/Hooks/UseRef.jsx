import { useRef } from "react";

export default function UseRefHook() {

    const inputRef = useRef(null)
    console.log(inputRef);

    function handlebtn() {
        inputRef.current.focus()
    }


  return (
    <>
      <div>
        <hr/>
        <h3>Use Ref Hook</h3>
        <p>when you click on the btn it Focus on the Input</p>
        <input ref={inputRef} type="text" placeholder="Enter your name"/>
        <button onClick={handlebtn}>Submit</button>
      </div>
    </>
  );
}
