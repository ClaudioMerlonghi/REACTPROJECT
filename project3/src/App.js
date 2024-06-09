import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contacttt" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;