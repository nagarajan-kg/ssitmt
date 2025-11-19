import React, { useEffect, useRef } from "react";
import "../styles/achievements.css";

import teamImg from "../assets/images/sec-bg.png";

import peoples from "../assets/images/peoples.jpg";

import icon1 from "../assets/images/icons/icon1.png";
import icon2 from "../assets/images/icons/icon2.png";
import icon3 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";
import icon6 from "../assets/images/icons/icon6.png";

export default function Achievements() {
  const iconsRef = useRef(null);
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!iconsRef.current || !imgRef.current || !sectionRef.current) return;

      // ICONS SCROLL-UP ANIMATION (from bottom to top)
      const rect = iconsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        iconsRef.current.classList.add("icons-animate");
      }

      // PARALLAX EFFECT
      const secRect = sectionRef.current.getBoundingClientRect();
      const mid = secRect.top + secRect.height / 2;
      const offset = (window.innerHeight / 2 - mid) * 0.1;
      imgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="achievements-section" ref={sectionRef}>
      <div className="achievements-content">
        {/* LEFT SIDE */}
        <div className="left">
          <h4 className="tag">OUR ACHIEVEMENTS</h4>
          <h2 className="title">
            Over the years, we were honored with prestigious awards for
            excellence in quality, innovation, and reliability.
          </h2>

          <img ref={imgRef} src={peoples} alt="team" className="team-image" />
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <p className="desc">
            These recognitions reflect our commitment to delivering world-class
            steel solutions and building trust with customers, partners, and
            communities across the construction industry. They inspire us to
            continuously raise the bar and set new standards of excellence in
            every project we undertake.
          </p>

          <div className="icons-grid" ref={iconsRef}>
            <div className="icon-box">
              <img src={icon1} alt="cert" />
            </div>
            <div className="icon-box">
              <img src={icon2} alt="cert" />
            </div>
            <div className="icon-box">
              <img src={icon3} alt="cert" />
            </div>

            <div className="icon-box row2">
              <img src={icon4} alt="cert" />
            </div>
            <div className="icon-box row2">
              <img src={icon5} alt="cert" />
            </div>
            <div className="icon-box row2">
              <img src={icon6} alt="cert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
