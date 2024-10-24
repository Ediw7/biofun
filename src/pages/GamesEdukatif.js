import React, { useState } from 'react';
import { Search, Play, Star } from 'lucide-react';

const GamesEdukatif = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const categories = [
    { id: 'semua', name: 'Semua' },
    { id: 'kuis', name: 'Kuis'},
    { id: 'puzzle', name: 'Puzzle'},
    { id: 'mencocokan', name: 'Mencocokkan'},
    { id: 'kartu Memori', name: 'Kartu Memori'},
  ];

  const featuredGames = [
    {
      id: 1,
      title: "Sistem Peredaran Darah: Uji Pengetahuanmu!",
      category: "kuis",
      points: "1,200", 
      icon: "🫀",
      description: "Uji pemahamanmu tentang sistem peredaran darah manusia dengan pertanyaan-pertanyaan menarik!"
    },
    {
      id: 2,
      title: "Metamorfosis Katak: Susun Prosesnya!",
      category: "puzzle",
      points: "950",
      icon: "🐸",
      description: "Susun langkah-langkah metamorfosis katak dari telur hingga menjadi katak dewasa dalam puzzle yang menantang!"
    },
    {
      id: 3,
      title: "Cocokkan Tumbuhan dengan Lingkungannya!",
      category: "mencocokan",
      points: "1,500", 
      icon: "🌿",
      description: "Cocokkan berbagai jenis tumbuhan dengan habitat alami mereka, pelajari tentang ekosistem yang berbeda!"
    },
    {
      id: 4,
      title: "Klasifikasi Jenis Hewan: Uji Ingatanmu!",
      category: "kartu Memori",
      points: "700", 
      icon: "🐾",
      description: "Latih ingatanmu dengan mencocokkan kartu jenis-jenis hewan dan nama ilmiah mereka!"
    }
  ];

  // Filter games berdasarkan kategori yang dipilih
  const filteredGames = selectedCategory === 'semua'
    ? featuredGames
    : featuredGames.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Games Edukatif BioFun 🧩</h1>
          <p className="text-xl mb-8">Belajar biologi jadi lebih seru dengan bermain!</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Cari game pembelajaran..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Game Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Kategori Game</h2>
        <div className="flex gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${selectedCategory === category.id ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Games */}
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Game Terpopuler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{game.icon}</div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">{game.points} poin</span> {/* Ganti "pemain" menjadi "poin" */}
                </div>
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {game.category.charAt(0).toUpperCase() + game.category.slice(1)} {/* Menampilkan kategori */}
                </span>
                <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  <Play className="w-4 h-4" />
                  Main
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesEdukatif;
