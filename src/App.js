import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Index from './Pages/index.js';
import About_Us from './Pages/About_Us.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutus" element={<About_Us />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
