import React, { Component } from "react";
import Footer from "../components/Footer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      yPos: "translate(88%, 19%)",
    };
  }
  onMouseHover = () => {
    this.setState({
      length: 205,
      yPos: "translate(88%, 17%)",
    });
  };
  onMouseLeave = () => {
    this.setState({
      length: 0,
      yPos: "translate(88%, 19%)",
    });
  };
  render() {
    return (
      <div className="sign">
        <div className="sign-bg"></div>
        <div
          style={{
            transform: `${this.state.yPos}`,
          }}
          onMouseEnter={this.onMouseHover}
          onMouseLeave={this.onMouseLeave}
          className="sign-in">
          <p className="welcome">Welcome!</p>
          <p className="cred">Please Sign In</p>
          <span className="input-log">
            <input name="username" placeholder="Enter username..." />
            <input name="password" placeholder="Enter password..." />
          </span>

          <p className="redirect">Don't have an account? SIGN UP</p>
          <div
            className="line"
            style={{
              width: `${this.state.length}px`,
            }}></div>
          <button>LOGIN</button>
          <div className="sign-in-footer">
            <Footer />
          </div>
        </div>
        <div className="sign-up"></div>
      </div>
    );
  }
}

export default SignIn;
