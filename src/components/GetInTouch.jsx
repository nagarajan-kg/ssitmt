// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import "../styles/GetInTouch.css";

import contact_img from "../assets/images/contact_img.png";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">

        <h3 className="sub-heading" data-aos="fade-right">GET IN TOUCH</h3>
        <h1 className="main-heading" data-aos="fade-left">
          We would love to hear from you! Please fill out the form below
          to get in touch with us.
        </h1>

        <div className="contact-content">

          {/* Left image */}
          <div className="contact-image-box" data-aos="zoom-in">
            <img
              src={contact_img}
              alt="Dummy"
              className="contact-image"
            />
          </div>

          {/* Right form */}
          <form className="contact-form" data-aos="fade-up">

            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Product Interested In" />
            </div>

            <textarea placeholder="Your Message"></textarea>

            <button className="send-btn">SEND MESSAGE</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
