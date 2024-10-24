import React, { useState } from 'react';
import { Search, Play, Star, Trophy, Brain } from 'lucide-react';

const GamesEdukatif = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'quiz', name: 'Kuis Biologi', icon: '🎯', description: 'Uji pengetahuanmu tentang dunia biologi' },
    { id: 'puzzle', name: 'Puzzle Hewan', icon: '🧩', description: 'Susun gambar hewan dengan benar' },
    { id: 'matching', name: 'Mencocokkan', icon: '🔄', description: 'Cocokkan hewan dengan habitatnya' },
    { id: 'memory', name: 'Kartu Memori', icon: '🃏', description: 'Latih ingatanmu tentang klasifikasi hewan' },
    { id: 'adventure', name: 'Petualangan', icon: '🗺️', description: 'Jelajahi dunia hewan yang menakjubkan' },
    { id: 'simulation', name: 'Simulasi', icon: '🔬', description: 'Simulasikan kehidupan hewan' }
  ];

  const featuredGames = [
    {
      id: 1,
      title: "Petualangan Hutan Tropis",
      category: "adventure",
      difficulty: "Mudah",
      players: "2,345",
      icon: "🦁",
      description: "Jelajahi hutan dan temukan hewan-hewan unik!"
    },
    {
      id: 2,
      title: "Kuis Mamalia Laut",
      category: "quiz",
      difficulty: "Sedang",
      players: "1,890",
      icon: "🐋",
      description: "Uji pengetahuanmu tentang kehidupan di laut"
    },
    {
      id: 3,
      title: "Puzzle Habitat Hewan",
      category: "puzzle",
      difficulty: "Sulit",
      players: "3,120",
      icon: "🦒",
      description: "Susun habitat yang tepat untuk setiap hewan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Games Edukatif BioFun 🎮</h1>
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

      {/* Featured Games */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Game Terpopuler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{game.icon}</div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">{game.players} pemain</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {game.difficulty}
                </span>
                <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  <Play className="w-4 h-4" />
                  Main
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Game Categories */}
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Kategori Game</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
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

export default GamesEdukatif;