
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassBasedExample from "./Practice/ClassBasedExample";
import FunctionalBasedExample from "./Practice/FunctionalBasedExample";
import './App.css'
import Navbar from './Practice/Navbar';
import Shop from './Practice/Shop';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/functionalComponent' element={<FunctionalBasedExample />} />
          <Route path='/classComponent' element={<ClassBasedExample />} />
          {/* <Route path='/Navbar' element={<Navbar />} />
          <Route path='/Shop' element={<Shop />} /> */}
        </Routes>
      </BrowserRouter>
      <Navbar />
      <div className='container'>
        <Shop />
      </div>
    </div>
  );
}

export default App;