import React from "react";
import "./Body.css";
import HeroComponent from "./Hero.jsx";
import Features from "./Features.jsx";
import NewArrivals from "./Newarrivals.jsx";
import Products from "./Products.jsx";
import Newsletter from "./Newsletter.jsx";
import Testimonial from "./Testimonial.jsx";

function Body({darkMode, toggleTheme}) {
    return (
        <>
        <HeroComponent></HeroComponent>
        <Features darkMode={darkMode} toggleTheme={toggleTheme}></Features>
        <section className="newarrivals" >
             <div className="container">
                <NewArrivals></NewArrivals>
             </div>
        </section>
        <section className={darkMode ? "bg-dark text-white" : "bg-light"}>
            <Products></Products>
        </section>

        <section>
            <Newsletter></Newsletter>
        </section>

        <section className={darkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"}>
            <Testimonial darkMode={darkMode} toggleTheme={toggleTheme}></Testimonial>
        </section>
        </>

    );
};

export default Body;