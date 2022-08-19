import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAndNavBar from '../components/header.jsx';

function AboutMe() {
  return (
    <div className="AboutMe">
      <HeaderAndNavBar />
      <h1>About Me</h1>
    </div>
  );
}

export default AboutMe;