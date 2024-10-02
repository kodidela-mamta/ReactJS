import React from "react";
import Container from "../CustomComponents/Container";

function Counter({ count, incrementCount }) {
  return (
    <div>
      <Container>
        <span>Handle Button Example Count : {count}times</span>
        <button onClick={incrementCount}>Increment</button>
      </Container>
    </div>
  );
}
export default Counter;
