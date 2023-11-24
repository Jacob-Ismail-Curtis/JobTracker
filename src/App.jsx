// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Applications from './pages/Applications';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Intro />
        <Routes>
          <Route path="/" element={<Applications />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
