import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { Search, Play, Star } from 'lucide-react';

const GamesEdukatif = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const categories = [
    { id: 'semua', name: 'Semua' },
    { id: 'kuis', name: 'Kuis' },
    { id: 'puzzle', name: 'Puzzle' },
    { id: 'kartu Memori', name: 'Kartu Memori' },
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
      title: "Metamorfosis Kupu-kupu: Susun Prosesnya!",
      category: "puzzle",
      points: "950",
      icon: "🦋",
      description: "Susun langkah-langkah metamorfosis kupu-kupu dari telur hingga menjadi kupu-kupu yang cantik dalam puzzle yang menantang!"
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

  const filteredGames = selectedCategory === 'semua'
    ? featuredGames
    : featuredGames.filter(game => game.category === selectedCategory);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handlePlayClick = (game) => {
    if (game.category === 'kuis') {
      navigate('/game-quiz');
      window.scrollTo(0, 0);
    } else if (game.category === 'puzzle') {
      navigate('/game-puzzle');
      window.scrollTo(0, 0);
    } else if (game.category === 'kartu Memori') {
      navigate('/game-memori');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4" data-aos="fade-right">
            Games Edukatif BioFun 🧩
          </h1>
          <p className="text-sm md:text-xl mb-4 md:mb-8" data-aos="fade-left" data-aos-delay="200">
            Belajar biologi jadi lebih seru dengan bermain!
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md md:max-w-2xl" data-aos="fade-up" data-aos-delay="400">
            <input
              type="text"
              placeholder="Cari game pembelajaran..."
              className="w-full px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-800 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 md:top-3 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </div>

      {/* Game Categories */}
      <div className="container mx-auto px-4 py-6 md:py-8" data-aos="fade-right">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-600">Kategori Game</h2>
        <div className="flex gap-2 md:gap-4 mb-8 md:mb-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-full transition-colors duration-200 flex-shrink-0 ${selectedCategory === category.id ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Games */}
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-600" data-aos="fade-left">
          Game Terpopuler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="text-2xl md:text-4xl">{game.icon}</div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  <span className="text-xs md:text-sm text-gray-600">{game.points} poin</span>
                </div>
              </div>
              <h3 className="text-base md:text-xl font-bold text-purple-600 mb-1 md:mb-2">{game.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className="px-2 md:px-3 py-0.5 md:py-1 bg-purple-100 text-purple-600 rounded-full text-xs md:text-sm">
                  {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
                </span>
                <button
                  className="flex items-center gap-1 md:gap-2 bg-purple-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-purple-700 transition-colors text-xs md:text-base"
                  onClick={() => handlePlayClick(game)}
                >
                  <Play className="w-3 h-3 md:w-4 md:h-4" />
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