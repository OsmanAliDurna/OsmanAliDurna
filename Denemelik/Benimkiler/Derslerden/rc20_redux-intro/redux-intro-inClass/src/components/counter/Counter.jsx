import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, clear } from "../../store/counterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter: {count}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="counter-button positive"
        >
          increase
        </button>
        <button
          onClick={() => dispatch(clear())}
          className="counter-button zero"
        >
          reset
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="counter-button negative"
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
