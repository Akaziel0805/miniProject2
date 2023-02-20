import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css";

function Header() {
  return (
    <div className="header">
      <div className="LOGO">LOGO</div>

      <div className="options">
        <NavLink to="/">
          <p>Latest</p>
        </NavLink>
        <NavLink to="program">
          <p>Program Details</p>
        </NavLink>
        <NavLink to="sign">
          <p>Sign in</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
