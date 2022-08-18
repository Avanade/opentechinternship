import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\magic-moment.png"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>The first time you turn it on you will see this screen</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="set-up-headset\src\images\hummingbird-1.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Introduction to a humming bird</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="set-up-headset\src\images\hummingbird-2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>The humming bird will follow your hand</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default ImageCarousel