import { useDispatch } from "react-redux";
import {
  handleDecBtn,
  handleIncBtn,
  resetCount,
} from "../store/slice/CounterSlice";

export default function CounterBtn() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(handleIncBtn())}>+</button>
      <button onClick={() => dispatch(handleDecBtn())}>-</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
}
