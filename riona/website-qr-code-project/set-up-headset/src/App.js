import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import StepCard from './components/step_card';
import ImageCarousel from './components/carousels';


function App() {
  return (
    <div className="App">
      <Header/>
      <StepCard/>
      <ImageCarousel/>      
    </div>
  );
}

export default App;
