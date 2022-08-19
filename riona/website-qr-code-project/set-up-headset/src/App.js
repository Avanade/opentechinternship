import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import HeaderAndNavBar from './components/header';
import IntroCard from './components/intro_card';
import ImageCarousel from './components/carousel';
import StepCard1 from './components/step_card_1';
import StepCard2 from './components/step_card_2';

function App() {
  return (
    <div className="App">
      <HeaderAndNavBar />
      <Container>
        <Row>
          <Col><IntroCard /></Col>
        </Row>
        <Row>
          <Col><StepCard1 /></Col>
          <Col><StepCard2 /></Col>
        </Row>
        <Row>
          <Col><ImageCarousel /></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
