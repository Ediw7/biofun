import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home';
import BelajarHewan from './pages/BelajarHewan';
import BelajarTumbuhan from './pages/BelajarTumbuhan';
import BelajarManusia from './pages/BelajarManusia';
import Footer from './components/Footer';
import Header from './components/Header'; // Pastikan path ini benar

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/belajar-hewan" element={<BelajarHewan />} />
        <Route path="/belajar-tumbuhan" element={<BelajarTumbuhan />} />
        <Route path="/belajar-manusia" element={<BelajarManusia />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
