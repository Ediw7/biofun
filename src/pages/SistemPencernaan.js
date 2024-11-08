import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Download, Share2, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SistemPencernaan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const digestiveSystemParts = [
    {
      id: 1,
      name: "Mulut",
      function: "Mengunyah makanan dan memulai proses pencernaan dengan bantuan enzim.",
      image: "/api/placeholder/400/300",
      characteristics: ["Enzim Amilase", "Pengunyahan", "Penyediaan Rasa"],
      details: "Mulut merupakan awal dari sistem pencernaan, di mana makanan dikunyah dan bercampur dengan air liur."
    },
    {
      id: 2,
      name: "Lambung",
      function: "Mengolah makanan secara kimiawi dengan asam lambung dan enzim.",
      image: "/api/placeholder/400/300",
      characteristics: ["Asam Lambung", "Pencernaan Protein", "Lapisan Lendir"],
      details: "Lambung mengurai makanan menjadi bentuk semi-cair agar lebih mudah diserap."
    },
    {
      id: 3,
      name: "Usus Halus",
      function: "Menyerap nutrisi dari makanan yang dicerna.",
      image: "/api/placeholder/400/300",
      characteristics: ["Penyerapan Nutrisi", "Vili", "Proses Kimia Lanjutan"],
      details: "Usus halus menyerap sebagian besar nutrisi, yang kemudian disalurkan ke seluruh tubuh."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Kategori
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Sistem Pencernaan Manusia 🍲
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Kenali organ-organ dalam tubuh yang berperan dalam mencerna makanan.
          </p>
          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
            <button 
              onClick={() => navigate('/video-pencernaan')}
              className="bg-white text-blue-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-50"
            >
              <User className="w-5 h-5" />
              Tonton Video
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-800">
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
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Fakta Menarik Sistem Pencernaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                🧬
              </div>
              <div>
                <h3 className="font-bold mb-2">Proses Kimiawi</h3>
                <p className="text-gray-600">Pencernaan melibatkan banyak enzim dan asam untuk menguraikan makanan.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                🥛
              </div>
              <div>
                <h3 className="font-bold mb-2">Penyerapan Nutrisi</h3>
                <p className="text-gray-600">Usus halus menyerap nutrisi dan mengirimkannya ke seluruh tubuh.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                💧
              </div>
              <div>
                <h3 className="font-bold mb-2">Pembentukan Air Seni</h3>
                <p className="text-gray-600">Ginjal memfilter darah dan menghasilkan urin dari sisa metabolisme.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Digestive System Parts Grid */}
        <h2 className="text-2xl font-bold text-blue-600 mb-6" data-aos="fade-right">
          Organ Sistem Pencernaan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digestiveSystemParts.map((part) => (
            <div 
              key={part.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="zoom-in"
            >
              <img 
                src={part.image} 
                alt={part.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-1">{part.name}</h3>
                <p className="text-gray-600 mb-4">{part.function}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {part.characteristics.map((char, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {part.details}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-100 rounded-full">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-blue-100 rounded-full">
                      <Share2 className="w-5 h-5 text-blue-600" />
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

export default SistemPencernaan;
