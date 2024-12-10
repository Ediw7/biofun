import React, { useState, useEffect } from 'react';
import { Award, Calendar, MapPin, User, Star, Settings, Edit3 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: "Edi",
    grade: "Kelas 5",
    streak: 5,
    location: "Jakarta, Indonesia",
    bio: "Saya pecinta biologi yang suka menjelajahi dunia hewan, tumbuhan, dan tubuh manusia."
  });

  const [achievements, setAchievements] = useState([
    "Ahli Biologi Muda",
    "Penjelajah Hewan",
    "Master Anatomi"
  ]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div data-aos="fade-right" className="text-center md:text-left w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Profil Saya</h1>
              <p className="text-base md:text-lg text-white/90">Selamat datang, {user.name}!</p>
            </div>
            <div data-aos="fade-left" className="text-center w-full md:w-auto">
              <button className="bg-white/20 text-white px-4 md:px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition flex items-center justify-center">
                <Edit3 size={18} className="mr-2" /> Edit Profil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-12">
        {/* Profile Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-4" data-aos="fade-right">Informasi Pribadi</h2>
              <div className="space-y-3">
                <p className="text-sm md:text-base text-gray-600" data-aos="fade-right" data-aos-delay="100">
                  <User size={18} className="inline-block mr-2 text-blue-600" /> Nama: <span className="font-semibold">{user.name}</span>
                </p>
                <p className="text-sm md:text-base text-gray-600" data-aos="fade-right" data-aos-delay="200">
                  <Calendar size={18} className="inline-block mr-2 text-blue-600" /> Streak Belajar: <span className="font-semibold">{user.streak} Hari</span>
                </p>
                <p className="text-sm md:text-base text-gray-600" data-aos="fade-right" data-aos-delay="300">
                  <MapPin size={18} className="inline-block mr-2 text-blue-600" /> Lokasi: <span className="font-semibold">{user.location}</span>
                </p>
                <p className="text-sm md:text-base text-gray-600" data-aos="fade-right" data-aos-delay="400">
                  <Star size={18} className="inline-block mr-2 text-blue-600" /> Bio: <span>{user.bio}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0" data-aos="fade-left">
              <img
                src="https://img.freepik.com/premium-vector/cartoon-vector-illustration-stylish-boy-navy-blue-hoodie-joggers_1080480-147483.jpg"
                alt="User Avatar"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-600"
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-4">Pencapaian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-4 rounded-lg shadow-sm"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Award size={20} className="text-purple-600" />
                <span className="text-sm md:text-base text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white py-6 md:py-8 mb-8 rounded-xl shadow-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-4">Pengaturan</h2>
          <div className="space-y-3">
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition flex items-center justify-center"
            >
              <Settings size={18} className="mr-2" /> Ubah Kata Sandi
            </button>
            <button
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 md:px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 flex items-center justify-center"
            >
              <User size={18} className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;






