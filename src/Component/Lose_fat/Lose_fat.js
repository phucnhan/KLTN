import React from "react";
import "./Lose_fat.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Lose_fat extends React.Component {
    render() {
        return (
            <div className="lose-fat-container">
                <Navbar />
                <div className="progress-bar">
                    <div className="progress-segment"></div>
                    <div className="progress-segment"></div>
                    <div className="progress-segment"></div>
                    <div className="progress-segment"></div>
                    <div className="progress-segment active"></div>
                </div>
                <div className="back-button">Back</div>
                <h2 className="target-weight-title">Target weight</h2>
                <div className="info-box">
                    <img src="https://via.placeholder.com/100x100" alt="weight icon" />
                </div>
                <div className="info-box recommended">
                    <img src="https://via.placeholder.com/100x100" alt="recommended icon" />
                    <div className="recommended-text">Recommended</div>
                    <img src="https://via.placeholder.com/40x40" alt="check icon" />
                </div>
                <div className="continue-button">Continue</div>
                <div className="description">
                    (it should be less than your current weight because you have selected the “lose fat” option).
                    <br /> According to the BMI scale, your normal weight range would be between 57 to 77 kg.
                </div>
                <div className="benefits">
                    ✔️ Optimal muscle mass and weight gain
                    <br /> ✔️ Visible results in the short term
                    <br /> ✔️ Sustainable diet
                </div>
                <Footer />
            </div>
        );
    }
}

export default Lose_fat;
