import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-right">Galeri Bio</h1>
          <p className="text-xl" data-aos="fade-left" data-aos-delay="200">
            Jelajahi galeri menarik tentang hewan, tumbuhan, dan manusia.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600" data-aos="fade-right">Kategori Galeri</h2>
        <div className="flex gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center w-full py-4 rounded-xl shadow-lg transition-all duration-300 ${
                activeGallery === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
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
