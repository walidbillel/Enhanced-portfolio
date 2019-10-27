import React, { Component } from "react";
import "./Illustration.css";
import { Slide } from "react-slideshow-image";
import Fade from "react-reveal/Fade";
import image1 from "../pic-illu/buisness_card.jpg";
import image2 from "../pic-illu/character-walid.jpg";
import image3 from "../pic-illu/desert-iluustrated.jpg";
import image4 from "../pic-illu/moonstar.jpg";
import image5 from "../pic-illu/planet-walid.jpg";
import image6 from "../pic-illu/triangle.jpg";
import image7 from "../pic-illu/wolf-moon.jpg";


const slideImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    
  }
};

class Illustration extends Component {
  render() {
    return (
      <div>
        <Fade left>
          
          <div className="slide-container">
            <Slide {...properties}>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[0]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[1]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[2]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[3]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[4]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[5]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[6]})` }}
                ></div>
              </div>
            
             
            </Slide>
          </div>
        </Fade>
        <br></br>
      </div>
    );
  }
}

export default Illustration;
