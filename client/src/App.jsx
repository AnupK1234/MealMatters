import React from "react";
import './App.css';
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    // <>
    //   {/* <Home /> */}
    //   {/* <About /> */}
    //   <Contact />
    // </>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>    
  );
}

export default App
