import React from "react";
import Hero from "../components/Hero";
// import About from "../components/About";
import Projects from "../components/Projects";
import Projectss from "../components/Projectss";
import Contact from "../components/Contact";
import "./Home.css";
import Skills from "../components/Skills";


const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Projectss />
      <Contact />
    </>
  );
};

export default Home;
