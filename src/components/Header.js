import React, { useState } from 'react';
import { Microscope, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Belajar',
      emoji: '🧬',
      submenu: [
        { title: 'Belajar Hewan', emoji: '🐾', path: '/belajar-hewan' },
        { title: 'Belajar Tumbuhan', emoji: '🌿', path: '/belajar-tumbuhan' },
        { title: 'Belajar Manusia', emoji: '🧑', path: '/belajar-manusia' }
      ]
    },
    { title: 'Games', emoji: '🧩', path: '/games-edukatif' },
    { title: 'Eksperimen', emoji: '🧪', path: '/eksperimen-virtual' },
    { title: 'Galeri', emoji: '🖼️', path: '/galeri' },
    { title: 'Tentang Kami', emoji: '📚', path: '/tentang-kami' },
    {
      title: 'Progress Anak',
      emoji: '📊',
      submenu: [
        { title: 'Dashboard', emoji: '📊', path: '/dashboard' },
        { title: 'Riwayat Aktivitas', emoji: '📜', path: '/riwayat-aktivitas' }
      ]
    }
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Microscope className="w-6 h-6 text-white animate-bounce" />
            </div>
            <Link to="/" className="text-2xl font-bold bg-purple-600 bg-clip-text text-transparent">
              BioFun
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <button className="flex items-center space-x-2 font-bold text-gray-600 hover:text-blue-500 transition-colors">
                    <span>{item.emoji}</span>
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 font-bold text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <span>{item.emoji}</span>
                    <span>{item.title}</span>
                  </Link>
                )}
                {item.submenu && (
                  <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        onClick={handleMenuItemClick}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        <span>{subItem.emoji}</span>
                        <span>{subItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-purple-600 px-4 py-2 rounded-full">
              <User className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Edi</span>
            </div>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-blue-500 transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-1">
                {item.submenu ? (
                  <div className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-600">
                    <span>{item.emoji}</span>
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={handleMenuItemClick}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span>{item.emoji}</span>
                    <span>{item.title}</span>
                  </Link>
                )}
                {item.submenu && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        onClick={handleMenuItemClick}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <span>{subItem.emoji}</span>
                        <span>{subItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
