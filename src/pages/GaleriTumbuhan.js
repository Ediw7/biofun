import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriTumbuhan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const plants = [
    { id: 1, name: 'Bunga Mawar', image: 'https://source.unsplash.com/100x100/?rose', description: 'Bunga mawar adalah simbol cinta dan keindahan.' },
    { id: 2, name: 'Kaktus', image: 'https://source.unsplash.com/100x100/?cactus', description: 'Kaktus adalah tanaman yang tahan terhadap kekeringan.' },
    { id: 3, name: 'Anggrek', image: 'https://source.unsplash.com/100x100/?orchid', description: 'Anggrek dikenal karena bentuknya yang unik dan warna yang cerah.' },
    { id: 4, name: 'Lili', image: 'https://source.unsplash.com/100x100/?lily', description: 'Bunga lili memiliki aroma yang khas dan indah.' },
    { id: 5, name: 'Bunga Matahari', image: 'https://source.unsplash.com/100x100/?sunflower', description: 'Bunga matahari dikenal karena bentuknya yang menyerupai matahari.' },
    { id: 6, name: 'Bunga Tulip', image: 'https://source.unsplash.com/100x100/?tulip', description: 'Bunga tulip memiliki beragam warna yang cerah dan menarik.' },
    { id: 7, name: 'Paku-Pakis', image: 'https://source.unsplash.com/100x100/?fern', description: 'Paku-pakis adalah tanaman hijau yang tumbuh subur di tempat lembab.' },
    { id: 8, name: 'Daun Jati', image: 'https://source.unsplash.com/100x100/?teak', description: 'Daun jati berasal dari pohon jati yang banyak tumbuh di Asia Tenggara.' }
  ];

  const handleCardClick = (id) => {
    navigate(`/tumbuhan/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Spesies Tumbuhan 🌿
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Klik pada gambar tumbuhan untuk mempelajari lebih lanjut!
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCardClick(plant.id)}
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="object-cover w-full h-32 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{plant.name}</h3>
              <p className="text-gray-600">{plant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriTumbuhan;
