import React from "react";
import './App.css';
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";



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
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>    
  );
}

export default App
