import React from "react";
import Container from "../CustomComponents/Container";

function FormsHandling({ name, handleChange }) {
  return (
    <div>
      <Container>
        <label style={{display:'flex', flexDirection:'column'}}>
          Enter Name: <input type="text" value={name} onChange={handleChange} />
          Name: {name}
        </label>
      </Container>
    </div>
  );
}
export default FormsHandling;
