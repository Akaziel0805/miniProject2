import React, { Component } from "react";
import "../components/Styles.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yoffset: 62,
      delta: 4,
      xlength: 0,
      deltaX: 16.1,
      color: "black",
    };
  }

  moveUp = () => {
    this.setState({
      yoffset: this.state.yoffset - this.state.delta,
      xlength: this.state.xlength + this.state.deltaX,
      color: "#1960d3",
    });
  };

  moveDown = () => {
    this.setState({
      yoffset: this.state.yoffset + this.state.delta,
      xlength: this.state.xlength - this.state.deltaX,
      color: "black",
    });
  };

  render() {
    return (
      <div
        onMouseEnter={this.moveUp}
        onMouseLeave={this.moveDown}
        className="card-container">
        <img className="card-image" src={this.props.image}></img>
        <div style={{ top: `${this.state.yoffset}%` }} className="card-context">
          <p>{this.props.category}</p>
          <p style={{ color: `${this.state.color}` }}>{this.props.subject}</p>
          <p>{this.props.article}</p>
          <p>{this.props.more}</p>
          <span style={{ width: `${this.state.xlength}%` }}></span>
        </div>
      </div>
    );
  }
}

export default Card;
