import React, { useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EksperimenVirtual = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleCategoryClick = (type) => {
    if (type === 'materi') {
      navigate('/eksperimen-materi');
    } else if (type === 'eksperimen') {
      navigate('/lab-eksperimen');
    }
  };
  

  const categories = [
    { id: 'materi', name: 'Materi', icon: '📚', description: 'Belajar teori sebelum eksperimen.' },
    { id: 'eksperimen', name: 'Eksperimen', icon: '🧪', description: 'Langsung praktekkan eksperimen virtual.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
      <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Eksperimen Virtual 🌍
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Mari belajar melalui teori dan eksperimen virtual interaktif!
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

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-600" data-aos="fade-right">
          Pilihan Eksperimen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="text-xl font-bold text-purple-600">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EksperimenVirtual;
