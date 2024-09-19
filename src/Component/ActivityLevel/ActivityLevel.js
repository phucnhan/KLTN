import React from "react";
import "./ActivityLevel.css"; // External CSS
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

class ActivityLevel extends React.Component {
    render() {
        return (
            <div className="activelevel-container">
                <Navbar />
                <div className="activityLeveltextbox">
                    <h1 classname="textactivelevel">What is your physical activity level?</h1>
                </div>
                <div className="activityLevelItem">
                    <div className="activityLevelBox Sedentary"></div>
                    <div className="activityLevelContent">
                        <Link to="/food">
                            <h3 className="activityLevelText SedentaryText">Sedentary</h3>
                            <div className="descriptionText SedentaryDescription">No or little exercise.</div>
                        </Link>
                    </div>
                </div>
                <div className="activityLevelItem">
                    <div className="activityLevelBox Light"></div>
                    <div className="activityLevelContent">
                        <Link to="/food">
                            <h3 className="activityLevelText LightText">Light</h3>
                            <div className="descriptionText LightDescription">Exercise 2-3 days per week.</div>
                        </Link>
                    </div>
                </div>
                <div className="activityLevelItem">
                    <div className="activityLevelBox Moderate"></div>
                    <div className="activityLevelContent">
                        <Link to="/food">
                            <h3 className="activityLevelText ModerateText">Moderate</h3>
                            <div className="descriptionText ModerateDescription">Exercise 4-5 days per week.</div>
                        </Link>
                    </div>
                </div>
                
                <div className="activityLevelItem">
                    <div className="activityLevelBox High"></div>
                    <div className="activityLevelContent">
                        <Link to="/food">
                            <h3 className="activityLevelText HighText">High</h3>
                            <div className="descriptionText HighDescription">Exercise 6-7 days per week.</div>
                        </Link>
                    </div>
                </div>
                <div className="activityLevelItem">
                    <div className="activityLevelBox Athlete"></div>
                    <div className="activityLevelContent">
                        <Link to="/food">
                            <h3 className="activityLevelText AthleteText">Athlete</h3>
                            <div className="descriptionText AthleteDescription">Intense exercise 6-7 days per week.</div>
                        </Link>
                    </div>
                </div>
                <Link to="/goals">
                <div className="backText">Back</div>
                </Link>
            </div>
        );
    }
}

export default ActivityLevel;
