

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import AboutUs from './Component/About/AboutUs';



function App() {
  return (
    <Router>
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
        <Route path="/logout" element={<div className="app-container"><Logout /></div>}  />
        <Route path="/plan" element={<div className="app-container"><Plan /></div>} />
        <Route path="/aboutus" element={<div className="app-container"><AboutUs /></div>} />

      </Routes>
    </Router>

  );
}

export default App;