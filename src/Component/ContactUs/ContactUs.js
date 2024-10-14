// src/ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <header>
                <h1>Contact Us</h1>
            </header>
            <section>
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your feedback, we're here to help.</p>
                
                <h2>Contact Information</h2>
                <ul>
                    <li><strong>Email:</strong> support@yourwebsite.com</li>
                    <li><strong>Phone:</strong> +123-456-7890</li>
                    <li><strong>Address:</strong> 123 Your Street, Your City, Your Country</li>
                </ul>
                
                <h2>Send Us a Message</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
