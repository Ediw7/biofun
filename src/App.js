import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Mengimpor semua halaman yang akan digunakan
import Home from './pages/Home';
import BelajarHewan from './pages/BelajarHewan';
import BelajarTumbuhan from './pages/BelajarTumbuhan';
import BelajarManusia from './pages/BelajarManusia';
import GamesEdukatif from './pages/GamesEdukatif';
import Tentangkami from './pages/TentangKami';
import Galeri from './pages/Galeri';
import Dashboard from './pages/Dashboard';
import RiwayatAktivitas from './pages/RiwayatAktivitas';
import SistemPencernaan from './pages/SistemPencernaan';
import VideoPencernaan from './pages/VideoPencernaan';
import GameQuiz from './pages/GameQuiz';
import GameMemori from './pages/GameMemori';
import GamePuzzle from './pages/GamePuzzle';
import EksperimenVirtual from './pages/EksperimenVirtual';
import EksperimenMateri from './pages/EksperimenMateri';
import LabEksperimen from './pages/LabEksperimen';
import GolonganDarah from './pages/GolonganDarah';
import Profile from './pages/Profile';
import EksperimenGolonganDarah from './pages/EksperimenGolonganDarah';
import EksperimenAlatBahan from './pages/EksperimenAlatBahan';
import EksperimenPuzzel from './pages/EksperimenPuzzel';
import EksperimenPerbandingan from './pages/EksperimenPerbandingan';
import EksperimenHasil from './pages/EksperimenHasil';



import HewanMamalia from './pages/HewanMamalia';
import VideoMamalia from './pages/VideoMamalia';

import TumbuhanBerbunga from './pages/TumbuhanBerbunga';
import VideoBerbunga from './pages/VideoBerbunga';

import Footer from './components/Footer';
import Header from './components/Header';
import { ImageOff, Import } from 'lucide-react';



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
        <Route path="/tumbuhan-berbunga" element={<TumbuhanBerbunga />} />
        <Route path="/video-berbunga" element={<VideoBerbunga />} />
        <Route path="/tentang-kami" element={<Tentangkami />} />
        <Route path="/galeri" element={<Galeri />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/riwayat-aktivitas" element={<RiwayatAktivitas />} />
        <Route path="/sistem-pencernaan" element={<SistemPencernaan />} />
        <Route path="/video-pencernaan" element={<VideoPencernaan />} />
        <Route path="/game-quiz" element={<GameQuiz />} />
        <Route path="/game-puzzle" element={<GamePuzzle />} />
        <Route path="/game-memori" element={<GameMemori />} />
        <Route path="/eksperimen-virtual" element={<EksperimenVirtual />} />
        <Route path="/eksperimen-materi" element={<EksperimenMateri />} />
        <Route path="/lab-eksperimen" element={<LabEksperimen/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/golongan-darah" element={<GolonganDarah />} />
        <Route path="/eksperimen-golongan-darah" element={<EksperimenGolonganDarah />} />
        <Route path="/eksperimen-alat-bahan" element={<EksperimenAlatBahan />} />
        <Route path="/eksperimen-puzzel" element={<EksperimenPuzzel />} />
        <Route path="/eksperimen-perbandingan" element={<EksperimenPerbandingan />} />
        <Route path="/eksperimen-hasil" element={<EksperimenHasil />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
