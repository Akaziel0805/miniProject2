import React, { Component } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Navigate } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      length2: 0,
      zIndex: 1,
      zIndex2: 0,
      yPos: "translate(90%, 19%)",
    };
  }
  onMouseHover = () => {
    this.setState({
      length: 205,
      length2: 215,
      yPos: "translate(90%, 17%)",
    });
  };
  onMouseLeave = () => {
    this.setState({
      length: 0,
      length2: 0,
      yPos: "translate(90%, 19%)",
    });
  };

  setIndex = () => {
    this.setState({
      zIndex: 0,
      zIndex2: 1,
    });
  };

  setIndex2 = () => {
    this.setState({
      zIndex: 1,
      zIndex2: 0,
    });
  };

  register = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4001/register", {
        usernameReg: event.target.usernameReg.value,
        passwordReg: event.target.passwordReg.value,
      })
      .then((response) => {
        console.log(response);
      });
  };

  login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4001/login", {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        console.log(response);
        document.cookie =
          response.data.length > 0 ? `user=${response.data[0].id}` : "";
      });
    console.log();
  };

  render() {
    return (
      <div className="sign">
        <div className="sign-bg"></div>
        <div
          style={{
            transform: `${this.state.yPos}`,
            zIndex: `${this.state.zIndex2}`,
          }}
          onMouseEnter={this.onMouseHover}
          onMouseLeave={this.onMouseLeave}
          className="sign-in">
          <form onSubmit={this.login}>
            <p className="welcome">Welcome!</p>
            <p className="cred">Please Sign In</p>
            <span className="input-log">
              <input
                type="text"
                name="username"
                placeholder="Enter username..."
              />
              <input
                type="password"
                name="password"
                placeholder="Enter password..."
              />
            </span>

            <p onClick={this.setIndex2} className="redirect">
              Don't have an account? SIGN UP
            </p>
            <div
              className="line"
              style={{
                width: `${this.state.length}px`,
              }}></div>
            <button type="submit">LOGIN</button>
          </form>
          <div className="sign-in-footer">
            <Footer />
          </div>
        </div>
        <div
          style={{
            transform: `${this.state.yPos}`,
            zIndex: `${this.state.zIndex}`,
          }}
          onMouseEnter={this.onMouseHover}
          onMouseLeave={this.onMouseLeave}
          className="sign-up">
          <form onSubmit={this.register}>
            <p className="welcome">Welcome!</p>
            <p className="cred">Please Sign Up</p>
            <span className="input-log">
              <input
                name="usernameReg"
                type="text"
                placeholder="Enter username..."
              />
              <input
                name="passwordReg"
                type="password"
                placeholder="Enter password..."
              />
            </span>

            <p onClick={this.setIndex} className="redirect">
              Already have an account? SIGN IN
            </p>
            <div
              className="line"
              style={{
                width: `${this.state.length2}px`,
              }}></div>
            <button type="submit">REGISTER</button>
          </form>
          <div className="sign-in-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
