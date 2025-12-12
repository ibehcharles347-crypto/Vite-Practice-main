import React, { useState } from "react";
import "./Header.css";
import Brandwhite from "./Brandwhite.jsx";
import Mode from "./Mode.jsx";
import Nav from "./Nav.jsx"

function Header({ darkMode, toggleTheme }) {
    return (
        <>
            <header id="header" className={darkMode ? "bg-dark text-white " : "bg-light text-dark"}>
                <nav className="container-fluid d-flex justify-content-between align-items-center px-5">
                    <Brandwhite />

                    <ul className="nav d-none d-lg-flex">
                        <li className="nav-item">
                            <a href="#" className={darkMode ? "nav-link  active" : "nav-link active"}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={darkMode ? "nav-link text-white" : "nav-link text-dark"}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={darkMode ? "nav-link text-white" : "nav-link text-dark"}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={darkMode ? "nav-link text-white" : "nav-link text-dark"}>Contact</a>
                        </li>
                    </ul>
                    
                    <div className="d-flex justify-content-between align-items-center gap-3"><button className="getStartedbtn btn bg-theme px-4">Get Started</button>
                    <Mode darkMode={darkMode} toggleTheme={toggleTheme} ></Mode>
                    <Nav darkMode={darkMode} toggleTheme={toggleTheme}></Nav>
                    </div>


                </nav>
            </header>

        </>
    );
};

export default Header;