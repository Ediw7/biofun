import React from 'react';
import { Search } from 'lucide-react';

const BelajarManusia = () => {
  const categories = [
    { id: 'respiratory', name: 'Sistem Pernafasan', icon: '🫁' }, // Sistem Pernafasan
    { id: 'digestive', name: 'Sistem Pencernaan', icon: '' },  // Sistem Pencernaan
    { id: 'circulatory', name: 'Sistem Peredaran Darah', icon: '🫀' }, // Sistem Peredaran Darah
    { id: 'nervous', name: 'Sistem Saraf', icon: '🧠' }, // Sistem Saraf
    { id: 'musculoskeletal', name: 'Sistem Otot & Tulang', icon: '💪' }, // Sistem Otot & Tulang
    { id: 'joints', name: 'Sistem Persendian', icon: '🦴' }, // Sistem Persendian
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Belajar Tentang Tubuh Manusia! 🧑‍🤝‍🧑</h1>
          <p className="text-xl mb-8">Yuk, kita belajar tentang bagaimana tubuh kita bekerja!</p>
          
           {/* Search Bar */}
           <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Cari materi pembelajaran..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-left">Kategori Menarik!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer text-left"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="text-xl font-bold text-blue-600">{category.name}</h3>
              <p className="text-gray-600">Klik untuk belajar lebih banyak tentang {category.name.toLowerCase()}!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelajarManusia;
