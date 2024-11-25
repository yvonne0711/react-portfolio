import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import projectsData from '../projects.json';

function Projects() {
  return (
    <div className="projects-container">
      <Header>
        Projects
      </Header>
      <Cards projects={projectsData} />
    </div>
  );
}

export default Projects;