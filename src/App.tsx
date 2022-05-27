import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>test</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
