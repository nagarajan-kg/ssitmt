import React, { useState, useEffect, useRef } from "react";
import "../styles/hero.css";

import hero1 from "../assets/images/banner1.png";
import hero2 from "../assets/images/banner2.jpg";
import hero3 from "../assets/images/banner3.png";

const slides = [
  {
    id: 0,
    img: hero1,
    title: "Engineered for Excellence, Built to Last",
    btn: "Contact Us",
  },
  {
    id: 1,
    img: hero2,
    title: "Quality Steel for Every Project",
    btn: "Contact Us",
  },
  {
    id: 2,
    img: hero3,
    title: "Reliable Construction Materials",
    btn: "Contact Us",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const slideCount = slides.length;

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  function startAuto() {
    if (intervalRef.current) return;
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideCount);
    }, 4000);
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function goto(i) {
    setIndex(i % slideCount);
    // reset interval
    stopAuto();
    setTimeout(() => {
      if (!paused) startAuto();
    }, 50);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + slideCount) % slideCount);
    stopAuto();
    setTimeout(() => {
      if (!paused) startAuto();
    }, 50);
  }

  function next() {
    setIndex((prev) => (prev + 1) % slideCount);
    stopAuto();
    setTimeout(() => {
      if (!paused) startAuto();
    }, 50);
  }

  return (
    <header
      className="hero-section"
      onMouseEnter={() => {
        setPaused(true);
        stopAuto();
      }}
      onMouseLeave={() => {
        setPaused(false);
        startAuto();
      }}
    >
      <div className="hero-carousel">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <img src={s.img} className="hero-img" alt={s.title} />
            <div className="hero-text">
              <h1>{s.title}</h1>
              <button className="hero-btn">{s.btn}</button>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          className="hero-arrow left"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="hero-arrow right"
          onClick={next}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots */}
        <div className="hero-dots" role="tablist" aria-label="Slide indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goto(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
