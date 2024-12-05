import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EksperimenMateri = () => {
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
      image: 'https://roboguru-forum-cdn.ruangguru.com/f6db0394-5819-4a59-a9c9-42d496ae5d20.png',
    },
    {
      title: 'Transfusi Darah',
      content:
        'Transfusi darah adalah prosedur medis yang melibatkan pemberian darah atau produk darah ke dalam tubuh seseorang melalui pembuluh darah...',
      image: 'https://seratusinstitute.com/medias2/images/home/news/2018/09/17/Kecocokan%20darah.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col items-center justify-center px-6 py-8">
      {/* Slide Content */}
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">{slides[currentIndex].title}</h1>
        <p className="text-gray-700 mb-6">{slides[currentIndex].content}</p>
        {slides[currentIndex].image && (
          <div className="mb-6">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="rounded-lg shadow-md mx-auto max-h-64"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrev}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="inline-block mr-2" />
            Sebelumnya
          </button>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {slides.length}
          </span>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === slides.length - 1}
          >
            Selanjutnya
            <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EksperimenMateri;
