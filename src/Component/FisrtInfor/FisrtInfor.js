import "./FisrtInfor.css";
import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
import {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, doc, setDoc } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

const FirstInfor = () => {
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login'); // Chuyển hướng đến trang đăng nhập nếu không đăng nhập
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

    const formData = {
      gender,
      dob,
      height,
      weight,
    };

    try {
      await setDoc(doc(db, "users", user.uid, "firstInfor", user.uid), formData);
      console.log("Document written with ID: ", user.uid);
      navigate('/goals'); // Chuyển hướng đến trang tiếp theo
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

          {/* Date of Birth */}
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
