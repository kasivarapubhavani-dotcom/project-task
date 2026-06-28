import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you. Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={contact.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={contact.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={contact.phone}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message..."
          value={contact.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Our Office</h2>

        <p> Vijayawada, Andhra Pradesh</p>
        <p> +91 9876543210</p>
        <p> support@localservice.com</p>
      </div>
    </div>
  );
}

export default Contact;