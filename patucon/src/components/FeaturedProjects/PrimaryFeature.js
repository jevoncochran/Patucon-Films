import React from "react";
import "./FeaturedProjects.scss";
import ReactPlayer from "react-player";

const PrimaryFeature = () => {
  return (
    <div className="pf-main">
      <div className="pf-video-container">
        <ReactPlayer url="https://vimeo.com/475160747" controls />
      </div>
      <div className="pf-video-text-container">
        <p className="pf-video-title">Sembrando Lucha</p>
        <p className="pf-video-summary">
          A small town confronts the expansion of an immigrant detention
          facility in their backyard. The struggle continues, support the
          community of McFarland by sharing and using our toolkit:
          bit.ly/GEOoutMcFarland
        </p>
      </div>
    </div>
  );
};

export default PrimaryFeature;
