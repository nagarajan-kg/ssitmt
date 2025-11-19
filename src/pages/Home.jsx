import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; 
import "../styles/home.css";
import StrengthSection from "../components/StrengthSection";
import About from "../components/About";
import Range from "../components/Range";
import Achievements from "../components/Achievements";
import ProcessSlider from "../components/ProcessSlider";
import EventsSection from "../components/EventsSection";
import InnovationSection from "../components/InnovationSection";
import ClientsSection from "../components/ClientsSection";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StrengthSection/>
      <About/>
      <Range/>
      <Achievements/>
      <ProcessSlider/>
      <EventsSection/>
      <InnovationSection/>
      <ClientsSection/>
      <GetInTouch/>
      <Footer/>
    </>
  );
};

export default Home;
