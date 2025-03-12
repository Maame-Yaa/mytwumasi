import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectsPage.css";

const projects = [
  {
    id: 1,
    title: "Vannar Designs",
    description:
      "An e-commerce site, that offers a range of fashion products",
    image: "/images/vannar.png",
    link: "https://vannardesigns.com",
  },
  {
    id: 2,
    title: "Elopement Tracker for Children with Autism",
    description: "A real-time GPS tracking system using MERN stack and LoRaWAN.",
    image: "/images/elopement-tracker.jpg",
    link: "https://github.com/Maame-Yaa/tracker",
  },
  {
    id: 3,
    title: "Dayton Weekly News Website",
    description: "Built the Dayton Weekly News website, increasing traffic by 58%.",
    image: "/images/dwn-website.jpg",
    link: "https://daytonweeklyonline.com",
  },
  {
    id: 4,
    title: "6888 Kitchen Incubator Website",
    description: "Built a website improving engagement with strategic SEO optimization.",
    image: "/images/6888-incubator.jpg",
    link: "https://6888kitchen.org",
  },
  {
    id: 5,
    title: "Monarch Hills",
    description: "A professional website built for Monarch Hills GH.",
    image: "/images/monarch-hills.png",
    link: "https://www.monarchhillsgh.com",
  },
  {
    id: 6,
    title: "ACommunity App",
    description:
      "A networking app exclusively for Acity students to check grades, meal plans, transcripts, and share posts.",
    image: "/images/acommunity.png",
    link: "https://github.com/Maame-Yaa/sofftware-engineering/tree/master",
  }
];

const ProjectsPage = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p className="projects-description">
        A collection of web applications and digital solutions I've built. Swipe to explore my projects.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50} // Default for large screens
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="project-slider"
        breakpoints={{
          1024: { // Large screens
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: { // Tablets
            slidesPerView: 3,
            spaceBetween: 30,
          },
          480: { // Mobile screens
            slidesPerView: 4,
            spaceBetween: 1,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsPage;
