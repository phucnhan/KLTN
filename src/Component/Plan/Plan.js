import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Plan.css";

const Plan = () => {
  const [nutritionPlans, setNutritionPlans] = useState([]);
  const [activeDay, setActiveDay] = useState(null);
  const [uid, setUid] = useState("");

  useEffect(() => {
    const storedUid = localStorage.getItem("userUID");
    if (storedUid) {
      setUid(storedUid);
      console.log("UID from localStorage:", storedUid);
      fetchNutritionPlans(storedUid);
    } else {
      alert("User ID not found! Please log in again.");
    }
  }, []);

  const fetchNutritionPlans = async (uid) => {
    try {
      console.log(`Fetching nutrition plans for UID: ${uid}`);
      const response = await fetch(`https://c291-160-187-246-139.ngrok-free.app/api/user-data/${uid}/nutritionPlans`);

      if (!response.ok) {
        const text = await response.text();
        console.error("Error response text:", text);
        throw new Error(`Error fetching nutrition plans: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Received non-JSON response from API");
      }

      const data = await response.json();
      if (!data.plans || data.plans.length === 0) {
        console.warn("No nutrition plans found for the given UID.");
        alert("No nutrition plans found!");
        setNutritionPlans([]);
        return;
      }

      console.log("Nutrition plans fetched successfully:", data);
      setNutritionPlans(data.plans || []);
    } catch (error) {
      console.error("Error fetching nutrition plans:", error);
      alert("Error fetching nutrition plans! Check the console for details.");
    }
  };



  const handleToggleDay = (index) => {
    setActiveDay(activeDay === index ? null : index); // Toggle ngày được chọn
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
            {activeDay === index && (
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Plan;
