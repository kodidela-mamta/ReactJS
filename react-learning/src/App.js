import "./App.css";
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
import PropDrilling from "./Practice/PropDrilling";

function App() {
  return (
    <div className="App">
      <h1>React Practice Page</h1>
      <ClassBasedExample />
      <FunctionalBasedExample />
      {/* <PropDrilling /> */}
    </div>
  );
}

export default App;
