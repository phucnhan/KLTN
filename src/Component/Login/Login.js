import React, { useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('User logged in successfully');
            navigate('/home'); // Redirect to homepage
        } catch (error) {
            setMessage('Error logging in: ' + error.message);
        }
    };

    return (
        <div className="login-container">
            <Navbar />
            <div className="form-container">
                <div className="label-email">Email</div>
                <div className="input-field input-field-email">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="label-password">Password</div>
                <div className="input-field input-field-password">
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="login-button" onClick={handleLogin}>
                    <div className="login-button-text">Login</div>
                </div>
                {message && <div className="message">{message}</div>}
                <div>
                    <Link to="/signup">Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
