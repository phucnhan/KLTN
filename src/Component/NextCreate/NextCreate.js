import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextCreate.css";
import Navbar from "../Navbar/Navbar";

const NextCreate = () => {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");

  // Get UID from localStorage on load
  useEffect(() => {
    const storedUid = localStorage.getItem("userUID");
    if (storedUid) {
      setUid(storedUid);
      console.log("UID from localStorage:", storedUid);
    } else {
      alert("User ID not found! Please log in again.");
    }
  }, []);

  const handleContinue = async () => {
    if (!uid) {
      alert("User ID not found! Please log in again.");
      return;
    }
  
    try {
      console.log("Sending request to backend:", { uid });
  
      const response = await fetch("https://7d51-160-187-246-139.ngrok-free.app/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      });
  
      console.log("Response status:", response.status);
  
      // Kiểm tra phản hồi có phải JSON không
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const errorText = await response.text();
        console.error("Non-JSON response:", errorText);
        throw new Error("Received non-JSON response from API");
      }
  
      const data = await response.json();
      console.log("Plan generated successfully:", data);
  
      if (!data.success) {
        throw new Error(data.error || "Plan generation failed.");
      }
  
      alert("Plan generated successfully!");
      navigate("/plan");
    } catch (error) {
      console.error("Error generating plan:", error);
      alert("Error generating plan! Check the console for more details.");
    }
  };
  

  return (
    <div>
      <div className="nextcreate-container">
        <Navbar />

        <div className="nextcreatetextbox">
          <h1 className="nextcreateGoals">Create your plan to ...</h1>
        </div>

        <div className="nextcreate1">
          <div className="nextcreateContent">
            <div className="descriptionText">
              Find out your calories and macronutrients for free.
            </div>
            <img
              className="goals-icon"
              src="image/goalsimg/losefat1.png"
              alt="Lose Fat"
            />
          </div>
        </div>

        <div className="nextcreate">
          <div className="nextcreateContent">
            <div className="descriptionText">Get a meal plan.</div>
            <img
              className="goals-icon"
              src="image/goalsimg/maintainw1.png"
              alt="Maintain Weight"
            />
          </div>
        </div>

        <div className="nextcreate">
          <div className="nextcreateContent">
            <div className="descriptionText">Get a workout plan.</div>
            <img
              className="goals-icon"
              src="image/goalsimg/musclegain1.png"
              alt="Muscle Gain"
            />
          </div>
        </div>
        <button onClick={handleContinue} disabled={!uid}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default NextCreate;
