import React, { useReducer } from "react";
import "./App.css";

function App() {
  function countReducer(state, action) {
    switch (action.type) {
      case "decrease":
        return state === 0 ? 0 : state - 1;
      case "increase":
        return state + 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <h1>Besucher im Kaufhaus</h1>
      <div id="count">{count}</div>
      <div>
        <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        <button onClick={() => dispatch({ type: "increase" })}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
