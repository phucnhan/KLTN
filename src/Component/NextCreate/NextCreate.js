//Buoc 5 next create
import React from "react";
import "./NextCreate.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

class NextCreate extends React.Component {
    render() {
        return (
            <div className="nextcreate-container">
                <Navbar />

                <div className="nextcreatetextbox">
                    <h1 classname="nextcreateGoals">Create your account to ...</h1>
                </div>


                <div className="nextcreate1">
                
                    <div className="nextcreateContent">
                            <div className="descriptionText">Find out your calories and macronutrients for free.</div>
                            <img className="goals-icon" src="image/goalsimg/losefat1.png" alt="" />
                    </div>
                </div>


                <div className="nextcreate">
                    <div className="nextcreateContent">
                            <div className="descriptionText">Get a meal plan.</div>
                            <img className="goals-icon" src="image/goalsimg/maintainw1.png" alt="" />
                    </div>
                </div>


                <div className="nextcreate">
                    <div className="nextcreateContent">
                            <div className="descriptionText">Get a workout plan.</div>
                            <img className="goals-icon" src="image/goalsimg/musclegain1.png" alt="" />
                    </div>
                </div>


                <Link to="/plan">
                <div className="backText">Continue</div>
                </Link>
            </div>
        );
    }
}


export default NextCreate;
