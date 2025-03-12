import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100 && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);
    return () => document.removeEventListener("click", closeMenuOnOutsideClick);
  }, [menuOpen]);

  return (
    <motion.nav
      className={`navbar ${hidden ? "hidden" : ""} ${menuOpen ? "menu-open" : ""}`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/" className="logo"><img src="/images/logodark.png" alt="Logo" />
</Link>

      {/* Dark Mode Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      {/* Hamburger Menu */}
      <div 
        className="menu-icon" 
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
