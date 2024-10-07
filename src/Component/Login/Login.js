import React, { useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Logging in with Username: ${username}, Password: ${password}`);
        // Logic xử lý đăng nhập ở đây
    };

    return (
        <div className="login-container">
            <Navbar />
            <div className="login-form">
                <div className="input-box username">
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-box password">
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="label username-label">Username</div>
                <div className="label password-label">Password</div>
                <div className="login-button" onClick={handleLogin}>
                    <div>Login</div>
                </div>
                <div>
                <Link to="/signup">Create new account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
