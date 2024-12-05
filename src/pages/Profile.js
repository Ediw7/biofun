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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Profil Saya</h1>
              <p className="text-lg text-white/90 mt-2">Selamat datang, {user.name}!</p>
            </div>
            <div data-aos="fade-left" className="text-center">
              <button className="bg-white/20 text-white px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition">
                <Edit3 size={20} className="inline-block mr-2" /> Edit Profil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-12">
        {/* Profile Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-purple-600" data-aos="fade-right">Informasi Pribadi</h2>
              <p className="text-gray-600 mt-3" data-aos="fade-right" data-aos-delay="100">
                <User size={20} className="inline-block mr-2 text-blue-600" /> Nama: <span className="font-semibold">{user.name}</span>
              </p>
              <p className="text-gray-600 mt-3" data-aos="fade-right" data-aos-delay="200">
                <Calendar size={20} className="inline-block mr-2 text-blue-600" /> Streak Belajar: <span className="font-semibold">{user.streak} Hari</span>
              </p>
              <p className="text-gray-600 mt-3" data-aos="fade-right" data-aos-delay="300">
                <MapPin size={20} className="inline-block mr-2 text-blue-600" /> Lokasi: <span className="font-semibold">{user.location}</span>
              </p>
              <p className="text-gray-600 mt-3" data-aos="fade-right" data-aos-delay="400">
                <Star size={20} className="inline-block mr-2 text-blue-600" /> Bio: <span>{user.bio}</span>
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://img.freepik.com/premium-vector/cartoon-vector-illustration-stylish-boy-navy-blue-hoodie-joggers_1080480-147483.jpg"
                alt="User Avatar"
                className="w-40 h-40 rounded-full mx-auto border-4 border-purple-600"
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-600">Pencapaian</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm"
              >
                <Award size={24} className="text-purple-600" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white py-8 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-purple-600">Pengaturan</h2>
          <div className="mt-4 space-y-3">
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition"
            >
              <Settings size={20} className="inline-block mr-2" /> Ubah Kata Sandi
            </button>
            <button
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            >
              <User size={20} className="inline-block mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
