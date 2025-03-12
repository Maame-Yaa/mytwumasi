import React from "react";
import "./Skills.css";

// Skill Data
const skills = [
  { name: "HTML", img: "html.svg" },
  { name: "CSS", img: "css.svg" },
  { name: "JavaScript", img: "javascript.svg" },
  { name: "React", img: "react.svg" },
  { name: "Bootstrap", img: "bootstrap.svg" },
  { name: "Node.js", img: "nodejs.svg" },
  { name: "Express.js", img: "express.svg" },
  { name: "Python", img: "python.svg" },
  { name: "MySQL", img: "mysql.svg" },
  { name: "Google Cloud", img: "gcloud.svg" },
  { name: "Google Analytics", img: "g4.svg" },
  { name: "Git", img: "git.svg" },
  { name: "Postman", img: "postman.svg" },
  { name: "WordPress", img: "wordpress.svg" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h1>The Tools Behind My Code</h1>
      <h2>I like to work with:</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={`../images/icons/${skill.img}`} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <h3>. . . and more!</h3>
    </section>
  );
};

export default Skills;
