import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GolonganDarah = () => {
  const slides = [
    {
      title: 'Pengantar',
      content:
        'Golongan darah adalah sistem pengelompokan darah manusia berdasarkan keberadaan atau ketiadaan antigen tertentu di permukaan sel darah merah. Sistem golongan darah yang paling umum digunakan adalah sistem ABO dan Rhesus (Rh)...',
    },
    {
      title: 'Penggolongan Darah Sistem RH',
      content:
        'Sistem Rhesus (Rh) juga berperan penting dalam penggolongan darah. Penggolongan darah Rh ditentukan oleh adanya atau tidak adanya antigen D pada permukaan sel darah merah...',
    },
    {
      title: 'Penggolongan Darah Sistem ABO',
      content:
        'Sistem ABO didasarkan pada adanya dua jenis antigen utama, yaitu antigen A dan antigen B, yang terdapat pada permukaan sel darah merah...',
    },
    {
      title: 'Uji Golongan Darah',
      content:
        'Uji golongan darah adalah prosedur laboratorium yang digunakan untuk menentukan tipe golongan darah seseorang berdasarkan adanya antigen tertentu pada permukaan sel darah merah...',
      image: '/mnt/data/image.png', // Ganti dengan path gambar yang di-upload
    },
    {
      title: 'Transfusi Darah',
      content:
        'Transfusi darah adalah prosedur medis yang melibatkan pemberian darah atau produk darah ke dalam tubuh seseorang melalui pembuluh darah...',
      image: '/mnt/data/WhatsApp Image 2024-12-05 at 11.56.03_10728bda.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col justify-center items-center">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 px-6 flex items-center w-full justify-between max-w-4xl">
        <button
          onClick={handleBack} // Tambahkan fungsi handleBack
          className="mr-4 bg-white text-orange-500 p-2 rounded-full hover:bg-orange-200"
        >
          &larr; Back
        </button>
        <h1 className="text-lg md:text-2xl font-bold w-full text-center">{slides[currentIndex].title}</h1>
        <div className="w-16"></div> {/* Placeholder untuk menjaga keseimbangan layout */}
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center mt-6 w-full max-w-4xl">
        <div className="w-full bg-white rounded-lg shadow-lg p-6 relative">
          <h2 className="text-xl font-semibold text-orange-600 text-center">{slides[currentIndex].title}</h2>
          <p className="text-gray-700 mt-4 text-center">{slides[currentIndex].content}</p>
          {slides[currentIndex].image && (
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full mt-4 rounded-lg shadow-md"
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === slides.length - 1}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Page Indicator */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default GolonganDarah;
