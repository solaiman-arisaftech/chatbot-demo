import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Home from './Pages/Home/home';
import { Routes, Route} from 'react-router-dom'

import Data from './Pages/Data/data';

function App() {
  const [data, setData] = useState ([])
  return (
    
    // <div className="App ">
    //   {/* <Home/> */}
    //   <Data/>
    // </div>
    <div className='App'>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='data' element={<Data/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
