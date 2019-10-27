import React, { Component } from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";


class Skills extends Component {
  render() {
    return (
      
        <div className="container skills-box">
          <div className="row">
            <div className="col-md-12 skills-title">
              <Fade left>
                <p>Skills</p>
              </Fade>
            </div>
          </div>

          <div className="row">
            <Fade left>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li key="1">
                    <span id="skills-hash">HTML5</span>
                    <div className="progress">
                      <div
                        className="progress-bar html"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>
                  <li key="2">
                    <span id="skills-hash">CSS3</span>
                    <div className="progress">
                      <div
                        className="progress-bar css"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>

                  <br></br>
                  <li key="3">
                    <span id="skills-hash">JAVASCRIPT</span>
                    <div className="progress">
                      <div
                        className="progress-bar js"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>

                  <li key="4">
                    <span id="skills-hash">NODE JS</span>
                    <div className="progress">
                      <div
                        className="progress-bar js"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>
                  <li key="5">
                    <span id="skills-hash">React JS</span>
                    <div className="progress">
                      <div
                        className="progress-bar rc"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </Fade>

            <Fade right>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li key="6">
                    <span id="skills-hash">JQUERY</span>
                    <div className="progress">
                      <div
                        className="progress-bar js"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>
                  <li key="7">
                    <span id="skills-hash">MONGO DB</span>
                    <div className="progress">
                      <div
                        className="progress-bar js"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>

                  <br></br>
                  <li key="8">
                    <span id="skills-hash">MYSQL</span>
                    <div className="progress">
                      <div
                        className="progress-bar js"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>

                  <li key="9">
                    <span id="skills-hash">ADOBE ILLUSTRATOR</span>
                    <div className="progress">
                      <div
                        className="progress-bar rc"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>
                  <li key="10">
                    <span id="skills-hash">ADOBE PHOTOSHOP</span>
                    <div className="progress">
                      <div
                        className="progress-bar ph"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <br></br>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      
    );
  }
}

export default Skills;
