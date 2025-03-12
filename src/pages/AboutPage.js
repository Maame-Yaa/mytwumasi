import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
      I’m Maame Yaa Twumasi, a full-stack developer with a passion for building clean, user-friendly, and scalable web applications. I’ve worked on e-commerce sites, optimized website performance, and created intuitive UI designs. Whether it’s front-end or back-end, I enjoy solving problems and making the web more efficient.
      </p>
      
      <div className="about-sections">
        <div className="about-section">
          <h3>Experience</h3>
          <p>🛠 Building & optimizing full-stack applications with scalable architecture</p>
          <p>⚡ Improving performance, security, and database efficiency</p>
          <p>🎨 Designing intuitive user interfaces and enhancing user experience</p>
          <p>🔗 Developing APIs, integrating third-party services, and managing data flow</p>
          <p>📊 Solving technical challenges with a mix of front-end and back-end solutions</p>
        </div>

        <div className="about-section">
          <h3>Skills & Technologies</h3>
          <p>💻 Tech Stack: MERN (MySQL, Express, React, Node.js), MySQL, WordPress, Shopify</p>
          <p>🎨 UI/UX: Figma, Adobe XD, Responsive Design</p>
          <p>⚙️ Tools: Git, GitHub, SEO, Web Performance Optimization</p>
        </div>

        {/* <div className="about-section">
          <h3>Education</h3>
          <p>🎓 Academic City University College, Ghana – BBA in Marketing</p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutPage;
