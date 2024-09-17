import logo from './logo.svg';
import Home from './Component/Home/Home';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Home /></div>} />
      </Routes>
    </Router>

  );
}

export default App;
