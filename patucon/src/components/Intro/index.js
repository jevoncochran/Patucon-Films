import React from "react";
import "./Intro.scss";
import fistsUp from "../../assets/fists-up.jpg";

const Intro = () => {
  return (
    <div className="intro-main">
      <div className="intro-img-div">
        <img
          id="intro-img"
          className="intro-img"
          src={fistsUp}
          alt="fists up"
        />
        <p className="intro-text">Building POWER By Telling Stories</p>
      </div>
    </div>
  );
};

export default Intro;
