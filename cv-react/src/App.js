import React from "react";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import { Route, Routes , } from "react-router-dom";
import "./styles/index.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
