import { useState } from "react";
import { useEffect } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  // useEffect runs on every render with out dependency
  //   useEffect(() => {
  //     console.log("UseEffect Hook Called");
  //   });

  // Renders only one time
  // useEffect(() => {
  //     console.log("UseEffect Hook Called")
  // },[])

  // This effect runs only when `count` changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

//   useEffect(() => {
//   // Setting up a timer
//   const timer = setTimeout(() => {
//     console.log('Timer finished');
//   }, 1000);

//   // Cleanup the timer when the component unmounts or before the effect runs again
//   return () => {
//     clearTimeout(timer);
//     console.log('Timer cleared');
//   };
// }, []);  

  return (
    <>
      <div>
        <hr />
        <h3>UseEffect hook</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
