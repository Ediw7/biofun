import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriManusia = () => {
  const [selectedHuman, setSelectedHuman] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const humans = [
    {
      id: 1,
      name: 'Meganthropus Paleojavanicus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rDgf8qjWQuzdYEIQ-ifj_D-atafY1t6hcEsEsEHH9AY1pZLVwb9aDuiwFFFtDt33950&usqp=CAU',
      description: 'Manusia purba ini ditemukan oleh GHR Von Koenigswald pada tahun 1936-1941 di Sangiran, Sragen, Jawa Tengah.',
      characteristics: [
        'Rahang yang tegap dan geraham yang besar',
        'Tulang pipi tebal',
        'Kening menjorok ke depan dengan tonjolan belakang kepala yang tajam',
        'Tidak memiliki tulang dagu',
        'Otot tengkuk yang kuat',
      ],
    },
    {
      id: 2,
      name: 'Pithecanthropus Mojokertensis',
      image: 'https://imgx.sonora.id/crop/0x0:0x0/x/photo/2023/03/24/pithecantropus-erectusjpg-20230324095910.jpg',
      description: 'Manusia purba ini ditemukan oleh GHR Von Koenigswald di Perning, Mojokerto, Jawa Timur pada tahun 1936.',
      characteristics: [
        'Berbadan tegap, tingginya sekitar 165-180 cm',
        'Gigi yang kuat',
        'Tulang kening tebal, menonjol, dan melebar sampai pelipis',
        'Isi tengkorak sekitar 750-1300 cc',
        'Belum memiliki tulang dagu',
        'Ada tulang menonjol di belakang kepala',
      ],
    },
    {
      id: 3,
      name: 'Pithecanthropus Erectus',
      image: 'https://idsejarah.net/wp-content/uploads/2018/05/pithecanthropus-erectus.jpg',
      description: 'Manusia purba ini ditemukan di lembah Bengawan Solo, Desa Trinil, Jawa Tengah oleh Eugene Dubois tahun 1891.',
      characteristics: [
        'Tinggi sekitar 160-180 cm',
        'Volume otak 750-900 cc',
        'Rahang menonjol ke depan',
        'Ada tonjolan di dahi',
        'Tidak memiliki dagu',
        'Hidung lebar dan leher tegap',
      ],
    },
    {
      id: 4,
      name: 'Pithecanthropus Soloensis',
      image: 'https://magetan.satujam.com/wp-content/uploads/2017/08/tandapagar.com1_.jpg?strip=all&lossy=1&ssl=1',
      description: 'Pithecanthropus Soloensis ditemukan oleh GHR von Koenigswald, Ter Haar, dan Oppenoorth di Desa Ngandong, Jawa Tengah.',
      characteristics: [
        'Tengkorak lonjong, tebal, dan padat',
        'Memiliki rongga mata yang panjang',
      ],
    },
    {
      id: 5,
      name: 'Homo Wajakensis',
      image: 'https://buguruku.com/wp-content/uploads/2023/01/9-1.jpg',
      description: 'Jenis ini ditemukan di Desa Wajak, Tulungagung, Jawa Timur oleh Van Rietschoten pada tahun 1889.',
      characteristics: [
        'Volume otak sekitar 1630 cc',
        'Wajahnya datar dan lebar',
        'Rahangnya padat dan memiliki gigi yang besar',
        'Tinggi sekitar 173 cm',
        'Memiliki tulang rahang atas, bawah, tulang paha, dan tulang kening',
      ],
    },
    {
      id: 6,
      name: 'Homo Soloensis',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b3xys5XPvXzmeVA4tNDlXOtCYrSvkdjnoA&s',
      description: 'Homo Soloensis ditemukan oleh Ter Haar, Oppenoorth, dan von Koenigswald pada tahun 1931-1933 di Sangiran, Jawa Tengah.',
      characteristics: [
        'Volume otak 1.000 hingga 1.300 cc',
        'Tinggi mencapai 210 cm',
        'Struktur tulang wajah tidak mirip dengan manusia kera',
      ],
    },
    {
      id: 7,
      name: 'Homo Sapiens',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3bozRTodB8K5sd1k3nS7S4c0gEurwQANKg&s',
      description: 'Homo Sapiens memiliki arti sebagai manusia cerdas dan diduga hidup antara 25.000-40.000 tahun yang lalu.',
      characteristics: [
        'Tinggi sekitar 130-210 cm',
        'Berat badan sekitar 30-150 kg',
        'Volume otak sekitar 1350-1450 cc',
      ],
    },
  ];

  const closePopup = () => {
    setSelectedHuman(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-right"
          >
            Galeri Manusia Purba di Indonesia 👤
          </h1>
          <p
            className="text-xl mb-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Klik gambar manusia purba untuk mempelajari lebih lanjut!
          </p>
        </div>
      </div>

      {/* Grid Galeri */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {humans.map((human) => (
            <div
              key={human.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => setSelectedHuman(human)}
            >
              <img
                src={human.image}
                alt={human.name}
                className="object-cover w-full h-64 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{human.name}</h3>
              <p className="text-gray-600">{human.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedHuman && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-4xl text-gray-500 hover:text-red-500 font-bold"
            >
              &times;
            </button>
            <img
              src={selectedHuman.image}
              alt={selectedHuman.name}
              className="w-64 h-64 object-cover mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedHuman.name}
            </h3>
            <p className="text-gray-600 mb-4">{selectedHuman.description}</p>
            <ul className="list-disc list-inside text-gray-700">
              {selectedHuman.characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriManusia;
