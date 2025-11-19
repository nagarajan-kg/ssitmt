import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">

      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-section">
            <h2>Navigation</h2>
            <ul>
              <li>› Home</li>
              <li>› About Us</li>
              <li>› Our Products</li>
              <li>› Gallery</li>
              <li>› Blogs</li>
              <li>› Careers</li>
              <li>› Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>About Us</h2>
            <ul>
              <li>› Our Mission</li>
              <li>› Our Team</li>
              <li>› Our History</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Head Office</h2>
            <p>
              Sakthi Steel Industries Limited, No 18/26,
              <br />
              2nd Street, Loganathan Nagar,
              <br />
              Choolaimedu, Chennai - 600094.
            </p>
            <div className="social-icons">
              <a className="icon" aria-label="facebook" href="#" title="Facebook">
                <FaFacebookF />
              </a>
              <a className="icon" aria-label="instagram" href="#" title="Instagram">
                <FaInstagram />
              </a>
              <a className="icon" aria-label="linkedin" href="#" title="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h2>Factory 1</h2>
            <p>
              No.15/1 Abc, 16, 17/1ab 2a, Vasanadu
              <br />
              Gollapalee, Kuppam Mandal, Andhra Pradesh,
              <br />
              Chitoor-517425.
            </p>

            <h2 className="mt-4">Factory 2</h2>
            <p>
              No.223 & 233 Nelvai Thirumukkoodal Road,
              <br />
              Amaravathipattinam Village, Kattankulam Panchayath,
              <br />
              Uthiramerur Taluk, Kanchipuram-631606.
            </p>
          </div>
        </div>
      </div>

    
      <div className="footer-ribbon">
        <span>Developed by <a className="ribbon-link" href="#">Clicktots Technologies</a></span>
      </div>


      <a
        className="whatsapp-btn"
        href="https://wa.me/919999999999" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
