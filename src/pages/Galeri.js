import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Search } from 'lucide-react';
import GaleriHewan from './GaleriHewan';
import GaleriTumbuhan from './GaleriTumbuhan';
import GaleriManusia from './GaleriManusia';

const Galeri = () => {
  const [activeGallery, setActiveGallery] = useState('hewan');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const categories = [
    { id: 'hewan', name: 'Galeri Hewan', component: <GaleriHewan />, icon: '🐾' },
    { id: 'tumbuhan', name: 'Galeri Tumbuhan', component: <GaleriTumbuhan />, icon: '🌿' },
    { id: 'manusia', name: 'Galeri Manusia', component: <GaleriManusia />, icon: '🧑' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
      <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Biologi 🖼️
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
          Jelajahi galeri menarik tentang hewan, tumbuhan, dan manusia.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl" data-aos="fade-up" data-aos-delay="400">
            <input
              type="text"
              placeholder="Cari eksperimen atau materi..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-600" data-aos="fade-right">Kategori Galeri</h2>
        <div className="flex gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center w-full py-4 rounded-xl shadow-lg transition-all duration-300 ${
                activeGallery === category.id ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveGallery(category.id)}
              data-aos="zoom-in"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <span className="text-lg font-semibold">{category.name}</span>
            </button>
          ))}
        </div>

        <div data-aos="fade-up">{categories.find((cat) => cat.id === activeGallery)?.component}</div>
      </div>
    </div>
  );
};

export default Galeri;
