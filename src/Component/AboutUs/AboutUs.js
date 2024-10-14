// src/AboutUs.js
import React, { useEffect } from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
    useEffect(() => {
        const handleScroll = () => {
            const backToTopBtn = document.getElementById("backToTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        window.onscroll = handleScroll;

        return () => {
            window.onscroll = null;
        };
    }, []);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="about-us-container">
            <Navbar />
            <div className="about-us">
                <header>
                    <h1>About Us</h1>
                </header>
                <section>
                    <h2>Welcome to F&N</h2>
                    <p>Your ultimate destination for personalized nutrition and fitness solutions. Our mission is to empower you to achieve your health and wellness goals through tailored plans that fit your unique lifestyle.</p>

                    <h2>Who We Are</h2>
                    <p>At F&N, we are a team of passionate nutritionists, fitness experts, and wellness enthusiasts dedicated to helping you live your healthiest life. We believe that everyone deserves access to personalized health guidance, and we are here to provide just that.</p>

                    <h2>Our Approach</h2>
                    <p>We understand that no two individuals are the same, which is why we offer customized nutrition and fitness plans designed to meet your specific needs. Whether you're looking to lose weight, build muscle, improve your diet, or simply lead a healthier lifestyle, we have the tools and expertise to help you succeed.</p>

                    <h2>Why Choose Us</h2>
                    <ul>
                        <li><strong>Personalized Plans:</strong> Our programs are tailored to your individual goals, preferences, and lifestyle.</li>
                        <li><strong>Expert Guidance:</strong> Our team of certified professionals is here to support you every step of the way.</li>
                        <li><strong>Comprehensive Resources:</strong> From meal plans and workout routines to wellness tips and recipes, we provide everything you need to stay on track.</li>
                        <li><strong>Community Support:</strong> Join a community of like-minded individuals who are on the same journey towards better health.</li>
                    </ul>

                    <h2>Our Mission</h2>
                    <p>Our mission is to make healthy living accessible and enjoyable for everyone. We are committed to providing high-quality, evidence-based advice and support to help you achieve lasting results.</p>

                    <h2>Get Started Today</h2>
                    <p>Ready to take the first step towards a healthier you? Join [Your Website Name] today and start your journey with us. Together, we can achieve your health and fitness goals.</p>
                </section>
                <button id="backToTopBtn" onClick={scrollToTop}>Back to Top</button>
            </div>
        </div>
    );
};

export default AboutUs;
