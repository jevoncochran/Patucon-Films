import React, { useState, useEffect } from "react";
import "./Intro.scss";
import fistsUp from "../../assets/fists-up.jpg";

const Intro = () => {
  //   const [textVisible, setTextVisible] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setTextVisible(true);
  //       document.getElementById("intro-img").style.opacity = "0.7";
  //     }, 3000);
  //   }, []);

  return (
    <div className="intro-main">
      <div className="intro-img-div">
        <img
          id="intro-img"
          className="intro-img"
          src={fistsUp}
          alt="fists up"
        />
        {/* {textVisible && ( */}
        <p className="intro-text">Building POWER By Telling Stories</p>
        {/* // )} */}
      </div>
    </div>
  );
};

export default Intro;
