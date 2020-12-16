import React from "react";
import "./About.scss";
import videographer from "../../assets/videographer.jpeg";

const About = (props) => {
  return (
    <div className="about-main">
      <h1 className="about-headline">Lucas Solórzano</h1>
      <div className="about-content-container">
        <div className="about-left">
          <img
            className="about-img"
            src={videographer}
            alt="Lucas Solorzano, social justice videographer"
          />
        </div>
        <div className="about-right">
          <div className="about-right-text-container">
            <p>
              Lucas is a visual storyteller and multi-disciplinary artist with a
              grounding in youth, tenant and immigrant rights organizing. His
              work leverages collaborative multimedia strategies in social
              movement spaces.
            </p>{" "}
            <br />
            <p>
              Some of the organizations he has done audio-visual work for
              include Centro Legal de la Raza, Causa Justa/Just Cause (CJJC),
              the California Immigrant Youth Justice Alliance (CIYJA), and Faith
              in the Valley. Lucas is due to complete his MFA in Social
              Documentation at UC Santa Cruz in the summer of 2021.
            </p>
          </div>
          <div className="about-right-btn-container">
            <button
              className="about-right-btn"
              onClick={() => props.history.push("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
