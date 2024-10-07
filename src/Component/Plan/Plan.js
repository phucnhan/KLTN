import React from "react";
import "./Plan.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

class Plan extends React.Component {
    render() {
        return (
            <div>
            <div className="plan-container">
                <Navbar />

                <div className="plantextbox">
                    <h1 classname="planGoals">Your plan will be created as follows</h1>
                </div>


                <div className="plan1">
                
                    <div className="planContent">
                            <div className="descriptionText">Goal weight.</div>
                            <img className="goals-icon" src="image/plan/plan1.png" alt="" />
                            <div className="ResultText">.......kg </div>
                    </div>
                </div>


                <div className="plan">
                    <div className="planContent">
                            <div className="descriptionText">Calories to maintain my weight.</div>
                            <img className="goals-icon" src="image/plan/plan2.png" alt="" />
                            <div className="ResultText">.......kcal </div>
                    </div>
                </div>


                <div className="plan">
                    <div className="planContent">
                            <div className="descriptionText">Calories to gain muscle.</div>
                            <img className="goals-icon" src="image/plan/plan3.png" alt="" />
                            <div className="ResultText">.......kcal </div>
                    </div>
                </div>


                <div className="plan">
                    <div className="planContent">
                            <div className="descriptionText">Macronutrients.</div>
                            <img className="goals-icon" src="image/plan/plan4.png" alt="" />
                            <div className="ResultText">Protein: ... %</div>
                            <div className="ResultText">Carbs:....%</div>
                            <div className="ResultText">Fat:... % </div>
                    </div>
                </div>
                
            </div>
            <div className="receive-button-container">
                    <button className="receive-button">
                        <Link to="/">Receive</Link>            
                    </button>
                </div>
            </div>
        );
    }
}
export default Plan;
