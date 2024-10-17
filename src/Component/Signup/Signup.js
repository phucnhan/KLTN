import React, { useState } from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { auth, db, createUserWithEmailAndPassword, doc, setDoc } from '../../firebase';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        if (password !== reenterPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Add user data to Firestore
            await setDoc(doc(db, "auth", user.uid), {
                uid: user.uid,
                username: username,
                email: email,
                createdAt: new Date()
            });

            setMessage('User registered successfully');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setMessage('This email is already in use. Please log in instead.');
            } else {
                setMessage('Error registering user: ' + error.message);
            }
        }
    };

    return (
        <div className="signup-container">
            <Navbar />
            <div className="form-container">
                <div className="label-username">Username</div>
                <div className="input-field input-field-username">
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

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

                <div className="label-reenter">Re-enter password</div>
                <div className="input-field input-field-reenter">
                    <input 
                        type="password" 
                        placeholder="Re-enter your password" 
                        value={reenterPassword}
                        onChange={(e) => setReenterPassword(e.target.value)}
                    />
                </div>

                <div className="sign-up-button" onClick={handleSignup}>
                    <div className="sign-up-button-text">Sign up</div>
                </div>
                {message && <div className="message">{message}</div>}
                <div>
                    <Link to="/login">Already have an account? Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
