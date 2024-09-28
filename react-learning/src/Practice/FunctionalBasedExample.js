import React, { useState } from "react";

function FunctionalBasedExample() {
  const [count, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(count + 1);
  };
  return (
    <>
      <h1>Functional Based Example of Count: {count} times</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
export default FunctionalBasedExample;
