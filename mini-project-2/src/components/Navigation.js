import React, { Component } from "react";
import "./Styles.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <p>Latest</p>
        <p>Career Path</p>
        <p>Program Details</p>
        <p>Course Subjects</p>
        <p>Materials</p>
        <p>Rooms</p>
      </div>
    );
  }
}

export default Navigation;
