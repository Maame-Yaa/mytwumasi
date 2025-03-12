import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formPayload = {  // Avoid redeclaring formData
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
  
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayload),  // Use formPayload instead
      });
  
      const data = await response.json();
      alert(data.message);
  
      setFormData({ name: "", email: "", message: "" });  // Reset form
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
};
  
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Let's connect! Feel free to reach out via this form or social media.</p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </motion.form>

        <div className="contact-details">
          <p>Email: <a href="mailto:aatwumasi.myt@gmail.com">aatwumasi.myt@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/mytwumasi" target="_blank" rel="noopener noreferrer">My Profile</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
