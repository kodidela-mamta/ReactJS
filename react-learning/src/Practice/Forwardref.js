import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => (
  <>
    <span>forwardRef Example</span>
    <input ref={ref} {...props} />
    <button onClick={props.handleForwardRef}>Focus with Forwardref</button>
  </>
));
export default MyInput;
