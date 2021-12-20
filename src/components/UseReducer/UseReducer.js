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

  console.log("useReducer Render");
  return (
    <div>
      <button onClick={() => setCount("increase")}>Increase</button>
      {/* If we click
      increase btn (count= 1) it will show console msg , then we will click on
      decrease btn (count=0) it will so a console msg aagin and then count = 0
      but if we will click on reset ...WE WILL see the console msg again because
      REACT will render that component on more time ....after this we will click
      nothing will happen */}
      <button onClick={() => setCount("decrease")}>Decrease</button>
      <button onClick={() => setCount("reset")}>Reset</button>
      {/* if we will click this(reset) btn on page reload nothing will happen! as it
      is same (same as UseState) */}
      <div>
        <strong>COUNT -</strong> {count}
      </div>
    </div>
  );
};

export default UseReducerFunction;
