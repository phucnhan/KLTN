import React, { useEffect, useState } from "react";
import "./Goals.css"; // External CSS
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, doc, updateDoc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

const Goals = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/login'); // Redirect to login if not authenticated
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleGoalSelection = async (goal) => {
        if (!user) {
            alert("User not authenticated");
            return;
        }

        try {
            const userDocRef = doc(db, "users", user.uid);
            await updateDoc(userDocRef, { goal });
            console.log("Goal updated: ", goal);
            navigate('/activityLevel'); // Redirect to the next page
        } catch (error) {
            console.error("Error updating goal: ", error);
        }
    };

    return (
        <div className="goals-container">
            <Navbar />
            <div className="goaltextbox">
                <h1 className="textGoals">What is your goal?</h1>
            </div>
            {/* Lose Fat Goal */}
            <div className="goalItemlosefat" onClick={() => handleGoalSelection('loseFat')}>
                <div className="goalBox loseFat"></div>
                <div className="goalContent">
                    <div className="goalText loseFatText">Lose Fat</div>
                    <div className="descriptionGoalText loseFatDescription">Effective weight loss, shine with confidence.</div>
                    <img className="goals-icon" src="image/goalsimg/losefat1.png" alt="Lose Fat icon" />
                </div>
            </div>

            {/* Maintain Weight Goal */}
            <div className="goalItem" onClick={() => handleGoalSelection('maintainWeight')}>
                <div className="goalBox maintainWeight"></div>
                <div className="goalContent">
                    <div className="goalText maintainWeightText">Maintain weight</div>
                    <div className="descriptionGoalText maintainWeightDescription">Firm body, clear lines.</div>
                    <img className="goals-icon" src="image/goalsimg/maintainw1.png" alt="Maintain Weight icon" />
                </div>
            </div>

            {/* Muscle Gain Goal */}
            <div className="goalItem" onClick={() => handleGoalSelection('muscleGain')}>
                <div className="goalBox muscleGain"></div>
                <div className="goalContent">
                    <div className="goalText muscleGainText">Muscle gain</div>
                    <div className="descriptionGoalText muscleGainDescription">Keep slim, full of energy.</div>
                    <img className="goals-icon" src="image/goalsimg/musclegain1.png" alt="Muscle Gain icon" />
                </div>
            </div>
            <Link to="/firstinfor">
                <div className="backText">Back</div>
            </Link>
        </div>
    );
};

export default Goals;
