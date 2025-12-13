import React, { useState } from "react";
import "./Header.css";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function MobileNav({ darkMode }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand={false} className="d-lg-none">
            <Navbar.Toggle
                onClick={handleShow}
                className={darkMode ? "bg-dark border-0" : "bg-white border-0"}
            >
                <i className={`bi bi-menu-button ${darkMode ? "text-white" : "text-dark"}`} />
            </Navbar.Toggle>

            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}
            >
                <Offcanvas.Header closeButton closeVariant={darkMode ? "white" : undefined}>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="flex-column gap-2">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            onClick={handleClose}
                            className={darkMode ? "text-white" : "text-dark"}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/products&services"
                            onClick={handleClose}
                            className={darkMode ? "text-white" : "text-dark"}
                        >
                            All Products
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/about"
                            onClick={handleClose}
                            className={darkMode ? "text-white" : "text-dark"}
                        >
                            About
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/contact"
                            onClick={handleClose}
                            className={darkMode ? "text-white" : "text-dark"}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
}


export default MobileNav;