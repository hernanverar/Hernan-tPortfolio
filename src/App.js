import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Background from "./background/Background.js";
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
    </Router>
  );
};

export default App;
