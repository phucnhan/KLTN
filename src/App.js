// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth, onAuthStateChanged } from './firebase';
import Home from './Component/Home/Home';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import Logout from "./Component/Logout/Logout";
import FisrtInfor from './Component/FisrtInfor/FirstInfor';
import Goals from './Component/Goals/Goals';
import ActivityLevel from './Component/ActivityLevel/ActivityLevel';
import Food from './Component/Food/Food';
import TargetWeight from './Component/TargetWeight/TargetWeight';
import NextCreate from './Component/NextCreate/NextCreate';
import Plan from './Component/Plan/Plan';
import AboutUs from './Component/AboutUs/AboutUs';
import ContactUs from './Component/ContactUs/ContactUs';
import Navbar from './Component/Navbar/Navbar';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await axios.get('/api/nutrition-plans');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching nutrition plans:', error);
      }
    }

    fetchPlans();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<div className="app-container"><Login /></div>} />
        <Route path="/home" element={<div className="app-container"><Home /></div>} />
        <Route path="/firstinfor" element={<div className="app-container"><FisrtInfor /></div>} />
        <Route path="/goals" element={<div className="app-container"><Goals /></div>} />
        <Route path="/activityLevel" element={<div className="app-container"><ActivityLevel /></div>} />
        <Route path="/food" element={<div className="app-container"><Food /></div>} />
        <Route path="/targetweight" element={<div className="app-container"><TargetWeight /></div>} />
        <Route path="/nextCreate" element={<div className="app-container"><NextCreate /></div>} />
        <Route path="/signup" element={<div className="app-container"><Signup /></div>} />
        <Route path="/login" element={<div className="app-container"><Login /></div>} />
        <Route path="/logout" element={<div className="app-container"><Logout /></div>} />
        <Route path="/plan" element={<div className="app-container"><Plan plans={plans} /></div>} />
        <Route path="/aboutus" element={<div className="app-container"><AboutUs /></div>} />
        <Route path="/contact" element={<div className="app-container"><ContactUs /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
