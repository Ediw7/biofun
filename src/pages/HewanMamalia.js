import React, { useEffect } from 'react';
import { ArrowLeft, Play, Download, BookOpen, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HewanMamalia = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const mammals = [
    {
      id: 1,
      name: "Singa",
      scientificName: "Panthera leo",
      image: "/api/placeholder/400/300",
      description: "Raja hutan yang hidup berkelompok dalam pride",
      characteristics: ["Karnivora", "Hidup berkelompok", "Bulu keemasan"],
      habitat: "Padang rumput Afrika"
    },
    {
      id: 2,
      name: "Gajah Afrika",
      scientificName: "Loxodonta africana",
      image: "/api/placeholder/400/300",
      description: "Mamalia darat terbesar dengan belalai panjang",
      characteristics: ["Herbivora", "Sosial", "Cerdas"],
      habitat: "Hutan dan savana Afrika"
    },
    {
      id: 3,
      name: "Lumba-lumba",
      scientificName: "Delphinus delphis",
      image: "/api/placeholder/400/300",
      description: "Mamalia laut yang sangat cerdas dan sosial",
      characteristics: ["Karnivora", "Berenang cepat", "Ekolokasi"],
      habitat: "Lautan di seluruh dunia"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-600 hover:text-purple-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Kategori
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Mengenal Hewan Mamalia 🦁
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Mari belajar tentang hewan menyusui yang menarik!
          </p>
          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
          <button 
            onClick={() => navigate('/video-mamalia')}
            className="bg-white text-purple-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-50"
            >
            <Play className="w-5 h-5" />
            Tonton Video
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-800">
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
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Fakta Menarik Mamalia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                🥛
              </div>
              <div>
                <h3 className="font-bold mb-2">Menyusui</h3>
                <p className="text-gray-600">Semua mamalia menyusui anaknya dengan air susu</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                🌡️
              </div>
              <div>
                <h3 className="font-bold mb-2">Berdarah Panas</h3>
                <p className="text-gray-600">Dapat mengatur suhu tubuh mereka sendiri</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                🫁
              </div>
              <div>
                <h3 className="font-bold mb-2">Bernapas dengan Paru-paru</h3>
                <p className="text-gray-600">Menggunakan paru-paru untuk bernapas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mammals Grid */}
        <h2 className="text-2xl font-bold text-purple-600 mb-6" data-aos="fade-right">
          Contoh Hewan Mamalia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mammals.map((mammal) => (
            <div 
              key={mammal.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="zoom-in"
            >
              <img 
                src={mammal.image} 
                alt={mammal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-1">{mammal.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{mammal.scientificName}</p>
                <p className="text-gray-600 mb-4">{mammal.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mammal.characteristics.map((char, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Habitat: {mammal.habitat}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-purple-100 rounded-full">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </button>
                    <button className="p-2 hover:bg-purple-100 rounded-full">
                      <Share2 className="w-5 h-5 text-purple-600" />
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

export default HewanMamalia;