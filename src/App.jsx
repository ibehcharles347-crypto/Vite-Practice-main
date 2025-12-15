import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AllProducts from "./components/pages/Allproducts.jsx";
import Cart from "./components/pages/Cart.jsx";
import Checkout from "./components/pages/Checkout";
import Success from "./components/pages/Success";
import Newsletter from "./components/Newsletter.jsx";

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
        {/* Home */}
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/home" element={<Home darkMode={darkMode} />} />

        {/* Products */}
        <Route
          path="/products&services"
          element={<AllProducts darkMode={darkMode} />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart darkMode={darkMode} />}
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/newsletter" element={<Newsletter></Newsletter>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;



