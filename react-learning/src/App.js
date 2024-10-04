
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MyProvider from "./CustomComponents/MyProvider";
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
import PropDrilling from "./Practice/PropDrilling";
import User from './Practice/User';
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>React Practice Page</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/functionalComponent' element={<FunctionalBasedExample />} />
          <Route path='/classComponent' element={<ClassBasedExample />} />
          <Route path='/User/:userId' element={<User />} />
        </Routes>
      </BrowserRouter>

      {/* <PropDrilling /> */}
    </div>
  );
}

export default App;