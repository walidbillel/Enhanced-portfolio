import React, { Component } from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Spin from "react-reveal/Spin";
import Logo from "./logo.svg"

class About extends Component {
  render() {
    return (
      <div>
        <Fade bottom>
          <div className="container-fluid n-1">
            <div className="row">
              <div className="col-md-12">
                <br></br>
                <Spin><img className="img img-responsive logo-img" src={Logo} alt="walid"></img></Spin>
              </div>
              
            </div>
          </div>
        </Fade>

        <Zoom><div className="container-fluid n-2">
          <div className="row">
           <div className="col-md-12 name">
                <p>Walid Boubguira</p>
                <h3>Full Stack Web Developer</h3>
           </div>
          </div>
        </div></Zoom>

        <Fade left><div className="container-fluid n-3">
            <div className="row">
                <div className="col-md-12">
                    <p>Ambitious Solution Seeker</p>
                </div>
            </div>
        </div></Fade>
      </div>
    );
  }
}

export default About;
