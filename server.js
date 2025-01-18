require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Configuration de Nodemailer
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Nodemailer error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Route pour le formulaire de contact
app.post("/contact", (req, res) => {
  const { firstName, email, phone, subject, message } = req.body;
  const mail = {
    from: firstName,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Error sending email" });
    } else {
      console.log("Email sent successfully");
      res.status(200).json({ code: 200, status: "Message sent successfully" });
    }
  });
});

// Middleware pour servir le frontend (React)
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
