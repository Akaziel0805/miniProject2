import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
