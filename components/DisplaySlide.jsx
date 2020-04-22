import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class DisplaySlide extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/image11.jpg')}
            alt="Langisjor Lake, Iceland"
          />
          <Carousel.Caption>
            <h3>Langisjor Lake, Iceland</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/image2.jpg')}
            alt="Lupine field of Iceland"
          />

          <Carousel.Caption>
            <h3>Lupine field of Iceland</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/image8.jpg')}
            alt="Landmannalaugar"
          />

          <Carousel.Caption>
            <h3>Landmannalaugar</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    );
  }
}
