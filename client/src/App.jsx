import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

