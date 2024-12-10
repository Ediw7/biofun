import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EksperimenMateri = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  const handleNavigate = () => {
    navigate('/golongan-darah'); // Arahkan ke rute yang diinginkan
    window.scrollTo(0, 0);
  };

  const experiments = [
    {
      id:'goldar',
      name: 'Materi Eksperimen 1: Golongan Darah',
      icon: '💉',
      description: 'Pelajari berbagai reaksi kimia di dunia nyata secara virtual.',
    },
    {
      id: 'eksperimen2',
      name: 'Materi Eksperimen 2: Pertumbuhan Kecambah',
      icon: '🌱',
      description: 'Praktekkan pertumbuhan kecambah dengan alat virtual.',
    },
    {
      id: 'eksperimen3',
      name: 'Materi Eksperimen 3: Daur Hidup Serangga',
      icon: '🐛',
      description: 'Mengamati proses metamorfosis serangga.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Materi 🧑‍🔬
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Lakukan eksperimen fisika, kimia, dan biologi secara virtual di sini!
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

      {/* Experiment List */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-600" data-aos="fade-right">
          Pilih Materi Eksperimen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((experiment) => (
            <div
              key={experiment.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleNavigate(experiment.id)}
            >
              <div className="text-4xl mb-2">{experiment.icon}</div>
              <h3 className="text-xl font-bold text-purple-600">{experiment.name}</h3>
              <p className="text-gray-600">{experiment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EksperimenMateri;
