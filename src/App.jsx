import React, {useState} from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';



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
      </div>
      <Body darkMode={darkMode} toggleTheme={toggleTheme}/>
      <Footer darkMode={darkMode} toggleTheme={toggleTheme}/>
    </>
  );
};

export default App
