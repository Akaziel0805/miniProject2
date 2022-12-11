import React, { Component } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Homepage from "./Pages.js/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Homepage />
      </div>
    );
  }
}

export default App;
