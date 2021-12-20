import React, { useState } from "react";

const initialObj = {
  fname: "tanishk",
  lname: "sharma",
};

console.log(initialObj);

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialObj);

  return (
    <div>
      <button>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};

export default ObjectUseState;
