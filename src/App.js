import logo from './logo.svg';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Home /></div>} />
        <Route path="/nv" element={<div className="app-container"><Navbar /></div>} />
      </Routes>
    </Router>

  );
}

export default App;
