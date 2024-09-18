import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
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
    }
}

export default Footer;
