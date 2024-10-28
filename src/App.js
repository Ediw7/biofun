import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home';
import BelajarHewan from './pages/BelajarHewan';
import BelajarTumbuhan from './pages/BelajarTumbuhan';
import BelajarManusia from './pages/BelajarManusia';
import GamesEdukatif from './pages/GamesEdukatif';
import Tentangkami from './pages/TentangKami';


import HewanMamalia from './pages/HewanMamalia';
import VideoMamalia from './pages/VideoMamalia';

import TumbuhanBerbunga from './pages/TumbuhanBerbunga';
import VideoBerbunga from './pages/VideoBerbunga';

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
        <Route path="/games-edukatif" element={<GamesEdukatif />} />
        <Route path="/hewan-mamalia" element={<HewanMamalia />} />
        <Route path="/video-mamalia" element={<VideoMamalia />} />
        <Route path="/tumbuhan-berbunga" element={<TumbuhanBerbunga/>}/>
        <Route path="/video-berbunga" element={<VideoBerbunga/>}/>
        <Route path="/Tentang-Kami" element={<Tentangkami/>}/>

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
