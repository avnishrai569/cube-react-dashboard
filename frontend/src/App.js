import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LineChartView from './components/LineChart';
import BarChartView from './components/BarChart';
import PieChartView from './components/PieChart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LineChartView />} />
        <Route path="/bar" element={<BarChartView />} />
        <Route path="/pie" element={<PieChartView />} />
      </Routes>
    </Router>
  );
}

export default App;