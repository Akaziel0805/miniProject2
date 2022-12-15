import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Career from "./pages/Career";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import "./components/Styles.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="app__top">
          <Header />
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="/" element={<Homepage />} />
              <Route path="career" element={<Career />} />
            </Route>
            <Route path="sign" element={<SignIn />} />
          </Routes>
        </div>
        <div className="app__bot">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
