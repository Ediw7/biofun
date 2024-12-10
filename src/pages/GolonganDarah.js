import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GolonganDarah = () => {
  const slides = [
    {
      title: 'Pengantar Golongan Darah',
      subtitle: 'Apa itu Golongan Darah?',
      content:
        'Golongan darah adalah cara untuk mengelompokkan darah manusia. Golongan darah ditentukan dari sesuatu yang ada di permukaan sel darah merah, seperti tanda pengenal kecil yang disebut antigen. Ada dua sistem utama yang digunakan, yaitu sistem ABO dan sistem Rhesus (Rh).',
      backgroundStyle: 'from-blue-50 to-blue-100',
      image: 'https://png.pngtree.com/png-vector/20200309/ourmid/pngtree-cute-blood-type-character-in-kawaii-style-png-image_2154881.jpg',
    },
    {
      title: 'Penggolongan Darah Sistem RH',
      subtitle: 'Sistem Rhesus',
      content:
        'Sistem Rhesus (Rh) menentukan golongan darah berdasarkan ada atau tidaknya antigen D pada sel darah merah. Jika ada antigen D, disebut Rh-positif (Rh⁺); jika tidak, disebut Rh-negatif (Rh⁻). Sistem ini penting dalam transfusi darah dan kehamilan. Ibu Rh-negatif dengan janin Rh-positif berisiko memproduksi antibodi yang dapat menyerang janin, menyebabkan penyakit hemolitik. Untuk mencegahnya, ibu biasanya diberi suntikan imunoglobulin anti-D.',
      backgroundStyle: 'from-blue-50 to-blue-100',
    },
    {
      title: 'Penggolongan Darah Sistem ABO',
      subtitle: 'Sistem ABO',
      content:
        'Sistem ABO menggolongkan darah berdasarkan antigen A dan B pada sel darah merah. Golongan A memiliki antigen A dan antibodi anti-B, golongan B memiliki antigen B dan antibodi anti-A, golongan AB memiliki kedua antigen tanpa antibodi (universal penerima), dan golongan O tidak memiliki antigen tetapi memiliki antibodi anti-A dan anti-B (universal pendonor).',
      backgroundStyle: 'from-blue-50 to-blue-100',
    },
    {
      title: 'Uji Golongan Darah',
      subtitle: 'Bagaimana Mengetahui Golongan Darah?',
      content: (
        <>
          Uji golongan darah menentukan tipe darah berdasarkan antigen di sel darah merah dan antibodi di plasma. Darah dicampur dengan serum anti-A, anti-B, dan anti-D untuk melihat apakah terjadi penggumpalan:
          <br />
          <strong>ABO System:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Gumpal dengan anti-A → Golongan A</li>
            <li>Gumpal dengan anti-B → Golongan B</li>
            <li>Gumpal dengan keduanya → Golongan AB</li>
            <li>Tidak menggumpal → Golongan O</li>
          </ul>
          <br />
          <strong>Rh System:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Gumpal dengan anti-D → Rh⁺</li>
            <li>Tidak menggumpal → Rh⁻</li>
          </ul>
        </>
      ),
      backgroundStyle: 'from-blue-50 to-blue-100',
      image: 'https://roboguru-forum-cdn.ruangguru.com/f6db0394-5819-4a59-a9c9-42d496ae5d20.png',
    },
    {
      title: 'Transfusi Darah',
      subtitle: 'Prosedur Pemberian Darah',
      content:
        'Transfusi darah adalah prosedur medis yang melibatkan pemberian darah atau produk darah ke dalam tubuh seseorang melalui pembuluh darah, yang umumnya dilakukan untuk menggantikan darah yang hilang akibat cedera, operasi, atau kondisi medis tertentu.',
      backgroundStyle: 'from-blue-50 to-blue-100',
      image: 'https://seratusinstitute.com/medias2/images/home/news/2018/09/17/Kecocokan%20darah.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(slides.length - 1, prevIndex + 1));
  };

  if (!slides[currentIndex]) {
    return <div>Error: Slide tidak ditemukan.</div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b ${slides[currentIndex].backgroundStyle} flex flex-col justify-center items-center p-4`}>
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[700px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-bold">{slides[currentIndex].title}</h1>
          </div>

          {/* Content Section */}
          <div className="p-6 overflow-y-auto flex-1">
            <h2 className="text-xl font-semibold text-purple-600 mb-4">
              {slides[currentIndex].subtitle}
            </h2>
            <div className="text-gray-700 mb-4">{slides[currentIndex].content}</div>
            {slides[currentIndex].image && (
              <div className="flex justify-center items-center">
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full max-h-80 object-contain rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="bg-gray-100 p-4 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft />
            </button>
            <div className="text-sm text-gray-600">
              Halaman {currentIndex + 1} / {slides.length}
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex === slides.length - 1}
              className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolonganDarah;