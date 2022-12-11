import React, { Component } from "react";
import "./Styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="LOGO">LOGO</div>
        <div className="search">
          <ul>
            <li>
              <ion-icon name="search-outline"></ion-icon>
            </li>
            <li>
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."></input>
            </li>
          </ul>
        </div>
        <div className="options">
          <p>Resources</p>
          <p>Sign in</p>
        </div>
      </div>
    );
  }
}

export default Header;
