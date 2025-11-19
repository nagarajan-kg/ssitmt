import React, { useEffect } from "react";
import "../styles/innovation.css";

import { FaShieldAlt, FaLeaf } from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";

// AOS IMPORTS
import AOS from "aos";
import "aos/dist/aos.css";

const InnovationSection = () => {
  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);

  const cards = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Ultimate Strength",
      text: "Engineered to exceed global standards, ensuring every structure lasts.",
    },
    {
      id: 2,
      icon: <MdAutoFixHigh />,
      title: "Long-Lasting Durability",
      text: "Advanced quenching technology keeps bars strong and ductile for decades.",
    },
    {
      id: 3,
      icon: <FaLeaf />,
      title: "Sustainable Processes",
      text: "Eco-conscious production ensures both quality and responsibility.",
    },
  ];

  return (
    <section className="inv-section">
      <div className="inv-container">
        <h2 className="inv-title" data-aos="fade-up">
          Innovation & Performance
        </h2>

        <p className="inv-subtitle" data-aos="fade-up" data-aos-delay="150">
          SSI TMT Bars deliver unmatched strength, reliability, and sustainability.
        </p>

        <div className="inv-card-wrapper" data-aos="fade-up" data-aos-delay="300">
          {cards.map((card) => (
            <div className="inv-card" key={card.id}>
              <div className="inv-icon">{card.icon}</div>
              <h3 className="inv-card-title">{card.title}</h3>
              <p className="inv-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
