import React, { useState } from "react";

const initialObj = {
  fname: "Tanishk",
  lname: "Sharma",
};

// console.log(initialObj);

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialObj);

  //   const changeName = () => {                This will not work , beacuse directly mutating property of Obj or array will not change the values of the Obj
  //     person.fname = "Webdeveloper";
  //     person.lname = "Tanishk";

  //     setPerson(person);
  //   };

  //so we have to do it like this

  const changeName = () => {
    //now it's good to go
    const NewPersonObj = { ...initialObj };
    NewPersonObj.fname = "Web-DEV";
    NewPersonObj.lname = "Tanishk";

    setPerson(NewPersonObj);
  };

  console.log("Immutable UseState  Render");

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};

export default ObjectUseState;
