import React from "react";
import "./FeaturedProjects.scss";
import PrimaryFeature from "./PrimaryFeature";
import projects from "./projects";
import SecondaryFeature from "./SecondaryFeature";

const FeaturedProjects = () => {
  return (
    <div>
      <PrimaryFeature />
      <div className="fp-secondary-div">
        {projects.map((project) => (
          <SecondaryFeature
            url={project.url}
            title={project.title}
            summary={project.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
