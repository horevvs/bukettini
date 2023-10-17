

import React, { useState, useEffect } from "react"
import slide1 from "./images/slide1.jpeg"
import slide2 from "./images/slide2.jpg"
import slide3 from "./images/slide3.jpg"

import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 border border-secondary"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div class=" px-5 py-3  ">
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <a className="s12">Заказать</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border border-secondary"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div class=" px-5 py-3">
            <div class=" px-5 py-3">
              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <a className="s12">Заказать</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border border-secondary"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div class=" px-5 py-3">
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <a className="s12">Заказать</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;

