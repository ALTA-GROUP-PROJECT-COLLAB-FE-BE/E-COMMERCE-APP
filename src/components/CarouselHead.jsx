import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselHead() {
  return (
    <Carousel fade>
      <Carousel.Item style={{ height: "19rem" }}>
        <img className="w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "19rem" }}>
        <img className="w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "19rem" }}>
        <img className="d-block w-100" src="https://via.placeholder.com/400x300" alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHead;
