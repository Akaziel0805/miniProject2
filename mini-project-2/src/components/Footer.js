import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="left-column">
          <div className="address">
            <p>LOGO - Lorem Ipsum</p>
            <p>
              Andres Bonifacio Avenue, Internal Rd, Tibanga, 9200 Iligan City,
              Philippines
            </p>
            <p> Telephone: +99.99.999.9999 · +88.88.888.8888</p>
            <p>LOGO. Copyright © 2022-2023. All Rights Reserved.</p>
          </div>
        </div>
        <div className="right-column"></div>
      </div>
    );
  }
}

export default Footer;
