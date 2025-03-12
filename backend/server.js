require("dotenv").config(); // Ensure this is at the very top
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Display sender's name but use your email
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Site Message from ${name}`,
        text: `${message}`,
        replyTo: email, // Ensures reply goes to sender
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");  // Debugging
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending failed:", error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
