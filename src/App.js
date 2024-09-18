
import Home from './Component/Home/Home';
import Signup from './Component/Signup/Signup';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Fisrt_infor from './Component/Fisrt_infor/Fisrt_infor';
import Goals from './Component/Goals/Goals';
import Activity_level from './Component/Activity_level/Activity_level';
import Food from './Component/Food/Food';
import Lose_fat from './Component/Lose_fat/Lose_fat';
import Next_create from './Component/Next_create/Next_create';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Home /></div>} />
        <Route path="/Fisrt_infor" element={<div className="app-container"><Fisrt_infor /></div>} />
        <Route path="/Goals" element={<div className="app-container"><Goals /></div>} />
        <Route path="/Activity_level" element={<div className="app-container"><Activity_level /></div>} />
        <Route path="/Food" element={<div className="app-container"><Food /></div>} />
        <Route path="/Lose_fat" element={<div className="app-container"><Lose_fat /></div>} />
        <Route path="/Next_create" element={<div className="app-container"><Next_create /></div>} />
        <Route path="/Signup" element={<div className="app-container"><Signup /></div>} />
        <Route path="/Login" element={<div className="app-container"><Login /></div>} />
      </Routes>
    </Router>

  );
}

export default App;