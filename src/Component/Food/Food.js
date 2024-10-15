import "./Food.css"; // Import CSS
import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, doc, setDoc, getDocs, collection, onAuthStateChanged } from '../../firebase';

const Food = () => {
  const navigate = useNavigate();

  // State to track selected food preferences
  const [selectedFoods, setSelectedFoods] = useState({
    Proteins: [],
    Carbs: [],
    Fats: [],
    Fruits: [],
    Dairy: [],
  });

  // State to track all foods from Firebase
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodCollection = collection(db, "foods");
      const foodSnapshot = await getDocs(foodCollection);
      const foodList = foodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFoods(foodList);
    };

    fetchFoods();
  }, []);

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
  const handleContinue = async (e) => {
    e.preventDefault();
    console.log("Selected Foods: ", selectedFoods);
    
    // Kiểm tra từng danh mục để xem có lựa chọn nào không
    const categories = Object.keys(selectedFoods);
    const emptyCategories = []; // Mảng lưu trữ các danh mục không có lựa chọn

    for (const category of categories) {
        if (selectedFoods[category].length === 0) {
            emptyCategories.push(category); // Thêm danh mục vào mảng nếu không có lựa chọn
        }
    }

    // Nếu có danh mục không có lựa chọn, hiển thị thông báo
    if (emptyCategories.length > 0) {
        alert(`Vui lòng chọn ít nhất một thực phẩm trong các phần: ${emptyCategories.join(", ")}.`);
        return; // Dừng lại nếu không có lựa chọn
    }
    
    // Lưu trữ lựa chọn của người dùng lên Firebase
    const userId = auth.currentUser.uid; // Lấy ID người dùng hiện tại
    const userDocRef = doc(db, "userSelections", userId); // Tạo tham chiếu đến tài liệu của người dùng

    try {
        await setDoc(userDocRef, { selectedFoods }); // Lưu trữ dữ liệu
        console.log("User selections saved successfully!");
        // Chuyển hướng đến trang tiếp theo
        navigate("/targetweight");
    } catch (error) {
        console.error("Error saving user selections: ", error);
    }
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="food-page">
      <Navbar />
      <div className="food-form-container">
        <div className="title">Your eating preferences</div>
        <form onSubmit={handleContinue}>
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
            <button className="continue-button" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Food;
