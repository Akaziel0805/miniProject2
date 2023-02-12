import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

import "./components/Styles.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
      </>
    );
  }
}

export default App;
