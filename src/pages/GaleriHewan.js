import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriHewan = () => {
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const species = [
    {
      id: 1,
      name: 'Singa',
      image: 'https://img.pikbest.com/origin/10/12/20/02rpIkbEsTdSf.jpg!w700wp',
      description: 'Singa adalah karnivora besar yang berasal dari Afrika.',
      sound: '/audio/tiger.mp3',
      speed: '74 km/jam',
      lifespan: '15 - 16 tahun',
      weight: '190 kg (Jantan), 130 kg (Betina)',
      origin: 'Afrika dan India',
    },
    {
      id: 2,
      name: 'Gajah',
      image: 'https://img.pikbest.com/origin/10/41/94/34WpIkbEsTXI3.jpg!w700wp',
      description: 'Gajah adalah mamalia darat terbesar di dunia.',
      sound: '/audio/gajah.mp3',
      speed: '40 km/jam',
      lifespan: '60 - 70 tahun',
      weight: '6000 kg',
      origin: 'Afrika dan Asia',
    },
    {
      id: 3,
      name: 'Burung Hantu',
      image: 'https://hawkwatch.org/wp-content/uploads/2023/06/GHOW-FS-1024x768.png',
      description: 'Burung Hantu adalah burung nokturnal dengan penglihatan tajam.',
      sound: '/audio/owl.mp3',
      speed: '40 km/jam',
      lifespan: '10 - 15 tahun',
      weight: '1 - 2 kg',
      origin: 'Seluruh dunia',
    },
    {
      id: 4,
      name: 'Kupu-kupu',
      image: 'https://www.befreetour.com/img/attraction/butterfly-park-&-insect-kingdom%C2%A020191011100126.jpg',
      description: 'Kupu-kupu adalah serangga yang dikenal karena sayapnya yang indah.',
      sound: '/audio/kupu.mp3',
      speed: '8 km/jam',
      lifespan: '2 - 4 minggu',
      weight: '0.5 - 2 g',
      origin: 'Seluruh dunia',
    },
    {
      id: 5,
      name: 'Paus',
      image: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/05/06/paus-orcajpg-20230506113442.jpg',
      description: 'Paus adalah mamalia laut yang terbesar di lautan.',
      sound: '/audio/paus.mp3',
      speed: '30 km/jam',
      lifespan: '70 - 90 tahun',
      weight: '150,000 kg',
      origin: 'Oseania dan Samudra Atlantik',
    },
    {
      id: 6,
      name: 'Harimau',
      image: 'https://radarlamsel.disway.id/upload/190cfa0b61b68a40360792837b12c7e4.jpg',
      description: 'Harimau adalah kucing besar yang ditemukan di Asia.',
      sound: '/audio/tiger_sound.mp3',
      speed: '65 km/jam',
      lifespan: '10 - 15 tahun',
      weight: '200 - 300 kg',
      origin: 'Asia',
    },
    {
      id: 7,
      name: 'Jerapah',
      image: 'https://asset.kompas.com/crops/M8tZZVU1-lgHxIPm1ZIF3m3pN7s=/0x0:1000x667/1200x800/data/photo/2017/09/16/2548005054.JPG',
      description: 'Jerapah adalah mamalia darat dengan leher panjang yang ditemukan di Afrika.',
      sound: '/audio/giraffe.mp3',
      speed: '55 km/jam',
      lifespan: '25 - 30 tahun',
      weight: '800 - 1,200 kg',
      origin: 'Afrika',
    },
    {
      id: 8,
      name: 'Zebra',
      image: 'https://akcdn.detik.net.id/api/wm/2021/11/08/zebra_169.jpeg?w=650',
      description: 'Zebra adalah mamalia dengan garis-garis hitam putih yang ditemukan di Afrika.',
      sound: '/audio/zebra.mp3',
      speed: '65 km/jam',
      lifespan: '25 tahun',
      weight: '300 - 400 kg',
      origin: 'Afrika',
    },
  ];

  const handleCardClick = (specie) => {
    setSelectedSpecie(specie);
  };

  const closeModal = () => {
    setSelectedSpecie(null);
  };

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {species.map((specie) => (
            <div
              key={specie.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCardClick(specie)}
            >
              <img
                src={specie.image}
                alt={specie.name}
                className="object-cover w-full h-64 rounded-lg mb-4"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSound(specie.sound);
                }}
                className="text-purple-600 hover:underline"
              >
                🔊 {specie.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSpecie && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 w-11/12 md:w-1/2 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedSpecie.name}</h2>
            <div className="flex justify-center mb-4">
              <img
                src={selectedSpecie.image}
                alt={selectedSpecie.name}
                className="object-contain w-full h-auto max-h-96 rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">{selectedSpecie.description}</p>
            <div className="text-sm text-gray-500">
              <p><strong>Kecepatan:</strong> {selectedSpecie.speed}</p>
              <p><strong>Lama Hidup:</strong> {selectedSpecie.lifespan}</p>
              <p><strong>Berat Badan:</strong> {selectedSpecie.weight}</p>
              <p><strong>Asal:</strong> {selectedSpecie.origin}</p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => playSound(selectedSpecie.sound)}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
              >
                🔊 Putar Suara
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriHewan;
