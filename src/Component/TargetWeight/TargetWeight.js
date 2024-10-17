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
                setTargetWeight(data.weight); // Set to initial weight
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
        const weightValue = parseFloat(event.target.value);
        if (!isNaN(weightValue)) {
            setTargetWeight(weightValue);
        } else {
            setTargetWeight(""); // Reset if input is not a valid number
        }
    };

    const handleSave = async () => {
        if (!user) {
            alert("User not authenticated");
            return;
        }

        // Fetch the initial weight from the user's data
        const userDocRef = doc(db, 'usersdata', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const initialWeight = userData.weight; // Assuming 'weight' is stored in the user's data

            // Automatically set target weight to initial weight if goal is 'maintainWeight'
            let updatedTargetWeight = targetWeight;
            if (goal === 'maintainWeight') {
                updatedTargetWeight = initialWeight;
                setTargetWeight(initialWeight); // Update the state to reflect the change
            }

            // Check if the goal is 'loseFat' and validate the target weight
            if (goal === 'loseFat' && parseFloat(updatedTargetWeight) >= initialWeight) {
                alert("Target weight must be less than your initial weight for the 'loseFat' goal.");
                return;
            }

            // Check if the goal is 'muscleGain' and validate the target weight
            if (goal === 'muscleGain' && parseFloat(updatedTargetWeight) <= initialWeight) {
                alert("Target weight must be greater than your initial weight for the 'muscleGain' goal.");
                return;
            }

            const targetWeightDoc = doc(db, 'usersdata', user.uid);

            try {
                // Ensure targetWeight is updated in Firebase as a number
                await updateDoc(targetWeightDoc, {
                    targetWeight: parseFloat(updatedTargetWeight), // Store as number
                    selectedOption
                });
                console.log("Target weight updated!");
                navigate('/nextcreate'); // Redirect to the next page
            } catch (error) {
                console.error("Error saving target weight: ", error.message);
                alert("An error occurred: " + error.message);
            }
        }
    };

    return (
        <div className="target-weight-wrapper">
            <Navbar />
            <div className="target-weight-container">
                <h2 className="target-weight-title">Target weight</h2>
                <div className="info-box">
                    <input
                        type="number" // Change input type to number
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
