import "./App.css";
import MyProvider from "./CustomComponents/MyProvider";
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
import PropDrilling from "./Practice/PropDrilling";

function App() {
  return (
    <div className="App">
      <h1>React Practice Page</h1>
      <ClassBasedExample />
      <MyProvider>
        <FunctionalBasedExample />
      </MyProvider>
      {/* <PropDrilling /> */}
    </div>
  );
}

export default App;
