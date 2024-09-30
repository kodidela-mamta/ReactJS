import React from "react";

//example for lifting state up , here we created child component and managing state in parent
function Container(props) {
  return (
    <div>
      {/* // example for children prop key here */}
      {props.children}
    </div>
  );
}
export default Container;
