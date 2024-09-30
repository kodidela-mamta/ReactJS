import React, { createContext, useState } from "react";
import FunctionalBasedExample from "../Practice/FunctionalBasedExample";

const MyContext = createContext();

export default function MyProvider({ children }) {
  const value = "hello";
  return (
    <MyContext.Provider value={"hello"}>
      <FunctionalBasedExample />
      {/*    // here all  child components comes which need to share data */}
    </MyContext.Provider>
  );
}
