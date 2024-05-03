import React from "react";
import About from "./components/AboutPage";
import Home from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
