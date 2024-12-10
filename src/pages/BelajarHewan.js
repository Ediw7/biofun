import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BelajarHewan = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate('/hewan-mamalia');
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = [
    { id: 'mammals', name: 'Mamalia', icon: '🦁' },
    { id: 'birds', name: 'Burung', icon: '🦜' },
    { id: 'reptiles', name: 'Reptil', icon: '🦎' },
    { id: 'fish', name: 'Ikan', icon: '🐠' },
    { id: 'insects', name: 'Serangga', icon: '🦋' },
    { id: 'amphibians', name: 'Amfibi', icon: '🐸' },
    { id: 'carnivores', name: 'Karnivora', icon: '🐅' },
    { id: 'herbivores', name: 'Herbivora', icon: '🐘' },
    { id: 'omnivores', name: 'Omnivora', icon: '🐻' },
    { id: 'endangered', name: 'Hewan Terancam Punah', icon: '🦏' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 overflow-x-hidden">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={toggleMobileMenu}
          className="bg-white/20 backdrop-blur rounded-full p-2"
        >
          {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-purple-600 to-pink-600 z-40 p-6 pt-20 md:hidden overflow-y-auto">
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Belajar Hewan</h2>
              <p className="text-white/80">Jelajahi Dunia Hewan</p>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Cari kategori hewan..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <Search className="absolute right-4 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4" data-aos="fade-right">
            Belajar Mengenal Hewan 🐾
          </h1>
          <p className="text-base md:text-xl mb-6 md:mb-8" data-aos="fade-left" data-aos-delay="200">
            Mari mengenal berbagai jenis hewan dan kehidupannya!
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl hidden md:block" data-aos="fade-up" data-aos-delay="400">
            <input
              type="text"
              placeholder="Cari materi pembelajaran..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-600" data-aos="fade-right">
          Kategori Hewan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="text-3xl md:text-4xl mb-2">{category.icon}</div>
              <h3 className="text-base md:text-xl font-bold text-purple-600">{category.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Klik untuk melihat video tentang {category.name.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelajarHewan;