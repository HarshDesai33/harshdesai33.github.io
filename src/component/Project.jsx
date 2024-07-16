import React from "react";
import "../css/Project.css";
import { Tilt } from "react-tilt";

const Project = () => {
  const projects = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/30/11/17/tree-2458047_960_720.png",
      title: "Project One",
      description: "Description of Project One",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/30/11/17/tree-2458047_960_720.png",
      title: "Project Two",
      description: "Description of Project Two",
    },
  ];
  return (
    <>
      <div className="bg-black text-white project-section" id="projects">
        <div className="container">
          <h1 className="display-1 py-4 text-center fw-bolder section-title">My Projects</h1>
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
              >
                <Tilt className="Tilt" options={{ max: 25 }}>
                  <div className="project-container position-relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-100 h-100"
                    />
                    <div className="project-details position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h3 className="project-title m-0">{project.title}</h3>
                      <p className="project-description mt-2 mb-0">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
