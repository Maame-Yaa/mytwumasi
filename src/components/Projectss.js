import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Projectss.css";

const projectImages = [
  "/images/6888-incubator.jpg",
  "/images/vannar.png",
  "/images/monarch-hills.png",
];

const Projectss = () => {
  return (
    <div id="projects">
      {/* Fixed Background Carousel */}
      <div className="background-fixed" id="projects">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="background-carousel"
        >
          {projectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scrolling Content with Overlay */}
      <section className="projects-section">
        <div className="overlay-content">
          <h2>View My Work</h2>
          <a href="/projects" className="cta-button">
            See Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projectss;
