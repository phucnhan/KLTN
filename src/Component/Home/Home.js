import React from "react";
import "./Home.css";  // Import CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div><Navbar /></div>

                <div className="home-container">
                    <div className="submit-button">
                        <div className="submit-text">SUBMIT</div>
                    </div>
                    <div className="email-box"></div>
                    <div className="email-text">Enter your email</div>
                    <div className="feedback-box"></div>
                    <div className="feedback-text">Enter your feedback</div>
                    <img className="image1" src="image/home1.png" alt="Home 1" />
                    <img className="image2" src="image/home2.png" alt="Home 2" />
                    <img className="image3" src="image/home3.png" alt="Home 3" />
                    <div className="start-now-button">
                        <div className="start-now-text">Start now</div>
                    </div>
                    <div className="description-text">
                        Personalized workout plan to achieve your desired body shape 💪 ,<br />
                        Personalized nutrition plan for optimal health 🎯<br />
                        Get started with us now and unlock your full potential!
                    </div>
                    <div className="headline-text">
                        Right nutrition, right training, real results
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Home;
