import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import HeaderAndNavBar from '../components/header';
import WebsiteCard from '../components/website_card';
import CameraCard from '../components/camera_card';

export default function FindOutMore() {
  return (
    <div className="FindOutMore">
      <HeaderAndNavBar />
      <h1>Find Out More</h1>
      <Container>
        <Row>
          <Col>
            <WebsiteCard />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <CameraCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}