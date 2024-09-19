import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function kiểm tra nếu người dùng đã cuộn đến cuối trang
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        // Nếu người dùng đã cuộn đến cuối trang, hiển thị footer
        if (windowHeight + scrollTop >= fullHeight - 10) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Sử dụng useEffect để gắn và gỡ bỏ sự kiện scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`footer-container ${isVisible ? "show" : "hide"}`}>
            <img className="footer-logo" src="image/logo.png" alt="Logo" />
            <div className="footer-section resources">
                <p>Resources</p>
                <p>Database</p>
                <p>Exercises Calculator</p>
            </div>
            <div className="footer-section country">
                <p>Country</p>
                <p>United States</p>
                <p>Viet Nam</p>
                <p>Others</p>
            </div>
            <div className="footer-section company">
                <p>Company</p>
                <p>Contract</p>
                <p>Blog</p>
            </div>
            <div className="footer-section follow-us">
                <p>Follow Us</p>
            </div>
        </div>
    );
};

export default Footer;
