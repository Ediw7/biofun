import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriHewan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const species = [
    { id: 1, name: 'Singa', image: 'https://source.unsplash.com/100x100/?lion', description: 'Singa adalah karnivora besar yang berasal dari Afrika.' },
    { id: 2, name: 'Gajah', image: 'https://source.unsplash.com/100x100/?elephant', description: 'Gajah adalah mamalia darat terbesar di dunia.' },
    { id: 3, name: 'Burung Hantu', image: 'https://source.unsplash.com/100x100/?owl', description: 'Burung Hantu adalah burung nokturnal dengan penglihatan tajam.' },
    { id: 4, name: 'Kupu-kupu', image: 'https://source.unsplash.com/100x100/?butterfly', description: 'Kupu-kupu adalah serangga yang dikenal karena sayapnya yang indah.' },
    { id: 5, name: 'Paus', image: 'https://source.unsplash.com/100x100/?whale', description: 'Paus adalah mamalia laut yang terbesar di lautan.' }
  ];

  const handleCardClick = (id) => {
    navigate(`/spesies/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Spesies Hewan 🦁
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Klik pada gambar hewan untuk mempelajari lebih lanjut!
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {species.map((specie) => (
            <div
              key={specie.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCardClick(specie.id)}
            >
              <img
                src={specie.image}
                alt={specie.name}
                className="object-cover w-full h-32 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{specie.name}</h3>
              <p className="text-gray-600">{specie.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriHewan;
