import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch({ type: "INC" })}> Arttır (+)</button>
      <button onClick={() => dispatch({ type: "RES" })}> Sıfırla (0)</button>
      <button onClick={() => dispatch({ type: "DEC" })}> Azalt (-)</button>
    </div>
  );
};

export default Counter;
