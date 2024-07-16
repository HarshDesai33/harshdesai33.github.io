import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import About from "./About";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Skills from "./Skills";
import ScrollToTop from "react-scroll-to-top";
import Education from "./Education";
import { SocialIcon } from "react-social-icons";
import Contact from "./Contact";
import Projects from "./Project";
import image from "../image/1704782710821.jpg";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer", "React Enthusiast", "Creative Coder"],
    loop: Infinity,
  });

  const socialIconData = [
    {
      name: "Facebook",
      network: "facebook",
      url: "https://facebook.com",
      backgroundColor: "rgba(59,89,152,1)",
    },
    // {
    //   name: "Google",
    //   network: "google",
    //   url: "https://google.com",
    //   backgroundColor: "rgb(221, 75, 57)",
    // },
    {
      name: "LinkedIn",
      network: "linkedin",
      url: "https://linkedin.com",
      backgroundColor: "rgba(0,127,177,1)",
    },
    {
      name: "Github",
      network: "github",
      url: "https://github.com",
      backgroundColor: "rgba(36,46,41,1)",
    },
    {
      name: "Instagram",
      network: "instagram",
      url: "https://instagram.com",
      backgroundColor: "rgba(233,68,117,1)",
    },
  ];

  return (
    <>
      <div className="portfolio_main_header">
        <Navbar />
        <div className="social_media_section position-fixed d-flex flex-column gap-2">
          {socialIconData.map((data, index) => {
            return (
              <>
                <div className="social_icon_boxes" key={index}>
                  <SocialIcon
                    style={{ width: "35px", height: "35px" }}
                    className="social-icon"
                    network={data.network}
                    url={data.url}
                    target="_blank"
                  />
                  <NavLink
                    to={data.url}
                    target="_blank"
                    style={{
                      backgroundColor: `${data.backgroundColor}`,
                    }}
                    className="mb-0"
                  >
                    {data.name}
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
        <header
          className="header d-flex flex-column justify-content-center"
          id="home"
        >
          <div className="overlay top-0 left-0 w-100 h-100 position-absolute"></div>
          <div className="container ">
            <div className="d-flex flex-column justify-content-center">
              <h5 className="opacity-50">WELCOME TO MY WORLD</h5>
              <h1 className="display-1 fw-bolder">Harsh Desai</h1>
              <div className="lead">
                <h1 className="fw-bolder display-3">
                  I'm a <span style={{ color: "#ffd700" }}>{text}</span>
                  {/* <Cursor cursorColor="yellow" /> */}
                </h1>
              </div>
              <div>
                <button
                  className="btn btn-warning py-3 px-5 mt-3"
                  style={{ backgroundColor: "#ffd700" }}
                >
                  Learn More
                </button>
              </div>
            </div>
            {/* <div>
              <img
                src={image}
                alt="Harsh Desai"
                className="img-fluid"
                style={{ width: "500px" }}
              />
            </div> */}
          </div>
          <div className="square-animation1"></div>
          <div className="square-animation2"></div>
          <div className="rec-animation3"></div>
          <div className="rec-animation4"></div>
          <div className="circle-animation5"></div>
        </header>

        <About />
        <Skills />
        {/* <Projects /> */}
        <Education />
        <Contact />
        <hr className="p-0 m-0" />
        <Footer />
        <ScrollToTop smooth className="bg-warning" />
      </div>
    </>
  );
}

export default Home;
