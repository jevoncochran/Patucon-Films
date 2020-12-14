import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTwitter, FaVimeoV } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="nav-logo-div">
        <p>Patucon Films</p>
      </div>
      <div className="nav-sections-div">
        <p>About</p>
        <p>Films</p>
        <p>Photography</p>
        <p>Contact</p>
      </div>
      <div className="nav-social-div">
        <GrInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaVimeoV />
      </div>
    </div>
  );
};

export default NavBar;
