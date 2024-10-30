import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GaleriHewan from './GaleriHewan';
import GaleriTumbuhan from './GaleriTumbuhan';
import GaleriManusia from './GaleriManusia';

const Galeri = () => {
  const [activeGallery, setActiveGallery] = useState('hewan');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleGalleryChange = (gallery) => {
    setActiveGallery(gallery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <Link
            to="#"
            className={`hover:underline ${activeGallery === 'hewan' ? 'font-bold' : ''}`}
            onMouseEnter={() => handleGalleryChange('hewan')}
          >
            Galeri Hewan
          </Link>
          <Link
            to="#"
            className={`hover:underline ${activeGallery === 'tumbuhan' ? 'font-bold' : ''}`}
            onMouseEnter={() => handleGalleryChange('tumbuhan')}
          >
            Galeri Tumbuhan
          </Link>
          <Link
            to="#"
            className={`hover:underline ${activeGallery === 'manusia' ? 'font-bold' : ''}`}
            onMouseEnter={() => handleGalleryChange('manusia')}
          >
            Galeri Manusia
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {activeGallery === 'hewan' && <GaleriHewan />}
        {activeGallery === 'tumbuhan' && <GaleriTumbuhan />}
        {activeGallery === 'manusia' && <GaleriManusia />}
      </div>
    </div>
  );
};

export default Galeri;
