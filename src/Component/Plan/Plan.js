import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Plan.css";

const Plan = () => {
    const [nutritionPlans, setNutritionPlans] = useState([]);
    const [activeDay, setActiveDay] = useState(null); // Lưu trạng thái của ngày được chọn
    const [uid, setUid] = useState("");

    useEffect(() => {
        const storedUid = localStorage.getItem("userUID");
        if (storedUid) {
            setUid(storedUid);
            fetchNutritionPlans(storedUid);
        } else {
            alert("User ID not found! Please log in again.");
        }
    }, []);

    const fetchNutritionPlans = async (uid) => {
        try {
            const response = await fetch(`http://127.0.0.1:5001/api/user-data/${uid}/nutritionPlans`);
            if (!response.ok) {
                throw new Error(`Error fetching nutrition plans: ${response.status}`);
            }

            const data = await response.json();
            setNutritionPlans(data.plans || []);
        } catch (error) {
            console.error("Error fetching nutrition plans:", error);
            alert("Error fetching nutrition plans! Check the console for details.");
        }
    };

    const handleToggleDay = (index) => {
        setActiveDay(activeDay === index ? null : index); // Mở/đóng chi tiết của ngày
    };

    return (
        <div className="plan-container">
            <Navbar />
            <h1>Your Nutrition Plans</h1>
            {nutritionPlans.length > 0 ? (
                nutritionPlans.map((plan, index) => (
                    <div key={index} className="plan-day">
                        <div
                            className="plan-day-header"
                            onClick={() => handleToggleDay(index)}
                        >
                            Day {index + 1}
                        </div>
                        {activeDay === index && ( // Hiển thị chi tiết chỉ khi ngày được chọn
                            <div className="plan-day-details">
                                <p>Calories: {plan.calories}</p>
                                <p>Carbs: {plan.carbs}g</p>
                                <p>Protein: {plan.protein}g</p>
                                <p>Fat: {plan.fat}g</p>
                                <ul>
                                    {plan.foods.map((food, i) => (
                                        <li key={i}>
                                            {food.food} - {food.portion}g
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No plans found!</p>
            )}
        </div>
    );
};

export default Plan;
