import React, { useState } from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import AllProducts from './components/pages/Allproducts.jsx';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = (e) => {
    setDarkMode(!darkMode);
    e.preventDefault();
  };

  return (
    <>
      <div className='header'>
        <Header darkMode={darkMode} toggleTheme={toggleTheme}>
        </Header>
        <Routes>
          <Route path='/products&services' element={<AllProducts darkMode={darkMode} toggleTheme={toggleTheme}></AllProducts>} />
          <Route path='/home' element={<Home darkMode={darkMode} toggleTheme={toggleTheme}></Home>} />
        </Routes>
      </div>
    </>
  );
};

export default App
