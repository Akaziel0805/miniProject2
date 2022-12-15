import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css";

function Header() {
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
        <NavLink to="/">
          <p>Resources</p>
        </NavLink>

        <NavLink to="sign">
          <p>Sign in</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
