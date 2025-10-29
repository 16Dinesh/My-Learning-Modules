import { useSelector } from "react-redux";


export default function CounterValue() {
  const state = useSelector((state) => state.count);
  console.log(state);
  const { value } = state;
  return (
    <div>
       <h1>Count: {value}</h1>
    </div>
  );
}
