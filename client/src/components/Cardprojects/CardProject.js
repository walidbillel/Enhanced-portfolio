import React from "react";
import "./CardProject.css";
import Modal from "../Modal";
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';

class CardProject extends React.Component {
  componentDidMount() {
    // console.log(this.props);
  }

  state = {
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render() {
    return (
      <div className=" project-card" >
        <div className="img-container">
          <img src={this.props.gif} alt={this.props.projectName} />
        </div>
        <Fade left>
          <div className="content">
            <button className="btn btn-dark" onClick={this.showModal}><span className="titre"> {this.props.projectName}</span></button>
            <br></br>
            <br></br>
            <br></br>
            <p id="tec"> {this.props.technologies}</p>
          </div>
        </Fade>

        <Modal show={this.state.show} handleClose={this.hideModal}>
        <iframe src={this.props.appLink} title={this.props.appLink}></iframe>
      </Modal>
      </div>

     
    );
  }
}

CardProject.protoType = {
  gif: PropTypes.string,
  projectName: PropTypes.string,
  technologies: PropTypes.string,
  appLink: PropTypes.string

}
export default CardProject;
