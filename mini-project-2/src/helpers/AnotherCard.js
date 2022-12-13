import React, { Component } from "react";
import "../components/Styles.css";

class AnotherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: 40,
      delta: 10,
      xlength: 0,
      deltaX: 22.5,
      color: "black",
    };
  }
  moveUp = () => {
    this.setState({
      margin: this.state.margin - this.state.delta,
      xlength: this.state.xlength + this.state.deltaX,
      color: "#1960d3",
    });
  };

  moveDown = () => {
    this.setState({
      margin: this.state.margin + this.state.delta,
      xlength: this.state.xlength - this.state.deltaX,
      color: "black",
    });
  };

  render() {
    return (
      <div
        style={{ marginTop: `${this.state.margin}px` }}
        className="cards-container"
        onMouseEnter={this.moveUp}
        onMouseLeave={this.moveDown}>
        <img className="cards-image" src={this.props.image}></img>
        <div className="cards-context">
          <p style={{ width: this.props.width }}>{this.props.category}</p>
          <p style={{ color: `${this.state.color}` }}>{this.props.subject}</p>
          <p>{this.props.article}</p>
          <p style={{ color: `${this.state.color}` }}>{this.props.more}</p>
          <p style={{ width: `${this.state.xlength}%` }} className="line"></p>
        </div>
      </div>
    );
  }
}

export default AnotherCard;
