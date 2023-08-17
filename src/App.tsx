import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Home from './Pages/Home/home';
import Test from './Components/test';
import Data from './Pages/Data/data';

function App() {
  const [data, setData] = useState ([])
  return (
    
    <div className="App ">
      {/* <Home/> */}
      <Data/>
    </div>
  );
}

export default App;
