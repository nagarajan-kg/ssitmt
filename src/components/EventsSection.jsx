import React from "react";
import "../styles/events.css";

import img1 from "../assets/images/event1.png";
import img2 from "../assets/images/event2.png";
import img3 from "../assets/images/event3.png";

const EventsSection = () => {
  const events = [
    {
      title: "Public Health Event",
      desc: "Description for Public Health Event",
      img: img1,
    },
    {
      title: "Education Event",
      desc: "Description for Education Event",
      img: img2,
    },
    {
      title: "Environmental Benefit Event",
      desc: "Description for Environmental Benefits",
      img: img3,
    },
  ];

  return (
    <section className="events-section">
      <p className="subtitle">BEYOND BUSINESS</p>
      <h2 className="title">Events and Social Responsibility</h2>

      <div className="events-container">
        {events.map((ev, index) => (
          <div className="event-card" key={index}>
            <img src={ev.img} alt="event" className="card-img" />

            <div className="card-overlay">
              <h3>{ev.title}</h3>
              <p>{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
