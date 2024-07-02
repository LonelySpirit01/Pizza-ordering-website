import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         Welcome to our pizza website , we are an Indian brand
        </p>
      </div>
    </div>
  );
}

export default About;