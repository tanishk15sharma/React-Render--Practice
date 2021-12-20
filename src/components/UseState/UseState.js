import React, { useState } from "react";

const UseStateFunction = () => {
  const [count, setCount] = useState(0);

  console.log("UseState Render"); //on page load you will see this in console

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <button onClick={() => setCount(0)}>count 0 </button>
      {/* if you will click this btn on page reload nothing will happen , beacuse initial value of useState is 0 only ....so we conclude that if the value is same it does not re-render  */}
      <button onClick={() => setCount(5)}> count 5 </button>
      {/* if we will click this btn on page reload we will see the console msg ..But if the value of count is 5 and then we will click this btn then you cant see the console msg as UseState render will not be rendered if the values are same  */}
      {/* on page reload- if we will click count 5 once, the value will become 5(count) and console msg will come , BUT if we will click it again nothing will happen as the value 5(count) is setted and re-render does not occur when values are same   */}
    </div>
  );
};

export default UseStateFunction;
