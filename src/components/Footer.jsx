import React from "react";
import "./Footer.css";

function Footer({darkMode}) {
    return (
        <>
        <footer className={darkMode ? "text-center py-5 bg-dark text-white" : "text-center py-5 bg-white text-dark"}>
            <div className="container">
                <div className="mb-3 row justify-content-between">
                    <div className="col-md-3">
                        <h5>Dreams <br /> <span>by <strong>Ezinne</strong></span></h5>

                    </div>
                    <div className="col-md-3">
                        <h6>Follow Us</h6>
                        <a href="#" className="text-primary me-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" className= {darkMode ? "text-white me-3": "text-dark me-3"}><i class="bi bi-twitter-x"></i></a>
                        <a href="#" className="text-danger me-3"><i class="bi bi-instagram"></i></a>
                        <a href="#" className=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    <div className="col-md-3">
                        <h6>Contact Us</h6>
                        <p className="mb-1">123 Dream St, Imagination City</p>
                        <p className="mb-1">Email:ibehcharles347@gmail.com</p>
                        <p className="mb-0">Phone: +1 234 567 890</p>
                    </div>
                    <div className="col-md-3">
                        <h6>Quick Links</h6>
                        <div className="row">
                            <div className="col-6">
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>Home</a>
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>About</a>
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>Products & Services</a>
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block"}>Contact</a>
                            </div>
                            <div className="col-6">
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>Account</a>
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>Checkout</a>
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>Login</a>
                                <a href="#" className={darkMode ? "text-white d-block mb-1" : "text-dark d-block mb-1"}>Shopping</a>
                                <a href="#" className={darkMode ? "text-white d-block " : "text-dark d-block"}>Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
        </>

    );
};

export default Footer;