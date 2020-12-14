import React from "react";
import "./FeaturedProjects.scss";
import ReactPlayer from "react-player";

const SecondaryFeature = (props) => {
  return (
    <div className="fp-secondary-individual-div">
      <div className="fp-secondary-video-container">
        <ReactPlayer
          url={props.url}
          controls
          width="448px"
          height="252px"
          light={props.light}
          playIcon={<span></span>}
          style={{ opacity: "0.85" }}
        />
      </div>
      <div className="fp-secondary-text-div">
        <p className="fp-secondary-title">{props.title}</p>
        <p className="fp-secondary-summary">{props.summary}</p>
      </div>
    </div>
  );
};

export default SecondaryFeature;
