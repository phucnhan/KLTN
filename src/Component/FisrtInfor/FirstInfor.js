import "./FirstInfor.css"; // Import CSS
import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, doc, setDoc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

const FirstInfor = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(''); // Thêm biến trạng thái cho độ tuổi
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("User not authenticated");
      return;
    }

    // Kiểm tra xem giới tính đã được chọn chưa
    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    // Kiểm tra điều kiện độ tuổi
    if (age < 7 || age > 100) {
      alert("Age must be between 7 and 100.");
      return;
    }

    // Thêm điều kiện cho chiều cao và cân nặng
    if (height < 50 || height > 250) { // Example height condition
      alert("Height must be between 50 cm and 250 cm.");
      return;
    }

    if (weight < 10 || weight > 300) { // Example weight condition
      alert("Weight must be between 10 kg and 300 kg.");
      return;
    }

    const formData = {
      gender,
      age,
      height,
      weight,
    };

    try {
      await setDoc(doc(db, "usersdata", user.uid), formData); // Removed "firstInfor" from the path
      console.log("Document written with ID: ", user.uid);
      navigate('/goals'); // Redirect to the next page
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="firstinfor-container">
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Gender Selection */}
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-container">
              <button
                type="button"
                className={gender === 'male' ? 'selected' : ''}
                onClick={() => setGender('male')}
              >
                Male
              </button>
              <button
                type="button"
                className={gender === 'female' ? 'selected' : ''}
                onClick={() => setGender('female')}
              >
                Female
              </button>
            </div>
          </div>


          {/* Age */}
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
          </div>
          
          {/* Height */}
          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Cm"
            />
          </div>

          {/* Weight */}
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="KG"
            />
          </div>


          <button type="submit" className="continue-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstInfor;
