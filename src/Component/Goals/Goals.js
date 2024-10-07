import React from "react";
import "./Goals.css"; // External CSS
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

class Goals extends React.Component {
    render() {
        return (
            <div className="goals-container">
                <Navbar />
                <div className="goaltextbox">
                    <h1 classname="textGoals">What is your goal?</h1>
                </div>
                {/* Lose Fat Goal */}
                <div className="goalItemlosefat">
                    <div className="goalBox loseFat"></div>
                    <div className="goalContent">
                        <Link to="/activityLevel">
                            <div className="goalText loseFatText">Lose Fat</div>
                            <div className="descriptionGoalText loseFatDescription">Effective weight loss, shine with confidence.</div>
                            <img className="goals-icon" src="image/goalsimg/losefat1.png" alt="Lose Fat icon" />
                        </Link>
                    </div>
                </div>

                {/* Maintain Weight Goal */}
                <div className="goalItem">
                    <div className="goalBox maintainWeight"></div>
                    <div className="goalContent">
                        <Link to="/activityLevel">
                            <div className="goalText maintainWeightText">Maintain weight</div>
                            <div className="descriptionGoalText maintainWeightDescription">Firm body, clear lines.</div>
                            <img className="goals-icon" src="image/goalsimg/maintainw1.png" alt="Maintain Weight icon" />
                        </Link>
                    </div>
                </div>

                {/* Muscle Gain Goal */}
                <div className="goalItem">
                    <div className="goalBox muscleGain"></div>
                    <div className="goalContent">
                        <Link to="/activityLevel">
                            <div className="goalText muscleGainText">Muscle gain</div>
                            <div className="descriptionGoalText muscleGainDescription">Keep slim, full of energy.</div>
                            <img className="goals-icon" src="image/goalsimg/musclegain1.png" alt="Muscle Gain icon" />
                        </Link>
                    </div>
                </div>
                <Link to="/firstinfor">
                <div className="backText">Back</div>
                </Link>
            </div>
        );
    }
}

export default Goals;
