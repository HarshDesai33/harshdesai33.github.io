import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: harsh@example.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Privacy Links */}
        <div className="row mt-3">
          <div className="col text-center">
            <p>
              &copy; {new Date().getFullYear()} Harsh Desai. All rights
              reserved.
            </p>
            <p>
              <a href="#" className="text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
