import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Plan.css";

const Plan = () => {
  const [nutritionPlans, setNutritionPlans] = useState([]);
  const [uid, setUid] = useState("");

  // Get UID from localStorage
  useEffect(() => {
    const storedUid = localStorage.getItem("userUID");
    if (storedUid) {
      setUid(storedUid);
      fetchNutritionPlans(storedUid);
    } else {
      alert("User ID not found! Please log in again.");
    }
  }, []);

  // Fetch Nutrition Plans
  const fetchNutritionPlans = async (uid) => {
    try {
      const response = await fetch(`http://127.0.0.1:5001/api/user-data/${uid}/nutritionPlans`);
      if (!response.ok) {
        throw new Error(`Error fetching nutrition plans: ${response.status}`);
      }

      const data = await response.json();
      console.log("Nutrition Plans:", data.plans); // Kiểm tra log
      setNutritionPlans(data.plans); // Sử dụng data.plans từ API
    } catch (error) {
      console.error("Error fetching nutrition plans:", error);
      alert("Error fetching nutrition plans! Check the console for details.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="plan-container">
        <h1>Your Nutrition Plans</h1>
        {nutritionPlans.length === 0 ? (
          <p>No plans found!</p>
        ) : (
          <div className="plan-list">
            {nutritionPlans.map((plan, index) => (
              <div key={index} className="plan-item">
                <h2>Day {index + 1}</h2>
                <p>Calories: {plan.calories}</p>
                <p>Carbs: {plan.carbs}g</p>
                <p>Protein: {plan.protein}g</p>
                <p>Fat: {plan.fat}g</p>
                <ul>
                  {plan.foods.map((food, idx) => (
                    <li key={idx}>
                      {food.food} - {food.portion}g
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;
