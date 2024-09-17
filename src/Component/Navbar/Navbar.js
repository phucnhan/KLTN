import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-item login">Login</div>
                <div className="navbar-item contact">Contact</div>
                <div className="navbar-item about-us">About Us</div>
                <img className="logo" src="image/logo.png" alt="Logo" />
            </div>
        );
    }
}

export default Navbar;
