import React from "react";
import "./LoseFat.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

class LoseFat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Recommended",
            targetWeight: ""
        };
    }

    handleOptionChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }

    handleWeightChange = (event) => {
        this.setState({ targetWeight: event.target.value });
    }

    render() {
        return (
            <div className="lose-fat-wrapper">
                <Navbar />
                <div className="lose-fat-container">
                    <h2 className="target-weight-title">Target weight</h2>
                    <div className="info-box">
                        <input
                            type="text"
                            value={this.state.targetWeight}
                            onChange={this.handleWeightChange}
                            placeholder="Enter target weight in kg"
                            className="weight-input"
                        />
                    </div>

                    <div className="description">
                        (It should be less than your current weight because you have selected the “lose fat” option).
                        <br /> According to the BMI scale, your normal weight range would be between 57 to 77 kg.
                    </div>
                    
                    <h2 className="desired-time-title">Desired Time</h2>
                    {/* Selection Box for Weight Loss Options */}
                    <div className="time-selection-box">
                        <label>
                            <input
                                type="radio"
                                value="Recommended"
                                checked={this.state.selectedOption === "Recommended"}
                                onChange={this.handleOptionChange}
                            />
                            Recommended
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Slow"
                                checked={this.state.selectedOption === "Slow"}
                                onChange={this.handleOptionChange}
                            />
                            Slow
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Fast"
                                checked={this.state.selectedOption === "Fast"}
                                onChange={this.handleOptionChange}
                            />
                            Fast
                        </label>
                    </div>

                    <div className="benefits">
                        ✔️ Optimal muscle mass and weight gain
                        <br /> ✔️ Visible results in the short term
                        <br /> ✔️ Sustainable diet
                    </div>

                    <div className="back-button">
                        <Link to="/food">Back</Link>
                    </div>

                    <div className="continue-button">
                        <Link to="/nextcreate">Continue</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoseFat;
