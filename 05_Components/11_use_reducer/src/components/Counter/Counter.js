import React from "react";

export default function Counter({ count, dispatch }) {
  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
