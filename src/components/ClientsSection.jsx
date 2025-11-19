import React, { useEffect, useState } from "react";
import "../styles/clients.css";

// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

// Dummy images
import img1 from "../assets/images/clients/client1.png";
import img2 from "../assets/images/clients/client2.png";
import img3 from "../assets/images/clients/client3.png";
import img4 from "../assets/images/clients/client4.png";
import img5 from "../assets/images/clients/client5.png";
import img6 from "../assets/images/clients/client6.png";

const ClientsSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(auto);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="client-section-container">

      {/* ---------- Heading Section ---------- */}
      <div className="client-header">
        <div data-aos="fade-right">
          <h2 className="client-title">Trusted Steel</h2>
          <p className="client-subtitle">
            Building Strong Relationships with Our Valued Clients
          </p>
        </div>

        <a href="#" className="client-view-link" data-aos="fade-left">
          View All <span className="arrow-move">→</span>
        </a>
      </div>

      {/* ---------- Slider ---------- */}
      <div className="infinite-client-container">
        <button className="infinite-client-arrow left" onClick={prevSlide}>❮</button>

        <div className="infinite-client-wrapper">
          <div
            className="infinite-client-track"
            style={{
              transform: `translateX(-${index * 25}%)`,
            }}
          >
            {[...images, ...images].map((img, i) => (
              <div className="infinite-client-slide" key={i}>
                <img src={img} alt={`client-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="infinite-client-arrow right" onClick={nextSlide}>❯</button>
      </div>

    </div>
  );
};

export default ClientsSlider;
