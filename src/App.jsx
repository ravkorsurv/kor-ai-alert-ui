import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Dashboard from './pages/Dashboard';
import CaseDetail from './pages/CaseDetail';

export default function App() {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/case/:id" element={<CaseDetail />} />
      </Routes>
    </Router>
  );
}
