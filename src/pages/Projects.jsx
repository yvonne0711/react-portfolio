import React from "react";
import Cards from "../components/Cards";
import projectsData from '../projects.json';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <Cards projects={projectsData} />
    </div>
  );
}

export default Projects;