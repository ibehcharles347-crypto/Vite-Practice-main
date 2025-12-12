import React, { useState } from "react";
import "./Header.css";

function Mode({ darkMode, toggleTheme }) {
    return (
        <>
            <button
                onClick={toggleTheme}
                className={darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"}
            >
                {darkMode ? "" : ""}
            </button>
        </>
    );
}

export default Mode;