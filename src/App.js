import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact.js";
import "./styles/app.css";
import Background from "./background/Background.js";
import HernanStats from "./myStats/HernanStats.js";
import Projects from "./projects/Projects.js";


const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      <HernanStats />
    </Router>
  );
};

export default App;
