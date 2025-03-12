import React, { useCallback } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { ReactTyped } from "react-typed";
const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="hero">
      <div className="floating-blur blur1"></div>
      <div className="floating-blur blur2"></div>
      <div className="floating-dot dot"><img src="../images/dots.svg"></img></div>
      <div className="floating-dot dot2"><img src="../images/dot2.svg"></img></div>


    <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="intro-text">Hi, I'm</span>
        <span className="name-highlight">Maame Yaa Twumasi</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="typed-container"
      >
        <ReactTyped
          className="typed-text"
          style={{ fontFamily: "'Courier New', monospace" }}
          strings={[
            "Software Developer",
            "Web and Back-end Development",
            "Tech Enthusiast",
            "Problem Solver",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
          backDelay={1000}
        />
      </motion.p>

      <motion.a
        href="#projects"
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToProjects}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
