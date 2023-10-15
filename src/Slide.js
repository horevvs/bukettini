

import React, { useState, useEffect } from "react"
import slide1 from "./images/slide1.jpeg"
import slide2 from "./images/slide2.jpg"
import slide3 from "./images/slide3.jpg"

import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img width='600px' height='420px'
          src={slide1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          width='600px' height='420px'
          src={slide2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          width='600px' height='420px'
          src={slide3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;

