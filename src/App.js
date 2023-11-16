import React from "react";
import styled from "styled-components";

import './App.css';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>

    </div>
  );
}

export default App;
