import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    title: 'Kompetensi',
    icon: '📋',
    detail: 'Detail tentang Kompetensi akan ditampilkan di sini.',
  },
  {
    id: 2,
    title: 'Materi',
    icon: '📖',
    detail: 'Detail tentang Materi akan ditampilkan di sini.',
  },
  {
    id: 3,
    title: 'Eksperimen Virtual',
    icon: '🧪',
    detail: 'Detail tentang Eksperimen Virtual akan ditampilkan di sini.',
  },
  {
    id: 4,
    title: 'Evaluasi',
    icon: '✅',
    detail: 'Detail tentang Evaluasi akan ditampilkan di sini.',
  },
];

const EksperimenVirtual = () => {
  // State untuk menyimpan card yang dipilih
  const [selectedCard, setSelectedCard] = useState(null);

  // Fungsi untuk mengubah card yang dipilih
  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  return (
    <div className="bg-gradient-to-b from-teal-50 to-green-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-green-500 text-center py-16">
        {/* Header Text */}
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          Eksperimen Virtual
        </h1>
      </div>

      {/* Menu Cards */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center py-6 hover:shadow-xl transition cursor-pointer"
              onClick={() => handleCardClick(item)} // Mengatur klik card
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Section */}
      {selectedCard && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-extrabold text-teal-500 mb-4">
            {selectedCard.title} - Detail
          </h2>
          <p className="text-lg text-gray-700">{selectedCard.detail}</p>
        </div>
      )}
    </div>
  );
};

export default EksperimenVirtual;