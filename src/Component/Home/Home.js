import React from "react";
import "./Home.css";  // Import CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
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
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
