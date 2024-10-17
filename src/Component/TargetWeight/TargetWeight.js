import React, { useEffect, useState } from "react";
import "./TargetWeight.css"; // External CSS
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, doc, updateDoc, getDoc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

const TargetWeight = () => {
    const [user, setUser] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Recommended");
    const [targetWeight, setTargetWeight] = useState("");
    const [goal, setGoal] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                fetchGoalAndTargetWeight(currentUser.uid);
            } else {
                navigate('/login'); // Redirect to login if not authenticated
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const fetchGoalAndTargetWeight = async (uid) => {
        const userDocRef = doc(db, 'usersdata', uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setGoal(data.goal);
            if (data.goal === 'maintainWeight') {
                setTargetWeight("Your weight will remain the same.");
            } else {
                const targetWeightDoc = doc(db, 'targetWeights', uid);
                const targetWeightSnap = await getDoc(targetWeightDoc);
                if (targetWeightSnap.exists()) {
                    const targetData = targetWeightSnap.data();
                    setTargetWeight(targetData.targetWeight);
                    setSelectedOption(targetData.selectedOption);
                }
            }
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleWeightChange = (event) => {
        setTargetWeight(event.target.value);
    };

    const handleSave = async () => {
        if (!user) {
            alert("User not authenticated");
            return;
        }

        const targetWeightDoc = doc(db, 'usersdata', user.uid);

        try {
            await updateDoc(targetWeightDoc, {
                targetWeight: parseFloat(targetWeight),
                selectedOption
            });
            console.log("Target weight updated!");
            navigate('/nextcreate'); // Redirect to the next page
        } catch (error) {
            console.error("Error saving target weight: ", error.message);
            alert("An error occurred: " + error.message);
        }
    };

    return (
        <div className="target-weight-wrapper">
            <Navbar />
            <div className="target-weight-container">
                <h2 className="target-weight-title">Target weight</h2>
                <div className="info-box">
                    <input
                        type="text"
                        value={targetWeight}
                        onChange={handleWeightChange}
                        placeholder="Enter target weight in kg"
                        className="weight-input"
                        disabled={goal === 'maintainWeight'}
                    />
                </div>

                {goal === 'maintainWeight' && (
                    <div className="description">
                        Your weight will remain the same.
                    </div>
                )}

                <h2 className="session-lenght-title">Session Length</h2>
                <div className="time-selection-box">
                    <label>
                        <input
                            type="radio"
                            value="Recommended"
                            checked={selectedOption === "Recommended"}
                            onChange={handleOptionChange}
                        />
                        Recommended
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Slow"
                            checked={selectedOption === "Slow"}
                            onChange={handleOptionChange}
                        />
                        Slow
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Fast"
                            checked={selectedOption === "Fast"}
                            onChange={handleOptionChange}
                        />
                        Fast
                    </label>
                </div>

                <div className="benefits">
                    ✔️ Optimal muscle mass and weight gain
                    <br /> ✔️ Visible results in the short term
                    <br /> ✔️ Sustainable diet
                </div>

                <button className="back-button">
                    <Link to="/food">Back</Link>
                </button>

                <button className="continue-button" onClick={handleSave}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default TargetWeight;
