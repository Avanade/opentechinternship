import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAndNavBar from '../components/header.jsx';

export default function TipsAndTricks() {
    return (
      <div className="TipsAndTricks">
      <HeaderAndNavBar />
      <h1>Tips & Tricks</h1>
    </div>
    );
  }