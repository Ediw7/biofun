import React from 'react';
import { useParams } from 'react-router-dom';

const DetailSpesies = () => {
  const { id } = useParams();

  const speciesData = [
    { id: 1, name: 'Singa', image: 'https://source.unsplash.com/400x400/?lion', description: 'Singa adalah salah satu karnivora terbesar di Afrika. Mereka hidup berkelompok dan dikenal sebagai "Raja Hutan".', latihan: 'Apa nama ilmiah dari Singa?' },
    { id: 2, name: 'Gajah', image: 'https://source.unsplash.com/400x400/?elephant', description: 'Gajah memiliki belalai panjang yang sangat kuat. Mereka dapat hidup hingga usia 60-70 tahun di alam liar.', latihan: 'Berapa lama usia gajah bisa hidup di alam liar?' },
    { id: 3, name: 'Burung Hantu', image: 'https://source.unsplash.com/400x400/?owl', description: 'Burung Hantu memiliki pendengaran yang sangat tajam dan mereka berburu di malam hari.', latihan: 'Mengapa Burung Hantu aktif di malam hari?' },
    { id: 4, name: 'Kupu-kupu', image: 'https://source.unsplash.com/400x400/?butterfly', description: 'Kupu-kupu adalah serangga yang melalui siklus metamorfosis, dari ulat hingga menjadi kupu-kupu dewasa.', latihan: 'Apa tahapan metamorfosis pada kupu-kupu?' },
    { id: 5, name: 'Paus', image: 'https://source.unsplash.com/400x400/?whale', description: 'Paus adalah mamalia laut yang sangat besar, beberapa spesies paus dapat tumbuh hingga 30 meter.', latihan: 'Apa makanan utama paus biru?' }
  ];

  const specie = speciesData.find((specie) => specie.id === parseInt(id));

  if (!specie) {
    return <div>Spesies tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={specie.image}
              alt={specie.name}
              className="object-cover w-full h-64 md:w-64 md:h-64 rounded-lg mb-4 md:mb-0"
            />
            <div className="md:ml-6">
              <h2 className="text-3xl font-bold mb-2">{specie.name}</h2>
              <p className="text-gray-700 mb-4">{specie.description}</p>
              <div className="text-xl font-semibold text-gray-800">Latihan:</div>
              <p className="text-gray-600">{specie.latihan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSpesies;
