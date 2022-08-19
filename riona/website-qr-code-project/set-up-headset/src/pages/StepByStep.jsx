import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import HeaderAndNavBar from '../components/header';
import ImageCarousel from '../components/carousel';
import StepCard1 from '../components/step_card_1';
import StepCard2 from '../components/step_card_2';

function StepByStep() {
  return (
    <div className="StepByStep">
      <HeaderAndNavBar />
      <Container>
        <Row>
          <Col>
          <h1>Step by Step Guide</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col><StepCard1 /></Col>
          <Col><StepCard2 /></Col>
        </Row>
        <br />
        <Row>
          <Col><ImageCarousel /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default StepByStep;