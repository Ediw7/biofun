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

  const humans = [
    { id: 1, name: 'Manusia A', image: 'https://source.unsplash.com/100x100/?human1', description: 'Deskripsi Manusia A.' },
    { id: 2, name: 'Manusia B', image: 'https://source.unsplash.com/100x100/?human2', description: 'Deskripsi Manusia B.' },
    { id: 3, name: 'Manusia C', image: 'https://source.unsplash.com/100x100/?human3', description: 'Deskripsi Manusia C.' },
    { id: 4, name: 'Manusia D', image: 'https://source.unsplash.com/100x100/?human4', description: 'Deskripsi Manusia D.' },
    { id: 5, name: 'Manusia E', image: 'https://source.unsplash.com/100x100/?human5', description: 'Deskripsi Manusia E.' },
    { id: 6, name: 'Manusia F', image: 'https://source.unsplash.com/100x100/?human6', description: 'Deskripsi Manusia F.' },
    { id: 7, name: 'Manusia G', image: 'https://source.unsplash.com/100x100/?human7', description: 'Deskripsi Manusia G.' },
    { id: 8, name: 'Manusia H', image: 'https://source.unsplash.com/100x100/?human8', description: 'Deskripsi Manusia H.' }
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

      {/* Galeri Tumbuhan */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Spesies Tumbuhan 🌿
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
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

      {/* Galeri Manusia */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Manusia 👤
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {humans.map((human) => (
            <div
              key={human.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            >
              <img
                src={human.image}
                alt={human.name}
                className="object-cover w-full h-32 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{human.name}</h3>
              <p className="text-gray-600">{human.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriHewan;
