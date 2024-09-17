import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-section resources">
                    Resources<br /><br />
                    Database<br /><br />
                    Exercises Calculator
                </div>
                <div className="footer-section country">
                    Country<br /><br />
                    United States<br /><br />
                    Viet Nam<br /><br />
                    Others
                </div>
                <div className="footer-section company">
                    Company<br /><br />
                    Contract<br /><br />
                    Blog
                </div>
                <div className="footer-section follow-us">
                    Follow Us
                </div>
                <img className="footer-logo" src="image/logo.png" alt="Logo" />
            </div>
        );
    }
}

export default Footer;
