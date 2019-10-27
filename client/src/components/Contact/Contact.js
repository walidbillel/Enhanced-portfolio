import React from "react";
import "./Contact.css";
import API from "../../utils/API";
import Modal from "../Modal";
import Modal2 from "../Modal2";
import { SocialIcon } from "react-social-icons";

class Contact extends React.Component {
  state = {
    user: "",
    email: "",
    message: "",
    show: false,
    show2: false,
    users: []
  };

  componentDidMount() {
    API.getUsers()
      .then(users => {
        this.setState({ users: users.data });
        // console.log(this.state.users);
      })
      .catch(err => console.log(err));
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showModal2 = () => {
    this.setState({ show2: true });
  };

  hideModal2 = () => {
    this.setState({ show2: false });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    // this.state.users.forEach(user => {
    //   if (user.email === this.state.email) {

    //   }
    // });

    if (!this.state.user || !this.state.email || !this.state.message) {
      this.showModal();
    } else {
      API.saveUser({
        name: this.state.user,
        email: this.state.email,
        message: this.state.message
      })
        .then(res => {
          this.setState({
            user: "",
            email: "",
            message: ""
          });
        })
        .catch(err => console.log(err));
      this.showModal2();
    }
  };

  render() {
    return (
      <div>
        <div className="container box-container">
          <p className="contact-titre">Contact</p>
          <br></br>

          <div className="row">
            <div className="col-md-6">
              <br></br>
              <h4> Give Me A Shout.</h4>
              <br></br>
              <h4> Let's Make Something Awesome!</h4>
              <br></br>

              <div className="flex-box-2">
                <div>
                  <SocialIcon url="http://email.com" />
                </div>

                <div>
                  <p id="eml">walid.boubguira@gmail.com</p>
                </div>
              </div>

              <div className="flex-box">
                <div>
                  <SocialIcon
                    url="https://www.linkedin.com/in/walid-boubguira-89219462/"
                    style={{ height: 75, width: 75 }}
                    bgColor="#205991"
                    fgColor="#FFFFFF"
                  />
                </div>

                <div>
                  <SocialIcon
                    url="https://www.behance.net/walidbob-guerra"
                    style={{ height: 75, width: 75 }}
                    bgColor="#0E41C5"
                    fgColor="#FFFFFF"
                  />
                </div>
                <div>
                  <SocialIcon
                    url="https://www.instagram.com/woofty_willu/"
                    style={{ height: 75, width: 75 }}
                    bgColor="#E76937"
                    fgColor="#FFFFFF"
                  />
                </div>

                <div>
                  <SocialIcon
                    url="https://github.com/walidbillel"
                    bgColor="#444648"
                    fgColor="#FFFFFF"
                    style={{ height: 75, width: 75 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form method="POST" action="/contact">
                <input
                  id="input"
                  onChange={this.handleInputChange}
                  value={this.state.user}
                  name="user"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />

                <input
                  id="input"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />

                <textarea
                  id="input"
                  onChange={this.handleInputChange}
                  value={this.state.message}
                  name="message"
                  type="textarea"
                  rows="7"
                  className="form-control"
                  placeholder="Type your message"
                />

                <button
                  className="btn btn-success send"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <h3>Please Fill All Inputs Before Submiting</h3>
              </Modal>
              <Modal2 show={this.state.show2} handleClose={this.hideModal2}>
                <h3>
                  Thank You For Your Interset. I will Get Back To You Soon :)
                </h3>
              </Modal2>
            </div>
          </div>
          <br></br>
        </div>

        <p id='copyright'>Copyright 2019, Walid Billel Boubguira</p>
      </div>
    );
  }
}

export default Contact;
