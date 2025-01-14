import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard1 from "../../assets/Screenshot 2025-01-14 at 23.19.49.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-7xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 text-4xl">
        <ProjectCard
           src={ProjectCard1}
          title="Ecommerce Website"
          main="this is a ecommerce website created in react js and used some component library .You can add items remove them purchase them if you want "
        />
      
      </div>
    </div>
  );
};

export default Projects;
