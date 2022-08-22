import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import HeaderAndNavBar from '../components/header';
import WebsiteCard from '../components/website_card';

export default function FindOutMore() {
  return (
    <div className="FindOutMore">
      <HeaderAndNavBar />
      <h1>Find Out More</h1>
      <Container>
        <WebsiteCard />
      </Container>
    </div>
  );
}