import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col} from 'react-bootstrap';

import HeaderAndNavBar from '../components/header.jsx';
import TipCard1 from '../components/tip_card_1';

export default function TipsAndTricks() {
    return (
      <div className="TipsAndTricks">
      <HeaderAndNavBar />
      <h1>Tips & Tricks</h1>

      <Container>
        <Row>
          <Col>
            <TipCard1 />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </div>
    );
  }