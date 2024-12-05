import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  };

  const experiments = [
    {
      id:'goldar',
      name: 'Eksperimen 1: Golongan Darah',
      icon: '🧪',
      description: 'Pelajari berbagai reaksi kimia di dunia nyata secara virtual.',
    },
    {
      id: 'eksperimen2',
      name: 'Eksperimen 2: Fisika Dasar',
      icon: '⚛️',
      description: 'Praktekkan eksperimen fisika dasar dengan alat virtual.',
    },
    {
      id: 'eksperimen3',
      name: 'Eksperimen 3: Biologi Sel',
      icon: '🧬',
      description: 'Jelajahi sel dan struktur biologis dalam eksperimen virtual.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Materi 🧑‍🔬
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Lakukan eksperimen fisika, kimia, dan biologi secara virtual di sini!
          </p>
        </div>
      </div>

      {/* Experiment List */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-600" data-aos="fade-right">
          Pilih Eksperimen
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
              <h3 className="text-xl font-bold text-orange-600">{experiment.name}</h3>
              <p className="text-gray-600">{experiment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EksperimenMateri;
