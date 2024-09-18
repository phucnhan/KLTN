import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <Link to="/">
                    <img className="navbar-logo" src="image/logo.png" alt="Logo" />
                </Link>
                <nav className="navbar">
                    <ul className="nav-items">
                        <li className="nav-link">
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
