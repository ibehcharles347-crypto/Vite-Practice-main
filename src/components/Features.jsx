import React, { useState } from "react";
import "./Features.css";
import { featuresData } from "./features";

function Features({ darkMode }) {
    return (
        <>
            <section id="features" className={darkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"}>
                <div className="container">
                    <div className="row text-center mb-4">
                        <h2>Why Shop With Us</h2>
                    </div>
                    <div className="row">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className={darkMode ? "card bg-dark text-white h-100" : "card bg-white text-dark h-100"}>
                                    <div className="card-body text-center shadow border-0 rounded">
                                        <i className={`${feature.icon} feature-icon mb-3`}></i>
                                        <h5 className="card-title">{feature.title}</h5>
                                        <p className="card-text">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Features;

