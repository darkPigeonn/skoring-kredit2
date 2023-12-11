// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeScore from './components/EmployeeScore';
import HomePage from './components/HomePage';
import EngginePage from './pages/EngginePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/score" element={<EmployeeScore />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/enggine" element={<EngginePage />} />
      </Routes>
    </Router>
  );
};

export default App;
