import React, { useState } from "react";

const initialState = ["Tanishk", " sharma"];

const ArrayUseStateFunction = () => {
  const [persons, setPerson] = useState(initialState);

  //   const HandleName = () => {
  //     //this will not ADD the names in DOM because when we push elemt to same array the array value cahnges but array reference itself does not change ..therefore we need to make a NEW array
  //     person.push("javascript");
  //     person.push("react");

  //     setPerson(person);
  //   };

  const HandleName = () => {
    //Now we r good to go , as new arry will give the refeence too
    //therefor make a new copy of OBJECT or ARRAY ,modify it and pass it
    const NewArrayPerson = [...persons];
    NewArrayPerson.push("web-developer");
    NewArrayPerson.push("Coder");

    setPerson(NewArrayPerson);
  };

  console.log("Immutable UseState Render");
  return (
    <div>
      <button onClick={HandleName}>Click</button>
      {persons.map((P) => (
        <div key={P}> {P} </div>
      ))}
    </div>
  );
};

export default ArrayUseStateFunction;
