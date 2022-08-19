import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

const HeaderAndNavBar = () => {
    return (
        <><Link to="/home" style={{ color: "black", textDecoration: 'none' }}><h1>HoloLens 2</h1></Link>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/home" style={{ color: "white", textDecoration: 'none' }}>
                        <img
                            src="./images/avanade_logo.png"
                            alt="Insert Logo"
                        />
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="top-navbar-nav" />
                    <Navbar.Collapse id="top-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link ><Link to="/about-me" style={{ color: "white", textDecoration: 'none' }}>About Me</Link></Nav.Link>
                            <Nav.Link><Link to="/step-by-step" style={{ color: "white", textDecoration: 'none' }}>Step-by-Step</Link></Nav.Link>
                            <Nav.Link><Link to="/tips-and-tricks" style={{ color: "white", textDecoration: 'none' }}>Tips & Tricks</Link></Nav.Link>
                            <Nav.Link><Link to="/find-out-more" style={{ color: "white", textDecoration: 'none' }}>Find Out More</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar></>
    )
}
export default HeaderAndNavBar
