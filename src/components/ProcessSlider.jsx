import React, { useState, useEffect, useRef } from "react";
import "../styles/processSlider.css";

import slider_img1 from "../assets/images/slider_img1.jpg";
import slider_img2 from "../assets/images/slider_img2.jpg";
import slider_img3 from "../assets/images/slider_img3.jpg";
import slider_img4 from "../assets/images/slider_img4.jpg";
import slider_img5 from "../assets/images/slider_img5.jpg";
import slider_bg from "../assets/images/slider_bg.jpg";

const slides = [
  {
    title: "Heating Stage",
    text: "Raw materials are heated at extremely high temperatures to achieve perfect malleability.",
    img: slider_img1,
  },
  {
    title: "Rolling Process",
    text: "The heated billets are rolled into long bars with high precision and consistency.",
    img: slider_img2,
  },
  {
    title: "Cooling Bed",
    text: "Bars are left to cool at controlled rates, ensuring structural integrity.",
    img: slider_img3,
  },
  {
    title: "Cutting & Sizing",
    text: "Bars are cut and sized according to industrial standards and customer requirements.",
    img: slider_img4,
  },
  {
    title: "Final Inspection",
    text: "Each batch is inspected for quality and durability before dispatch.",
    img: slider_img5,
  },
];

export default function ProcessSlider() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(null);

  // Auto slide
  useEffect(() => {
    const auto = setInterval(() => next(), 4500);
    return () => clearInterval(auto);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Mouse + Touch drag
  const handleStart = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handleEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.clientX || e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <section
      className="process-section"
      style={{ backgroundImage: `url(${slider_bg})` }}
    >
      <div className="overlay"></div>

      <div
        className="slider-area"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <div className="left-side">
          <div className="top-heading">
            <p className="small-title">OUR PROCESS</p>
            <h2 className="big-title">From Fuel to Fire</h2>
          </div>
          <img src={slides[current].img} alt="slide" className="slide-img" />
        </div>

        <div className="right-side">
          <h3 className="slide-title">{slides[current].title}</h3>
          <p className="slide-text">{slides[current].text}</p>
        </div>
      </div>
    </section>
  );
}
