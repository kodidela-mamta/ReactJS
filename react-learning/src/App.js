
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
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
    </div>
  );
}

export default App;