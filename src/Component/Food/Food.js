import React, { useState } from "react";
import "./Food.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Food = () => {
  // State to track selected food preferences
  const [selectedFoods, setSelectedFoods] = useState({
    Proteins: [],
    Carbs: [],
    Fats: [],
    Fruits: [],
    Dairy: [],
  });

  // Handle checkbox change
  const handleCheckboxChange = (category, food) => {
    setSelectedFoods((prevState) => {
      const currentSelection = prevState[category];
      const isSelected = currentSelection.includes(food);

      // Add or remove food from selection
      return {
        ...prevState,
        [category]: isSelected
          ? currentSelection.filter((item) => item !== food)
          : [...currentSelection, food],
      };
    });
  };

  // Handle form submission
  const handlecontinue = (e) => {
    e.preventDefault();
    console.log("Selected Foods: ", selectedFoods);
    // Perform further actions like continueting the form to a server
  };

  const renderFoodItems = (category, items) => (
    <div className="section">
      <div className="section-title">{category}</div>
      {items.map((food) => (
        <label key={food} className="food-item">
          <input
            type="checkbox"
            name={category}
            value={food}
            checked={selectedFoods[category].includes(food)}
            onChange={() => handleCheckboxChange(category, food)}
          />
          {food}
        </label>
      ))}
      <div className="select-all">
        <button
          type="button"
          onClick={() => handleSelectAll(category, items)}
        >
          Select all
        </button>
      </div>
    </div>
  );

  // Handle "Select All" functionality
  const handleSelectAll = (category, items) => {
    setSelectedFoods((prevState) => ({
      ...prevState,
      [category]: prevState[category].length === items.length ? [] : items,
    }));
  };

  return (
    <div className="food-page">
      <Navbar />
      <div className="food-form-container">


        <div className="title">Your eating preferences</div>
        <form oncontinue={handlecontinue}>
          {renderFoodItems("Proteins", [
            "Chicken",
            "Beef",
            "Fish",
            "Ham",
            "Tofu",
            "Tempeh",
            "Seitan",
            "Protein Powder",
          ])}
          {renderFoodItems("Carbs", [
            "Rice",
            "Potato",
            "Sweet Potato",
            "Green Beans",
            "Pasta",
            "Cereal",
            "Corn",
            "Oats",
          ])}
          {renderFoodItems("Fats", [
            "Avocado",
            "Peanuts",
            "Almonds",
            "Chocolate",
            "Chia",
          ])}
          {renderFoodItems("Fruits", [
            "Banana",
            "Strawberries",
            "Apple",
            "Tangerine",
            "Orange",
            "Kiwi",
            "Grenadia",
            "Dragon Fruit",
          ])}
          {renderFoodItems("Dairy", [
            "Milk",
            "Yogurt",
            "White Cheese",
            "Coconut Milk",
            "Almond Milk",
          ])}
          <div className="back-button-container">
          <button className="food-back-button">
              <Link to="/activityLevel">Back</Link>
          </button>
          </div>
          <div className="continue-button-container">
            <button className="continue-button">
              <Link to="/targetweight">Continue</Link>            
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Food;
