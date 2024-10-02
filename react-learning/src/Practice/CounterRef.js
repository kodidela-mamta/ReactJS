import React from "react";

function CounterRef({ counterRef, incrementCountUsingRef }) {
  return (
    <>
      <span>Count increment with useRef :{counterRef}times</span>
      <button onClick={incrementCountUsingRef}>Click me</button>
    </>
  );
}
export default CounterRef;
