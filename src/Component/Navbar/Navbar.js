import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="nav-items">
                        <li className="nav-link"><a href="http://127.0.0.1:8080/" rel="noopener noreferrer">Fitness Page</a></li>
                        <li className="nav-link">
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/login">
                                <img className="avatar" src="image/avatar.png" alt="Avatar" />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/home">
                    <img className="navbar-logo" src="image/logo.png" alt="Logo" />
                </Link>
            </div>
        );
    }
}

export default Navbar;
