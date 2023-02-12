import React, { Component } from "react";
import ProgramCard from "../helpers/ProgramCard";
import Footer from "../components/Footer";

export class Program extends Component {
  render() {
    return (
      <>
        <div className="program">
          <ProgramCard />
        </div>
        <div className="program-footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default Program;
