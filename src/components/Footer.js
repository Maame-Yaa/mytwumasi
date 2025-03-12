import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Maame Yaa Twumasi. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/Maame-Yaa" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/mytwumasi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="aatwumasi.myt@gmail.com">Email Me</a>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
