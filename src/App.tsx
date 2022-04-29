import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;