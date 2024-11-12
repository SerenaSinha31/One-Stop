import React from 'react';
import './Contact.css';
import contactImage from '../Assests/contactUs.jpeg'; // Replace with your actual image path

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p className="contact-description">
          We’d love to hear from you! If you have any questions, feedback, or just want to chat, feel free to reach out. 
          At One Stop Shop, we believe in building strong relationships with our customers. Whether you're looking for assistance with 
          an order, have a suggestion for us, or simply want to share your thoughts about our products, we’re here to listen.
        </p>
        <p className="contact-description">
          Our dedicated customer service team is available to ensure you have a smooth shopping experience. 
          We value your opinions and are committed to providing you with the best service possible. Please do not hesitate to contact us 
          via the information below or fill out the contact form on our website. 
          We typically respond within 24 hours, and we appreciate your patience.
        </p>
        <p>
          <strong>Email:</strong> contact@onestopshop.com
        </p>
        <p>
          <strong>Phone:</strong> +91 8765432189
        </p>
        <p>
          <strong>Address:</strong> 123 One Stop 32Smart Street, Mumbai, India
        </p>
      </div>
      <div className="contact-right">
        <img src={contactImage} alt="Contact Us" style={{ width: '1120px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Contact;

