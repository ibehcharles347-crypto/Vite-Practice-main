import React from "react";
import Body from "../Body";
import Footer from "../Footer";

function Home({darkMode, toggleTheme}) {
    return (
        <div>
            <Body darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Home