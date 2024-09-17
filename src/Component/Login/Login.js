import React from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


class Login extends React.Component {
    render() {
        return (
         
            <div className="container">
            <Navbar/>
            <div className="back-button">Back</div>
            <div className="login-button">
              <div>Login</div>
            </div>
            <div className="input-box username"></div>
            <div className="input-box password"></div>
            <div className="label username-label">Username</div>
            <div className="label password-label">Password</div>
            <Footer />
          </div>
          
        );
    }
}

export default Login;



