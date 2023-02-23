// Import the React libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages";
import About from "../pages/about";
import Contact from "../pages/contact";
import Navbar from "../navbar";

// Create a function for navigation
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
