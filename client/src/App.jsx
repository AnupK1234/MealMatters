import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home.jsx";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FoodDetails from "./components/foodDetails/FoodDetails";
import FoodCatalog from "./components/foodCatalog/FoodCatalog";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboard1 from "./components/dashboard/Dashboard1";
import Inventory from "./components/pages/Inventory";



function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard1' element={<Dashboard1 />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/search/:searchTerm' element={<Inventory />} />

      <Route path='/food/:id' element={<FoodDetails />} />
      <Route path='/foods/:id' element={<FoodCatalog />} />
    </Routes>    
  );
}

export default App
