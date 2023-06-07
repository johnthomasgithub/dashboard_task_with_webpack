import React, { useState } from "react";

const CLickCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>CLickCounter</div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </div>
  );
};

export default CLickCounter;
