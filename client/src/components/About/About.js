import React, { Component } from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Spin from "react-reveal/Spin";
import Logo from "./logo.svg";
import Me from "./profile.svg";

class About extends Component {
  render() {
    return (
      <div>
        <Fade bottom>
          <div className="container">
            <div className="row">
              <div className="col-md-6 n-1">
                <Spin>
                  <img
                    className="img img-responsive"
                    src={Logo}
                    alt="walid"
                  ></img>
                </Spin>
                <p>Walid Boubguira</p>
              </div>
              <div className="col-md-6 titles">
                <p className="role">Full Stack Web Developer</p>
                <p className="graph">Graphic Designer</p>
                <hr></hr>
                <p className="des">Ambitious Solution Seeker</p>
                <p className="learn">FULL TIME INNOVATOR</p>
              </div>
            </div>
            <div className="row">
            <div className="col-md-4 me">
                <img className="img" src={Me} alt="walid"></img>
              </div>
            <div className="col-md-8 n-2">
                <p>
                  - Full stack Javascript developer with hands on experience of
                  designing, developing and maintaining responsive web
                  applications using most current cutting edge technologies.{" "}
                </p>
                <p>
                  - Interested in a challenging developement opportunity where
                  innovation, education, and creativity are valued.{" "}
                </p>
                <p>
                  - Enthusiastic and a life long learner who is very adaptive in
                  fast paced environments.
                </p>
                <p>- African, <b>B</b>orn and raised in Algeria, mastered education in New York City, seeking interdisciplinary work.</p>
              </div>
             
              
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
