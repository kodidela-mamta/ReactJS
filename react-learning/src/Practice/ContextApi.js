import React, { useContext } from "react";
import MyContext from "../Custom/MyProvider";

function ContextApi() {
  const value = useContext(MyContext);
  return (
      <h3>
        Context APi Example <span>Value: {value}</span>
      </h3>
  );
}
export default ContextApi;
