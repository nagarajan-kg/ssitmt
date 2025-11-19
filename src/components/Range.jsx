import React, { useState, useEffect } from "react";
import "../styles/range.css";

import bgImg from "../assets/images/product-bg2.png";


import tmtImg from "../assets/images/range3.png";
import billetsImg from "../assets/images/range2.png";
import ringsImg from "../assets/images/range1.png";
import wireImg from "../assets/images/range4.png";

export default function Range() {
  const [active, setActive] = useState("tmt");

 
  useEffect(() => {
    const handleScroll = () => {
      const val = window.scrollY * 0.25;
      document.documentElement.style.setProperty("--scrollPos", `-${val}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = {
    tmt: {
      title: "TMT Bars",
      desc: "High-strength TMT bars designed for durability and reliability. Ideal for all major construction applications.",
      img: tmtImg,
    },
    billets: {
      title: "Billets",
      desc: "Precision-crafted Billets designed for durability and reliability. Ideal for a wide range of construction and industrial applications.",
      img: billetsImg,
    },
    rings: {
      title: "TMT Rings",
      desc: "Premium-quality TMT Rings engineered for superior strength and long-lasting performance.",
      img: ringsImg,
    },
    wire: {
      title: "Binding Wires",
      desc: "Durable Binding Wires offering excellent flexibility and strong holding capacity.",
      img: wireImg,
    },
  };

  return (
    <section className="range-section">
      <div className="range-container">
        <h5 className="top-title">TRUSTED QUALITY</h5>
        <h2 className="main-title">Our Range of Excellence</h2>

        {/* Tabs */}
        <div className="range-tabs">
          {["tmt", "billets", "rings", "wire"].map((key) => (
            <button
              key={key}
              className={active === key ? "active" : ""}
              onClick={() => setActive(key)}
            >
              {data[key].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="range-content">
          {/* LEFT IMAGE */}
          <div key={active} className="range-img slide-in">
            <img src={data[active].img} alt={data[active].title} />
          </div>

          {/* RIGHT CARD */}
          <div className="range-card">
            <h3>{data[active].title}</h3>
            <p>{data[active].desc}</p>

            <a href="#" className="range-btn">
              View Details →
            </a>
          </div>
        </div>
      </div>


      <img className="range-bg" src={bgImg} alt="Background" />
    </section>
  );
}
