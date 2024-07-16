import React from "react";
import "../css/Contact.css";
import myImage from "../image/1704803280948.jpg";

function Contact() {
  return (
    <>
      <div className="bg-black py-5" id="contact">
        <div className="container text-white d-flex contact_section">
          <div className="px-3 pt-5 pb-1">
            <h1 className="display-3 fw-bolder mb-5 contact-header">
              Get in Touch
            </h1>
            <p className="text-secondary fs-5 contact-info">
              I am available for freelance work. Connect with me via phone:
              <span className="text-white"> 01923 088574</span> or email:
              <span className="text-white"> admin@example.com</span>
            </p>
            <div>
              <div className="">
                <div className="bg-black text-white rounded mt-5">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="inputText bg-black text-white"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="inputText bg-black text-white"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="inputText bg-black text-white"
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning py-3 px-5 mb-5"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <img
              src={myImage}
              alt="Harsh Desai"
              className="img-thumbnail "
              style={{
                maxWidth: "600px",
                // maxHeight:'600px',
                width: "100%",
                boxShadow: "0 25px 65px rgba(255, 255, 255, 0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
