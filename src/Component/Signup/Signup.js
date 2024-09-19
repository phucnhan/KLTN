import React from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    render() {
        return (
            <div className="signup-container">
                <Navbar />
                <div className="form-container">
                    <div className="label-username">Username</div>
                    <div className="input-field input-field-username">
                        <input type="text" placeholder="Enter your username" />
                    </div>

                    <div className="label-password">Password</div>
                    <div className="input-field input-field-password">
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <div className="label-reenter">Re-enter password</div>
                    <div className="input-field input-field-reenter">
                        <input type="password" placeholder="Re-enter your password" />
                    </div>

                    <div className="sign-up-button">
                        <div className="sign-up-button-text">Sign up</div>
                    </div>
                    <div>
                        <Link to="/login">Already have account</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Signup;
