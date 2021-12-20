import React, { useState } from "react";

const initialState = ["Tanishk", " sharma"];

const ArrayUseStateFunction = () => {
  const [person, setPerson] = useState(initialState);

  const HandleName = () => {
    //this will not ADD the names in DOM because when we push elemt to same array the array value cahnges but array reference itself does not change ..therefore we need to make a NEW array
    person.push("javascript");
    person.push("react");

    setPerson(person);
  };

  console.log("Immutable UseState Render");
  return (
    <div>
      <button onClick={HandleName}>Click</button>
      {person.map((name) => (
        <div key={name}> {name} </div>
      ))}
    </div>
  );
};

export default ArrayUseStateFunction;
