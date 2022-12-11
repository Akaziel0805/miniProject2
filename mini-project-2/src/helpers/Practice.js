import "./Practice.css";

import React, { Component } from "react";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
    };
  }

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

  render() {
    return (
      <div
        onMouseEnter={this.handleBoxToggle}
        className={`container${this.state.showBox ? " show" : ""}`}>
        <div className="wrapper">
          <div className="innerBox" />
        </div>
      </div>
    );
  }
}

export default Practice;
