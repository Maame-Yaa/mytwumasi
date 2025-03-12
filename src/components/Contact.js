import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [formSubmitted, setFormSubmitted] = useState(false); // Track submission
 
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     const formPayload = {  
       name: formData.name,
       email: formData.email,
       message: formData.message
     };
   
     try {
       const response = await fetch("http://localhost:5000/send", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formPayload),
       });
 
       const data = await response.json();
 
       if (data.success) {
         setFormSubmitted(true);  // Show success message
         setFormData({ name: "", email: "", message: "" });
 
         // Reset back to form after 5 seconds
         setTimeout(() => setFormSubmitted(false), 5000);
       } else {
         console.error("Error:", data.message);
       }
 
     } catch (error) {
       console.error("Error:", error);
       alert("Failed to send message");
     }
   };
  
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Let's connect! Feel free to reach out via this form or social media.</p>

        <motion.div 
          className="flip-container"
          // animate={{ rotateY: formSubmitted ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {!formSubmitted ? (
        <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
        <button type="submit">Send Message</button>
      </motion.form>
          ) : (
            <motion.div
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          )}
        </motion.div>

    </section>
  );
};

export default Contact;
