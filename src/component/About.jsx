import React from "react";
import "../css/About.css";
// import { NavLink } from "react-router-dom";
// import icon from "./download.png";
import myImage from "../image/1704782710821.jpg";

function About() {
  return (
    <>
      {/* <div className="bg-dark text-white py-5" id="about">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="d-flex gap-5 about_section">
                <div style={{ flex: 0.4 }} className="">
                  <img
                    src="https://storage.needpix.com/rsynced_images/portfolio-2333818_1280.jpg"
                    alt=""
                    className="img-thumbnail"
                  />
                </div>
                <div
                  style={{ flex: 0.6 }}
                  className="justify-content-center d-flex flex-column about_heade"
                >
                  <h2 className="display-1 fw-bolder my-3">ABOUT ME</h2>
                  <div className="opacity-50">
                    <p className="animated-text">
                      I am Harsh Desai, a passionate web developer with a knack
                      for creating engaging and interactive user experiences. I
                      have a strong foundation in ReactJS and Bootstrap, and I
                      love experimenting with new technologies.
                    </p>
                    <p className="animated-text">
                      I recently completed my BCA degree and have been working
                      on various projects that showcase my skills in front-end
                      development, real-time communication, and API integration.
                      My goal is to create web applications that are not only
                      functional but also visually appealing.
                    </p>
                  </div>
                  <div className="my-4">
                    <ul className="d-flex flex-column gap-3">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cupiditate.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cupiditate.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cupiditate.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cupiditate.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="btn btn-warning py-3 px-5">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section id="about" className="about-section">
        <div className="background-animation"></div>
        <div className="container d-flex flex-column align-items-center text-center">
          <div className="row align-items-center">
            <div className="col-md-6 text-container">
              <div className="justify-content-center d-flex flex-column gap-4 about_header">
                <h2 className="display-1 fw-bolder my-3 section-title">ABOUT ME</h2>
                <div className="opacity-50">
                  <p className="animated-text">
                    I am Harsh Desai, a passionate web developer with a knack
                    for creating engaging and interactive user experiences. I
                    have a strong foundation in ReactJS and Bootstrap, and I
                    love experimenting with new technologies.
                  </p>
                  <p className="animated-text">
                    I recently completed my BCA degree and have been working on
                    various projects that showcase my skills in front-end
                    development, real-time communication, and API integration.
                    My goal is to create web applications that are not only
                    functional but also visually appealing.
                  </p>
                </div>
                <div>
                  <a
                    // href="/logo192.png"
                    className="btn btn-warning py-3 px-5 mb-5"
                    download="demo"
                    itemType="jpg"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 image-container">
              <img
                src={myImage}
                alt="Harsh Desai"
                className="profile-image img-thumbnail"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
