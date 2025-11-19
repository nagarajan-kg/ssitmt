import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile toggle icons

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false); // NEW: mobile menu state

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActive(name);
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={scroll ? "nav scroll" : "nav"}>

      {/* MOBILE TOGGLE ICON */}
      <div className="mobile-toggle" onClick={toggleMobileMenu}>
        {mobileMenu ? <FiX size={25} /> : <FiMenu size={25} />}
      </div>

      <ul className={`nav-menu left-menu ${mobileMenu ? "show" : ""}`}>
        <li
          onClick={() => toggleDropdown("Home")}
          className={active === "Home" ? "active" : ""}
        >
          Home
        </li>

        <li
          onClick={() => toggleDropdown("About")}
          className={active === "About" ? "active" : ""}
        >
          About Us
        </li>

        <li
          onClick={() => toggleDropdown("Products")}
          className={active === "Products" ? "active has-icon" : "has-icon"}
        >
          Our Products
          <span className={openDropdown === "Products" ? "arrow up" : "arrow"}>▼</span>
          {openDropdown === "Products" && (
            <ul className="dropdown">
              <li>TMT Bars</li>
              <li>Billets</li>
              <li>TMT Rings</li>
              <li>Binding Wires</li>
            </ul>
          )}
        </li>

        <li
          onClick={() => toggleDropdown("Contact")}
          className={active === "Contact" ? "active has-icon" : "has-icon"}
        >
          Contact Us
          <span className={openDropdown === "Contact" ? "arrow up" : "arrow"}>▼</span>
          {openDropdown === "Contact" && (
            <ul className="dropdown">
              <li>Store Located</li>
            </ul>
          )}
        </li>
      </ul>

      {/* CENTER LOGO */}
      <div className="nav-center">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* RIGHT BUTTONS */}
      <div className="nav-right-buttons">
        <button className="enquire-btn">Enquire Now</button>
        <button className="call-btn">Request a Callback</button>
      </div>
    </nav>
  );
};

export default Navbar;
