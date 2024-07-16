import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.6,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const sectionId = entry.target.id;
  //         setActive(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
  //       }
  //     });
  //   }, options);

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  const handleSetActive = (section) => {
    setActive(section);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-lg ${
        navBackground ? "navbar-bg" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bolder"
          href="#"
          style={{ fontFamily: "playball" }}
        >
          <span
            style={{ fontFamily: "Black Ops One", color: "#ffd700" }}
            className="display-4"
          >
            H
          </span>
          arsh{" "}
          <span
            style={{ fontFamily: "Black Ops One", color: "#ffd700" }}
            className="display-6"
          >
            D
          </span>
          esai
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Education",
              "Contact",
            ].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className={`nav-link ${active === section ? "active" : ""}`}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => handleSetActive(section)}
                >
                  {section}
                </a>
                {active === section && <div className="underline"></div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
