import React, { useEffect } from 'react';
import { Search } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const BelajarHewan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right"> {/* AOS on main title */}
            Belajar Mengenal Hewan 🐾
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200"> {/* AOS on subtitle */}
            Mari mengenal berbagai jenis hewan dan kehidupannya!
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl" data-aos="fade-up" data-aos-delay="400"> {/* AOS on search bar */}
            <input
              type="text"
              placeholder="Cari materi pembelajaran..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-600" data-aos="fade-right"> {/* AOS on categories title */}
          Kategori Hewan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in" // Menambahkan efek AOS pada kategori
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="text-xl font-bold text-purple-600">{category.name}</h3>
              <p className="text-gray-600">Klik untuk melihat video tentang {category.name.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelajarHewan;
