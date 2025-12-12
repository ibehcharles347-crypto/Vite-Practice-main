import React, { useState } from "react";
import "./Header.css";

function Nav({ darkMode }) {
    const [isOpen, setIsOpen] = useState(false); // tracks open/close

    const toggleNav = () => {
        setIsOpen(!isOpen); // toggles true/false
    };

    return (
        <div className="d-lg-none">

            <button
                onClick={toggleNav}
                className={darkMode ? "bg-dark text-white p-2 border-0" : "bg-white text-dark p-2 border-0"}
            >
                <i className="bi bi-menu-button"></i>
            </button>


            {isOpen && (
                <ul
                    className={
                        darkMode
                            ? "nav d-flex flex-column position-fixed fixed-top-right bg-dark"
                            : "nav d-flex flex-column position-fixed fixed-top-right bg-white"
                    }
                >
                    <li className="nav-item">
                        <a className={darkMode ? "nav-link text-white" : "nav-link text-dark"} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={darkMode ? "nav-link text-white" : "nav-link text-dark"} href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className={darkMode ? "nav-link text-white" : "nav-link text-dark"} href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className={darkMode ? "nav-link text-white" : "nav-link text-dark"} href="#">Contact</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Nav;