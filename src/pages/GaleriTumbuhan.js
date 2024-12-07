import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriTumbuhan = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const plants = [
    {
      id: 1,
      name: 'Bunga Mawar',
      image: 'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/7/22/c4ffc4b4-af62-4830-b351-6a6f3c9662b6.jpg?ect=4g',
      description: 'Bunga mawar adalah simbol cinta dan keindahan.',
      scientificName: 'Rosa spp.',
      family: 'Rosaceae',
      order: 'Rosales',
      class: 'Magnoliopsida',
      division: 'Magnoliophyta',
      type: 'Tanaman berbunga',
      origin: 'Asia, Eropa, Amerika Utara',
    },
    {
      id: 2,
      name: 'Kaktus',
      image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2020/10/26/ers700o/kaktus-saguaro-tumbuhan-penting-di-tengah-gurun-sonoran98.jpg',
      description: 'Kaktus adalah tanaman yang tahan terhadap kekeringan.',
      scientificName: 'Cactaceae',
      family: 'Cactaceae',
      order: 'Caryophyllales',
      class: 'Magnoliopsida',
      division: 'Magnoliophyta',
      type: 'Tanaman sukulen',
      origin: 'Amerika',
    },
    {
      id: 3,
      name: 'Anggrek',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSY6bKZcOPNNkApfy3JcqCycg1pE9t9kbXr8Yv-xWynnuuHzfqTzQSqq-aJVYyf1pTtvGRi0bX7d45o0SW_Q90Q',
      description: 'Anggrek dikenal karena bentuknya yang unik dan warna yang cerah.',
      scientificName: 'Orchidaceae',
      family: 'Orchidaceae',
      order: 'Asparagales',
      class: 'Liliopsida',
      division: 'Magnoliophyta',
      type: 'Tanaman berbunga',
      origin: 'Daerah tropis dan subtropis',
    },
    {
      id: 4,
      name: 'Lili',
      image: 'https://asset.kompas.com/crops/a4R18wLhKnTwawB9KZOEcJeZfuU=/0x0:1000x667/1200x800/data/photo/2022/11/28/638477e82bc3c.jpg',
      description: 'Bunga lili memiliki aroma yang khas dan indah.',
      scientificName: 'Lilium',
      family: 'Liliaceae',
      order: 'Liliales',
      class: 'Liliopsida',
      division: 'Magnoliophyta',
      type: 'Tanaman berbunga',
      origin: 'Belahan bumi utara',
    },
    // Tambahkan data lain sesuai kebutuhan...
  ];

  const handleCardClick = (plant) => {
    setSelectedPlant(plant); // Set the selected plant for the modal
  };

  const closeModal = () => {
    setSelectedPlant(null); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Spesies Tumbuhan 🌿
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Klik pada gambar tumbuhan untuk mempelajari lebih lanjut!
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCardClick(plant)}
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="object-cover w-64 h-64 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{plant.name}</h3>
              <p className="text-gray-600">{plant.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed Plant Information */}
      {selectedPlant && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 relative w-11/12 md:w-1/2 lg:w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inside click
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-4xl font-bold text-black hover:text-red-500 transition-colors duration-200"
            >
              &times;
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
                className="w-64 h-64 mb-4 rounded-lg object-cover"
              />
              <h2 className="text-2xl font-bold mb-4">{selectedPlant.name}</h2>
            </div>

            {/* Plant details */}
            <p className="text-gray-700 mb-4">{selectedPlant.description}</p>
            <p><strong>Nama Ilmiah:</strong> {selectedPlant.scientificName}</p>
            <p><strong>Famili:</strong> {selectedPlant.family}</p>
            <p><strong>Ordo:</strong> {selectedPlant.order}</p>
            <p><strong>Kelas:</strong> {selectedPlant.class}</p>
            <p><strong>Divisi:</strong> {selectedPlant.division}</p>
            <p><strong>Jenis:</strong> {selectedPlant.type}</p>
            <p><strong>Asal:</strong> {selectedPlant.origin}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriTumbuhan;