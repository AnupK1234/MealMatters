import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import { ForgotPassword } from "./components/ForgotPassword.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login";
import { ResetPassword } from "./components/ResetPassword.jsx";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import FoodCatalog from "./components/foodCatalog/FoodCatalog";
import FoodDetails from "./components/foodDetails/FoodDetails";
import Inventory from "./components/pages/Inventory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/dashboard1" element={<Dashboard1 />} /> */}
      {/* <Route path="/dashboard3" element={<Dashboard3 />}>
        <Route path="/dashboard3/#donor" element={<Dashboard1 />} />
        <Route path="/dashboard3/#donor1" element={<Dashboard1 />} />
        <Route path="/dashboard3/#donor2" element={<Dashboard />} />
      </Route> */}
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/search/:searchTerm" element={<Inventory />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/foods/:id" element={<FoodCatalog />} />
    </Routes>
  );
}

export default App;
