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
                    <span id="skills-hash">HTML</span>
                   
                  </li>
                  <br></br>
                  <li key="2">
                    <span id="skills-hash">CSS</span>
                    
                  </li>

                  <br></br>
                  <li key="3">
                    <span id="skills-hash">JAVASCRIPT</span>
                    
                  </li>
                  <br></br>

                  <li key="4">
                    <span id="skills-hash">NODE JS</span>
                   
                  </li>
                  <br></br>
                  <li key="5">
                    <span id="skills-hash">REACT JS</span>
                  
                  </li>
                  <br></br>
                  <li key="11">
                    <span id="skills-hash">SEQUELIZE</span>
                  
                  </li>
                  <br></br>
                  <li key="14">
                    <span id="skills-hash">MVC</span>
                  
                  </li>
                </ul>
              </div>
            </Fade>

            <Fade right>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li key="6">
                    <span id="skills-hash">JQUERY</span>
                  
                  </li>
                  <br></br>
                  <li key="7">
                    <span id="skills-hash">MONGO DB</span>
                    
                  </li>

                  <br></br>
                  <li key="8">
                    <span id="skills-hash">MYSQL</span>
                  
                  </li>
                  <br></br>

                  <li key="9">
                    <span id="skills-hash">ILLUSTRATOR</span>
                 
                  </li>
                  <br></br>
                  <li key="10">
                    <span id="skills-hash">PHOTOSHOP</span>
                 
                  </li>
                  <br></br>
                  <li key="12">
                    <span id="skills-hash">AFTER EFFECTS</span>
                 
                  </li>   
                  <br></br>
                  <li key="13">
                    <span id="skills-hash">PREMIER PRO</span>
                 
                  </li>                
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      
    );
  }
}

export default Skills;
