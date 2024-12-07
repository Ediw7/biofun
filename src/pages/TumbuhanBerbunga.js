import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Download, Share2, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TumbuhanBerbunga = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const floweringPlants = [
    {
      id: 1,
      name: "Mawar",
      scientificName: "Rosa",
      image: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/7/22/c4ffc4b4-af62-4830-b351-6a6f3c9662b6.jpg?ect=4g",
      description: "Bunga indah dengan aroma yang harum, sering dijadikan simbol cinta.",
      characteristics: ["Berwarna-warni", "Aroma Harum", "Duri pada batang"],
      habitat: "Taman dan kebun di seluruh dunia"
    },
    {
      id: 2,
      name: "Teratai",
      scientificName: "Nymphaea",
      image: "https://awsimages.detik.net.id/community/media/visual/2023/09/24/bunga-teratai_169.jpeg?w=600&q=90",
      description: "Tumbuhan air yang tumbuh di kolam dan sungai, dikenal dengan bunganya yang cantik.",
      characteristics: ["Tumbuhan Air", "Bunga Besar", "Daun Lebar"],
      habitat: "Kolam dan perairan tenang"
    },
    {
      id: 3,
      name: "Anggrek",
      scientificName: "Orchidaceae",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSY6bKZcOPNNkApfy3JcqCycg1pE9t9kbXr8Yv-xWynnuuHzfqTzQSqq-aJVYyf1pTtvGRi0bX7d45o0SW_Q90Q",
      description: "Bunga eksotis yang memiliki bentuk dan warna yang beragam.",
      characteristics: ["Eksotis", "Beragam Warna", "Bunga Berkelopak"],
      habitat: "Hutan tropis dan rumah kaca"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-green-600 hover:text-green-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Kategori
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Mengenal Tumbuhan Berbunga 🌸
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Pelajari keindahan dan keragaman tumbuhan berbunga di alam.
          </p>
          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
            <button 
              onClick={() => navigate('/video-berbunga')}
              className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-50"
            >
              <Leaf className="w-5 h-5" />
              Tonton Video
            </button>
            <button className="bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-800">
              <Download className="w-5 h-5" />
              Unduh Materi
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Fakta Menarik Tumbuhan Berbunga</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                🌼
              </div>
              <div>
                <h3 className="font-bold mb-2">Beragam Warna</h3>
                <p className="text-gray-600">Bunga hadir dalam berbagai warna untuk menarik penyerbuk.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                🌿
              </div>
              <div>
                <h3 className="font-bold mb-2">Bentuk yang Unik</h3>
                <p className="text-gray-600">Setiap spesies memiliki bentuk bunga yang khas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                🐝
              </div>
              <div>
                <h3 className="font-bold mb-2">Penyerbukan</h3>
                <p className="text-gray-600">Mereka bergantung pada serangga, angin, dan hewan untuk penyerbukan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flowering Plants Grid */}
        <h2 className="text-2xl font-bold text-green-600 mb-6" data-aos="fade-right">
          Contoh Tumbuhan Berbunga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {floweringPlants.map((plant) => (
            <div 
              key={plant.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="zoom-in"
            >
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-600 mb-1">{plant.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{plant.scientificName}</p>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {plant.characteristics.map((char, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Habitat: {plant.habitat}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-green-100 rounded-full">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </button>
                    <button className="p-2 hover:bg-green-100 rounded-full">
                      <Share2 className="w-5 h-5 text-green-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TumbuhanBerbunga;
