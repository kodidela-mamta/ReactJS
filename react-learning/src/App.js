import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
import "./App.css";
import Navbar from "./Practice/Navbar";
import Shop from "./Practice/Shop";

export const userContext = createContext("");

function App() {
  const [userName, setUserName] = useState("Context API");
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Shop />
      </div>
      <hr />
      {/* //context api code  */}
      <userContext.Provider value={{ userName, setUserName }}>
        <FunctionalBasedExample />
      </userContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/functionalComponent"
            element={<FunctionalBasedExample />}
          />
          <Route path="/classComponent" element={<ClassBasedExample />} />
          {/* <Route path='/Navbar' element={<Navbar />} />
          <Route path='/Shop' element={<Shop />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
