import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Sonnet from '../../components/Sonnet';

import {Navbar, Container, Nav, NavDropdown, Tabs, Tab, Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <h1>Set up your HoloLens 2</h1>

        <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Insert Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="top-navbar-nav" />
        <Navbar.Collapse id="top-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about-me">About Me</Nav.Link>
            <Nav.Link href="step-by-step">Step-by-Step</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Card style = {{color: "#000"}}>
      <Card.Header>Step 1</Card.Header>
        <Card.Body>
          <Card.Title>Turn the HoloLens on.</Card.Title>
            <Card.Text>
              Step 1 is words, more words.
            </Card.Text>
        </Card.Body>
    </Card>

        
      </header>
    </div>

  );
}

export default App;
