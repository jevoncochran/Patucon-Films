import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTwitter, FaVimeoV } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="nav-logo-div">
        <Link className="nav-link no-hover" to="/">
          <p>
            <span className="nav-logo-first-letter">P</span>atucon <span className="nav-logo-first-letter">F</span>ilms
          </p>
        </Link>
      </div>
      <div className="nav-sections-div">
        <Link className="nav-link" to="/about">
          <p>About</p>
        </Link>
        <Link className="nav-link" to="/films">
          <p>Films</p>
        </Link>
        <Link className="nav-link" to="/photos">
          <p>Photography</p>
        </Link>
        <Link className="nav-link" to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="nav-social-div">
        <a
          className="nav-social-link"
          href="https://www.instagram.com/patucon/?hl=en"
          target="_blank"
        >
          <GrInstagram />
        </a>
        <a
          className="nav-social-link"
          href="https://www.facebook.com/patucon.palante/"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="nav-social-link"
          href="https://twitter.com/patucon"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          className="nav-social-link"
          href="https://vimeo.com/user11072765"
          target="_blank"
        >
          <FaVimeoV />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
