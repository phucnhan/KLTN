import React from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Signup extends React.Component {
    render() {
        return (
            <div className="signup-container">
                <Navbar/>
                <div className="back-button">Back</div>
                <div className="sign-up-button">
                    <div className="sign-up-button-text">Sign up</div>
                </div>
                <div className="input-field input-field-username"></div>
                <div className="input-field input-field-password"></div>
                <div className="input-field input-field-reenter"></div>
                <div className="label-username">Username</div>
                <div className="label-password">Password</div>
                <div className="label-reenter">Re-enter password</div>
                <Footer />
            </div>
        );
    }
}

export default Signup;
