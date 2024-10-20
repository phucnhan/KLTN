import React from 'react';
import './Plan.css';

function Plan({ plan }) {
  if (!plan) {
    return <div className="plan-container">Loading...</div>;
  }

  return (
    <div className="plan-container">
      <h1>Nutrition Plan for {plan.user}</h1>
      <ul className="plan-list">
        <li className="plan-item">
          <h2>{plan.user}</h2>
          <p>Calories: {plan.plan.calories}</p>
          <p>Protein: {plan.plan.protein}g</p>
          <p>Fat: {plan.plan.fat}g</p>
          <p>Carbs: {plan.plan.carbs}g</p>
        </li>
      </ul>
    </div>
  );
}

export default Plan;
