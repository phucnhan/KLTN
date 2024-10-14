import React, { useEffect, useState } from "react";
import "./Home.css";  // Import CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { auth, signOut } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User:", currentUser); // Kiểm tra trạng thái người dùng
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/login'); // Chuyển hướng đến trang đăng nhập nếu không đăng nhập
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('User logged out successfully');
            navigate('/login'); // Chuyển hướng đến trang đăng nhập
        } catch (error) {
            alert('Error logging out: ' + error.message);
        }
    };

    return (
        <div>
            <div className="homepage-container">
                <Navbar />
                <div className="homepage-description-text">
                    Personalized workout plan to achieve your desired body shape 💪 ,<br />
                    Personalized nutrition plan for optimal health 🎯<br />
                    Get started with us now and unlock your full potential!
                </div>
                <div className="homepage-headline-text">
                    Right nutrition, right training, real results
                </div>
                <div className="homepage-start-now-button">
                    <div className="homepage-start-now-text">
                        <Link to="/firstinfor">Start now</Link>
                    </div>
                </div>
                <img className="homepage-image1" src="image/home1.png" alt="Home 1" />
                <img className="homepage-image2" src="image/home2.png" alt="Home 2" />
                <img className="homepage-image3" src="image/home3.png" alt="Home 3" />
                <div className="homepage-email-box">
                    <input type="text" id="email-subscribe" placeholder="Enter your email..." />
                </div>
                <div className="homepage-feedback-box">
                    <input type="text" id="feedback" placeholder="Enter your feedback..." />
                </div>
                <div className="homepage-submit-button">
                    <div className="homepage-submit-text">SUBMIT</div>
                </div>
                {user && (
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                )}
                <Footer />
            </div>
        </div>
    );
};

export default Home;
