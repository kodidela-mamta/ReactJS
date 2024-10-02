import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProvider from "./CustomComponents/MyProvider";
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
import PropDrilling from "./Practice/PropDrilling";

function App() {
  return (
    <div className="App">
      <h1>React Practice Page</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/functionalComponent' element={<FunctionalBasedExample />} />
          <Route path='/functionalComponent' element={<ClassBasedExample />} />
        </Routes>
      </BrowserRouter>

      {/* <PropDrilling /> */}
    </div>
  );
}

export default App;
