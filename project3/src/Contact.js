import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css"
import { Typography,Grid } from "@mui/material";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }
    
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!message) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      console.log("Form submitted", { name, email, message });
      
      
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Grid>
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? "error" : ""}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></Grid>
  );
}

export default Contact;
