import React, { Component } from "react";
import studs from "../pictures/studs.jpg";
import "../components/Styles.css";

import Card from "../helpers/Card";
import AnotherCard from "../helpers/AnotherCard";

import Footer from "../components/Footer";

class Latest extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="first-div">
          <img className="home-picture" src={studs} />
          <div className="home-quote">
            <p className="text">
              "There is no elevator to success. You have to take the stairs."
            </p>
            <div className="vertical-line"></div>
            <div className="horizontal-line"></div>
            <p className="text-author">~ Zig Ziglar</p>
          </div>
          <div className="card-layout">
            <Card
              category="RESULT"
              subject="November 2022 Civil Engineer CE board exam top 10 passers"
              article="MANILA, Philippines – The November 2022 Civil Engineer (CE) board
            exam top 10 or topnotchers including other results - list of passers, top..."
              more="SEE ARTICLE"
              image={require("../pictures/Book.jpg")}
            />
            <Card
              category="RESULT"
              subject="November 2022 Civil Engineer CE board exam performance of schools"
              article="MANILA, Philippines – The Professional Regulation Commission (PRC) announced the November 2022 Civil Engineering (CE) board exam results..."
              more="SEE ARTICLE"
              image={require("../pictures/college.jpg")}
            />
          </div>
        </div>

        <div className="second-div">
          <div style={{ paddingTop: "20px" }} className="cards-layout">
            <AnotherCard
              width="15%"
              image={require("../pictures/books.jpg")}
              category="STATS"
              subject="Student Academic Interests by Enrollment"
              article="What exactly are academic interests? They are a specific academic topic that may be of..."
              more="SEE MORE"
            />
            <AnotherCard
              width="15%"
              image={require("../pictures/books.jpg")}
              category="STATS"
              subject="Student Academic Interests by Enrollment"
              article="What exactly are academic interests? They are a specific academic topic that may be of..."
              more="SEE MORE"
            />
            <AnotherCard
              width="15%"
              image={require("../pictures/books.jpg")}
              category="STATS"
              subject="Student Academic Interests by Enrollment"
              article="What exactly are academic interests? They are a specific academic topic that may be of..."
              more="SEE MORE"
            />
            <AnotherCard
              width="15%"
              image={require("../pictures/books.jpg")}
              category="STATS"
              subject="Student Academic Interests by Enrollment"
              article="What exactly are academic interests? They are a specific academic topic that may be of..."
              more="SEE MORE"
            />
            <AnotherCard
              width="15%"
              image={require("../pictures/books.jpg")}
              category="STATS"
              subject="Student Academic Interests by Enrollment"
              article="What exactly are academic interests? They are a specific academic topic that may be of..."
              more="SEE MORE"
            />
          </div>
        </div>
        <div className="third-div">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Latest;
