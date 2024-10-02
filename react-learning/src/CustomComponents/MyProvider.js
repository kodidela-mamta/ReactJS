import React, { createContext } from "react";

const MyContext = createContext();

export default function MyProvider({ children }) {
  const value = "hello";
  return (
    <MyContext.Provider value={value}>
      {children}
      {/*    // here all  child components comes which need to share data */}
    </MyContext.Provider>
  );
}
