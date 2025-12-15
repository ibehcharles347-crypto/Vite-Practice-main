import React, { useState } from "react";
import "./Header.css";
import Brandwhite from "./Brandwhite.jsx";
import Mode from "./Mode.jsx";
import { Container } from "react-bootstrap";
import MobileNav from "./MobileNav.jsx";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleTheme }) {
    return (
        <Navbar
            expand="lg"
            bg={darkMode ? "dark" : "light"}
            variant={darkMode ? "dark" : "light"}
            className="px-5" style={{position:"sticky", top:"0", zIndex:"999"}}
        >
            <Container fluid>
                <div className={darkMode ? "Brandname text-white me-3" : "Brandname text-dark me-3"}><h2 className="m-0 fw-bold">Dreams</h2>
                    <p>by <strong>Ezinne</strong></p>
                </div>

                {/* Desktop Nav */}
                <Nav className="d-none d-lg-flex">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>

                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>

                    <Nav.Link as={Link} to="/products&services">
                        Products & Services
                    </Nav.Link>

                    <Nav.Link as={Link} to="/contact">
                        Contact
                    </Nav.Link>

                    <Nav.Link as={Link} to="/cart">
                        Cart
                    </Nav.Link>
                </Nav>

                {/* Right side */}
                <div className="d-flex align-items-center gap-3">
                    <Button className="getStartedbtn bg-theme px-4">
                        Get Started
                    </Button>

                    <Mode darkMode={darkMode} toggleTheme={toggleTheme} />

                    {/* Mobile menu */}
                    <MobileNav darkMode={darkMode} toggleTheme={toggleTheme} />
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
