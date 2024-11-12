import React from 'react';
import './About.css';
import contactImage from '../Assests/Aboutus.jpeg'; // Replace with your actual image path

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>About Us</h2>
        <p className="contact-description">
        Welcome to One Stop, your ultimate online shopping destination where convenience meets style! At One Stop, we understand that shopping should be an enjoyable experience, which is why we've created a user-friendly platform that offers a diverse range of high-quality products for everyone. From the latest fashion trends and stylish apparel to essential home goods and unique gifts, our extensive collection is thoughtfully curated to meet all your needs.
    
        </p>
        <p className="contact-description">
        Join us at One Stop as we redefine the online shopping experience, making it easy and enjoyable for you to find exactly what you’re looking for—all in one place! Discover why thousands of satisfied customers trust us for their shopping needs and embark on a journey of style, quality, and exceptional service today!
        </p>
        
      </div>
      <div className="contact-right">
        <img src={contactImage} alt="Contact Us" style={{ width: '1120px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Contact;