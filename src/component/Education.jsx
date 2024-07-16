import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Education.css";
import { Tilt } from "react-tilt";

const Education = () => {
  const education = [
    {
      institution: "VNSGU",
      degree: "Bachelor of Computer Applications 💻",
      year: "2021-2024",
      description:
        "Focused on web development, database management, and software engineering.",
    },
    {
      institution: "J.B. & Karp vidya snakul",
      degree: "12th",
      year: "2020-2021",
      description: "Specialized in Accounting",
    },
    {
      institution: "J.B. & Karp vidya snakul",
      degree: "10th",
      year: "2018-2019",
      description: "Specialized in Maths",
    },
  ];

  return (
    <section id="education" className="education-section bg-black">
      <div className="container">
        <h2 className="  fw-bolder text-white mb-5 section-title">EDUCATION</h2>
        {/* <div
          id="educationCarousel"
          className="carousel slide position-relative w-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {education.map((edu, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="education-card bg-dark text-white mx-3">
                  <div className="card-content">
                    <h3 className="institution">{edu.institution}</h3>
                    <p className="degree">{edu.degree}</p>
                    <p className="year opacity-50">{edu.year}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                  <div className="card-decoration overflow-hidden"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="circle-animation1"></div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#educationCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#educationCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div className="row mx-2">
          {education.map((data, index) => {
            return (
              <>
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                  key={index}
                >
                  <Tilt>
                    <div className="card text-white rounded-4 pb-4">
                      <div className="card-body d-flex flex-column gap-3">
                        <h5
                          className="card-title fw-bold pt-3"
                          style={{ color: "#ffd700" }}
                        >
                          🎓 {data.institution} 🎓
                        </h5>
                        <hr />
                        <h6 className="card-subtitle mb-2 ">{data.degree}</h6>
                        <h6 className="card-subtitle mb-2">{data.year}</h6>
                        <p className="card-text">{data.description}</p>
                      </div>
                    </div>
                  </Tilt>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="circle-animation2"></div>
    </section>
  );
};

export default Education;
