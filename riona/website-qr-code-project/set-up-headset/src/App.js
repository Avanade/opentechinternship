import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ color: "#000"}}>
            <Card.Img />
            <Card.Body>
                <Card.Title>Card Example</Card.Title>
                <Card.Text>An example of react bootstrap cards</Card.Text>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        <Breadcrumb> 
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is a button!</Alert>
        <Button>Button</Button>
        
      </header>
    </div>
  );
}

export default App;
