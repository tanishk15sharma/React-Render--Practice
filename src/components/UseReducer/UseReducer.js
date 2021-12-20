import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerFunction = () => {
  const [count, setCount] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => setCount("increase")}>Increase</button>
      <button onClick={() => setCount("decrease")}>Decrease</button>
      <button onClick={() => setCount("reset")}>Reset</button>
      <div>
        <strong>COUNT -</strong> {count}{" "}
      </div>
    </div>
  );
};

export default UseReducerFunction;
