import React, { Component } from "react";
import Carousel from '../../node_modules/react-bootstrap/Carousel'
import img1 from './images/11.jpg'
import img2 from './images/12.jpg'
import img3 from './images/13.jpg'


class MainPage extends Component {

    render(){
        return(
            // this row and col is from bootstrap grid system 
            <React.Fragment className="row">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
            </React.Fragment>
        )
    }
}

export default MainPage;