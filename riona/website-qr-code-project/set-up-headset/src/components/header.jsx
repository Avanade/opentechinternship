import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <><h1>HoloLens 2</h1>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Insert Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="top-navbar-nav" />
                <Navbar.Collapse id="top-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="about-me">About Me</Nav.Link>
                        <Nav.Link href="step-by-step">Step-by-Step</Nav.Link>
                        <Nav.Link href="tips-and-tricks">Tips & Tricks</Nav.Link>
                        <Nav.Link href="find-out-more">Find Out More</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></>
    )
}
export default Header
