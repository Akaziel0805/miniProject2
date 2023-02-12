import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Latest from "../pages/Latest";
import Career from "../pages/Career";
import SignIn from "../pages/SignIn";
import Program from "../pages/Program";
import Materials from "../pages/Materials";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <Routes>
          <Route path="/" element={<Latest />} />
          <Route path="career" element={<Career />} />
          <Route path="sign" element={<SignIn />} />
          <Route path="program" element={<Program />} />
          <Route path="materials" element={<Materials />} />
        </Routes>
      </div>
    );
  }
}

export default Body;
