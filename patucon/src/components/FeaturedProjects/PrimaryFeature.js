import React, { useState, useEffect } from "react";
import "./FeaturedProjects.scss";
import ReactPlayer from "react-player";
import sembrandoLuchaScreenshot from "../../assets/sembrando-lucha-screenshot.jpeg";

const PrimaryFeature = () => {
  return (
    <div className="pf-main">
      <div className="pf-video-container">
        <div className="pf-video-container-div">
          <ReactPlayer
            url="https://vimeo.com/475160747"
            controls
            light={sembrandoLuchaScreenshot}
            playIcon={<span></span>}
            // style={{ opacity: "0.8" }}
            // onMouseOver={(e) => (e.target.style.opacity = "1")}
            // onMouseLeave={(e) => (e.target.style.opacity = "0.5")}
          />
        </div>
      </div>
      <div className="pf-video-text-container">
        <p className="pf-video-title">Sembrando Lucha</p>
        <p className="pf-video-summary">
          A small town confronts the expansion of an immigrant detention
          facility in their backyard. The struggle continues: click{" "}
          <a
            href="bit.ly/GEOoutMcFarland"
            target="_blank"
            style={{ textDecoration: "none", color: "#f1c40f" }}
          >
            here
          </a>{" "}
          for more information on how you can support the community of
          McFarland.
        </p>
      </div>
    </div>
  );
};

export default PrimaryFeature;
