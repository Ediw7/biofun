import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Book, Brain, Calendar, Fish, Flower, Star, Trophy, Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "Edi",
    grade: "Kelas 5",
    totalPoints: 750,
    streak: 5
  });

  const [learningStats, setLearningStats] = useState({
    hewan: { progress: 65, lastActivity: "Quiz Klasifikasi Hewan" },
    tumbuhan: { progress: 40, lastActivity: "Game Fotosintesis" },
    manusia: { progress: 85, lastActivity: "Video Sistem Pencernaan" }
  });

  const [achievements, setAchievements] = useState([
    "Ahli Biologi Muda",
    "Penjelajah Hewan",
    "Master Anatomi"
  ]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const weeklyActivity = [
    { name: 'Sen', menit: 45 },
    { name: 'Sel', menit: 30 },
    { name: 'Rab', menit: 60 },
    { name: 'Kam', menit: 25 },
    { name: 'Jum', menit: 45 },
    { name: 'Sab', menit: 50 },
    { name: 'Min', menit: 20 }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 overflow-x-hidden">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={toggleMobileMenu}
          className="bg-white/20 backdrop-blur rounded-full p-2"
        >
          {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-purple-600 to-pink-600 z-40 p-6 pt-20 md:hidden">
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">{user.name}</h2>
              <p className="text-white/80">{user.grade}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-white/90">Total Poin</p>
                  <p className="text-2xl font-bold text-white">{user.totalPoints}</p>
                </div>
                <Star className="text-white" size={24} />
              </div>
              <div className="bg-white/10 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-white/90">Streak Belajar</p>
                  <p className="text-2xl font-bold text-white">{user.streak} Hari</p>
                </div>
                <Trophy className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div data-aos="fade-right" className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Dashboard BioFun 📊</h1>
              <p className="text-lg md:text-xl text-white/90"data-aos="fade-left" data-aos-delay="200">Selamat Datang, {user.name}!</p>
              <p className="text-white/80 hidden md:block">{user.grade}</p>
            </div>
            <div data-aos="fade-left" className="hidden md:block text-center">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-2xl font-bold text-white">{user.streak} Hari</p>
                <p className="text-sm text-white/90">Streak Belajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-6 md:-mt-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {/* Hewan Progress */}
          <div data-aos="zoom-in" data-aos-delay="100" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <Fish className="text-purple-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-purple-600">Hewan</h3>
            </div>
            <div className="mt-3 md:mt-4">
              <div className="w-full bg-purple-100 rounded-full h-2.5">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${learningStats.hewan.progress}%` }}
                ></div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                Aktivitas terakhir: {learningStats.hewan.lastActivity}
              </p>
            </div>
          </div>

          {/* Tumbuhan Progress */}
          <div data-aos="zoom-in" data-aos-delay="200" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <Flower className="text-green-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-green-600">Tumbuhan</h3>
            </div>
            <div className="mt-3 md:mt-4">
              <div className="w-full bg-purple-100 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${learningStats.tumbuhan.progress}%` }}
                ></div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                Aktivitas terakhir: {learningStats.tumbuhan.lastActivity}
              </p>
            </div>
          </div>

          {/* Manusia Progress */}
          <div data-aos="zoom-in" data-aos-delay="300" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <Brain className="text-blue-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-blue-600">Tubuh Manusia</h3>
            </div>
            <div className="mt-3 md:mt-4">
              <div className="w-full bg-purple-100 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${learningStats.manusia.progress}%` }}
                ></div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                Aktivitas terakhir: {learningStats.manusia.lastActivity}
              </p>
            </div>
          </div>
        </div>

        {/* Activity Chart & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Weekly Activity Chart */}
          <div data-aos="fade-right" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-purple-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-purple-600">Aktivitas Minggu Ini</h3>
            </div>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivity}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="menit" fill="#9333ea" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Achievements */}
          <div data-aos="fade-left" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-purple-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-purple-600">Pencapaian</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
                >
                  <Award className="text-purple-600" size={20} />
                  <span className="text-sm md:text-base text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Points & Next Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div data-aos="fade-up" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-purple-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-purple-600">Total Poin</h3>
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              {user.totalPoints} Poin
            </div>
            <button className="mt-4 text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Tukar Poin
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Book className="text-purple-600" size={24} />
              <h3 className="text-lg md:text-xl font-bold text-purple-600">Target Berikutnya</h3>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {['Quiz Sistem Peredaran Darah', 'Game Klasifikasi Tumbuhan', 'Video Rantai Makanan'].map((target, index) => (
                <li 
                  key={index} 
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="flex items-center gap-2 text-xs md:text-base text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  {target}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;