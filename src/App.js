
import Home from './Component/Home/Home';
import Signup from './Component/Signup/Signup';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Home /></div>} />
        <Route path="/Signup" element={<div className="app-container"><Signup /></div>} />
        <Route path="/Login" element={<div className="app-container"><Login /></div>} />
      </Routes>
    </Router>

  );
}

export default App;