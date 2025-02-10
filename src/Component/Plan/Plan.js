import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Plan.css";

const Plan = () => {
  const [nutritionPlans, setNutritionPlans] = useState([]);
  const [activeDay, setActiveDay] = useState(null);
  const [uid, setUid] = useState("");

  useEffect(() => {
    const storedUid = localStorage.getItem("userUID");
    console.log("Stored UID:", storedUid);
    if (storedUid) {
      setUid(storedUid);
      fetchNutritionPlans(storedUid);
    } else {
      alert("User ID not found! Please log in again.");
    }
  }, []);
 
  const fetchNutritionPlans = async (uid) => {
    try {
      console.log(`Fetching nutrition plans for UID: ${uid}`);
      const response = await fetch(`https://623a-160-187-246-139.ngrok-free.app/api/user-data/${uid}/nutritionPlans`);
  
      // Log trạng thái và tiêu đề phản hồi
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
        throw new Error(`Error fetching nutrition plans: ${response.status}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const errorText = await response.text();
        console.error("Non-JSON response:", errorText);
        throw new Error("Received non-JSON response from API");
      }
  
      const data = await response.json();
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
