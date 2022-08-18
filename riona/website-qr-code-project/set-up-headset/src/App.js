import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import IntroCard from './components/intro_card';
import ImageCarousel from './components/carousels';
import StepCard2 from './components/step_card_1';
import StepCard3 from './components/step_card_2';


function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col">
            <IntroCard />
          </div>
          <div />
          <div class="row">
            <div class="col">
              <StepCard2 />
            </div>
            <div class="col">
              <StepCard3 />
            </div>
          </div>
          <div class="row">
            <ImageCarousel />
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
