import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Elopement Tracker for Children with Autism",
    description: "A real-time GPS tracking system using MERN stack and LoRaWAN.",
    link: "https://github.com/Maame-Yaa/tracker",
  },
  {
    id: 2,
    title: "Bilingual FAQ Chatbot",
    description: "An AI-powered chatbot handling English & French FAQs using Python and Streamlit.",
    link: "#",
  },
  {
    id: 3,
    title: "Dayton Weekly Online",
    description: "Redesigned The Dayton Weekly News Online Website, Dayton Ohio",
    link: "https://daytonweeklyonline.com",
  },
  {
    id: 4,
    title: "6888 Kitchen Incubator",
    description: "Built a website for The 6888 Kitchen Incubator, Dayton Ohio",
    link: "https://6888kitchen.org",
  },
  {
    id: 4,
    title: "Monarch Hills",
    description: "Built a website improving engagement with strategic SEO optimization",
    link: "https://monarchhillsgh.com",
  }
];

const Projects = () => {
  return (
<section className="projects" >
  <h2>My Projects</h2>
  <div className="project-list">
    {projects.map((project) => (
      <motion.div
        key={project.id}
        className="project-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </motion.div>
    ))}
  </div>
</section>
  );
};

export default Projects;
