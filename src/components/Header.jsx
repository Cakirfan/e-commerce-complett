import React from "react";
import { Image } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";
import foto1 from "../helpers/images/s1.jpg";
import foto2 from "../helpers/images/s2.jpg";
import foto3 from "../helpers/images/s3.jpg";

function Header() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <Image className="image" src={foto1} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="image" src={foto2} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="image" src={foto3} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header
