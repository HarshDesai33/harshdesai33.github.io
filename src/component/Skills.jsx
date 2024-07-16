import React from "react";
import "../css/Skills.css";

const Skills = () => {
  const skills = [
    { name: "ReactJS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "Bootstrap", level: "90%" },
    { name: "NodeJS", level: "70%" },
  ];

  return (
    <section id="skills" className="skills-section bg-black text-white">
      <div className="container">
        <h2 className="display-1 fw-bolder mb-3 pb-4 section-title">SKILLS</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-4" key={index}>
              <div className="skill-item">
                <h3 className="">{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: skill.level }}
                    aria-valuenow={parseInt(skill.level)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="progress-level progress-bar-striped text-black fw-bolder">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
