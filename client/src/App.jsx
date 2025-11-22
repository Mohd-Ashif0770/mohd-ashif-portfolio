import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

