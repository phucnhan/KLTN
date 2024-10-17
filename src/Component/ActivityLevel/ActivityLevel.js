import React, { useEffect, useState } from "react";
import "./ActivityLevel.css"; // External CSS
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, doc, updateDoc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

const ActivityLevel = () => {
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

    const handleActivityLevelSelection = async (activityLevel) => {
        if (!user) {
            alert("User not authenticated");
            return;
        }

        try {
            const userDocRef = doc(db, "usersdata", user.uid);
            await updateDoc(userDocRef, { activityLevel });
            console.log("Activity level updated: ", activityLevel);
            navigate('/food'); // Redirect to the next page
        } catch (error) {
            console.error("Error updating activity level: ", error);
        }
    };

    return (
        <div className="activelevel-container">
            <Navbar />
            <div className="activityLeveltextbox">
                <h1 className="textactivelevel">What is your physical activity level?</h1>
            </div>
            <div className="activityLevelItem" onClick={() => handleActivityLevelSelection('Sedentary')}>
                <div className="activityLevelBox Sedentary"></div>
                <div className="activityLevelContent">
                    <h3 className="activityLevelText SedentaryText">Sedentary</h3>
                    <div className="descriptionALText SedentaryDescription">No or little exercise.</div>
                </div>
            </div>
            <div className="activityLevelItem" onClick={() => handleActivityLevelSelection('Light')}>
                <div className="activityLevelBox Light"></div>
                <div className="activityLevelContent">
                    <h3 className="activityLevelText LightText">Light</h3>
                    <div className="descriptionALText LightDescription">Exercise 2-3 days per week.</div>
                </div>
            </div>
            <div className="activityLevelItem" onClick={() => handleActivityLevelSelection('Moderate')}>
                <div className="activityLevelBox Moderate"></div>
                <div className="activityLevelContent">
                    <h3 className="activityLevelText ModerateText">Moderate</h3>
                    <div className="descriptionALText ModerateDescription">Exercise 4-5 days per week.</div>
                </div>
            </div>
            <div className="activityLevelItem" onClick={() => handleActivityLevelSelection('High')}>
                <div className="activityLevelBox High"></div>
                <div className="activityLevelContent">
                    <h3 className="activityLevelText HighText">High</h3>
                    <div className="descriptionALText HighDescription">Exercise 6-7 days per week.</div>
                </div>
            </div>
            <div className="activityLevelItem" onClick={() => handleActivityLevelSelection('Athlete')}>
                <div className="activityLevelBox Athlete"></div>
                <div className="activityLevelContent">
                    <h3 className="activityLevelText AthleteText">Athlete</h3>
                    <div className="descriptionALText AthleteDescription">Intense exercise 6-7 days per week.</div>
                </div>
            </div>
            <Link to="/goals">
                <div className="backText">Back</div>
            </Link>
        </div>
    );
};

export default ActivityLevel;
