import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AllProducts from "./components/pages/AllProducts.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = (e) => {
    e.preventDefault();
    setDarkMode(prev => !prev);
  };

  return (
    <>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <Routes>
        {/* Home shows first */}
        <Route path="/" element={<Home darkMode={darkMode} />} />

        {/* Optional alias */}
        <Route path="/home" element={<Home darkMode={darkMode} />} />

        <Route
          path="/products&services"
          element={<AllProducts darkMode={darkMode} />}
        />

        {/* Optional redirect for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;


