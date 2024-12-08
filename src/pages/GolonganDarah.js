import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GolonganDarah = () => {
  const slides = [
    {
      title: 'Pengantar Golongan Darah',
      subtitle: 'Apa itu Golongan Darah?',
      content:
        'Golongan darah adalah sistem pengelompokan darah manusia berdasarkan keberadaan atau ketiadaan antigen tertentu di permukaan sel darah merah. Sistem golongan darah yang paling umum digunakan adalah sistem ABO dan Rhesus (Rh). Dalam sistem ABO, darah dikelompokkan menjadi empat golongan utama: A, B, AB, dan O, berdasarkan dua jenis antigen, yaitu antigen A dan antigen B, yang ada atau tidak ada di permukaan sel darah merah. Selain itu, sistem Rhesus mengelompokkan darah berdasarkan ada tidaknya antigen D, dengan golongan darah Rh-positif (Rh⁺) dan Rh-negatif (Rh⁻). Golongan darah sangat penting dalam berbagai aspek medis, terutama dalam transfusi darah, di mana kesesuaian golongan darah antara pendonor dan penerima sangat mempengaruhi keberhasilan transfusi dan mencegah reaksi imun yang berbahaya. Selain itu, golongan darah juga berperan dalam kehamilan, karena ketidakcocokan golongan darah ibu dan janin, terutama dalam sistem Rhesus, dapat menyebabkan komplikasi serius seperti penyakit hemolitik pada bayi. Oleh karena itu, pemahaman tentang golongan darah sangat penting dalam dunia medis.',
      backgroundStyle: 'from-blue-50 to-blue-100',
    },
    {
      title: 'Penggolongan Darah Sistem RH',
      subtitle: 'Sistem Rhesus',
      content:
        'sistem Rhesus (Rh) juga berperan penting dalam penggolongan darah. Penggolongan darah Rh ditentukan oleh adanya atau tidak adanya antigen D pada permukaan sel darah merah. Jika sel darah merah mengandung antigen D, maka golongan darah tersebut disebut Rh-positif (Rh⁺), sedangkan jika tidak ada antigen D, golongan darah disebut Rh-negatif (Rh⁻). Sistem Rh ini sangat penting dalam transfusi darah dan juga dalam kehamilan. Misalnya, seorang ibu yang memiliki golongan darah Rh-negatif dapat mengalami masalah jika janin yang dikandungnya memiliki golongan darah Rh-positif, karena tubuh ibu dapat memproduksi antibodi yang menyerang sel darah merah janin, yang dikenal dengan penyakit hemolitik pada bayi baru lahir. Oleh karena itu, dalam situasi kehamilan dengan ketidakcocokan Rh, ibu yang Rh-negatif sering diberi suntikan imunoglobulin anti-D untuk mencegah pembentukan antibodi yang dapat membahayakan janin.',
      backgroundStyle: 'from-red-50 to-red-100',
    },
    {
      title: 'Penggolongan Darah Sistem ABO',
      subtitle: 'Sistem ABO',
      content:
        'Sistem ABO didasarkan pada adanya dua jenis antigen utama, yaitu antigen A dan antigen B, yang terdapat pada permukaan sel darah merah. Berdasarkan keberadaan atau ketidakhadiran antigen ini, golongan darah dibagi menjadi empat tipe: A, B, AB, dan O. Golongan darah A memiliki antigen A di permukaan sel darah merah dan antibodi anti-B di plasma darah, sedangkan golongan darah B memiliki antigen B dan antibodi anti-A. Golongan darah AB memiliki kedua antigen A dan B, namun tidak memiliki antibodi terhadap keduanya, menjadikannya golongan darah universal penerima. Sementara itu, golongan darah O tidak memiliki antigen A maupun B, namun memiliki antibodi anti-A dan anti-B, sehingga dapat diberikan kepada hampir semua golongan darah sebagai golongan darah universal pendonor.',
      backgroundStyle: 'from-green-50 to-green-100',
    },
    {
      title: 'Uji Golongan Darah',
      subtitle: 'Bagaimana Mengetahui Golongan Darah?',
      content:
        'Uji golongan darah adalah prosedur laboratorium yang digunakan untuk menentukan tipe golongan darah seseorang berdasarkan adanya antigen tertentu pada permukaan sel darah merah dan antibodi yang ada dalam plasma darah. Uji ini dilakukan dengan mencampurkan darah seseorang dengan serum yang mengandung antibodi khusus untuk antigen A, B, dan Rh. Pada sistem ABO, darah dicampur dengan serum yang mengandung antibodi anti-A dan anti-B untuk melihat apakah darah menggumpal, yang menunjukkan adanya reaksi antara antigen pada sel darah merah dengan antibodi di serum. Jika darah menggumpal dengan serum anti-A, maka individu tersebut memiliki antigen A dan golongan darahnya adalah A. Jika menggumpal dengan serum anti-B, golongan darahnya adalah B. Jika menggumpal dengan keduanya, golongan darahnya adalah AB, dan jika tidak menggumpal dengan kedua serum, golongan darahnya adalah O. Untuk sistem Rh, darah dicampur dengan serum yang mengandung antibodi anti-D. Jika darah menggumpal, berarti individu tersebut Rh-positif (Rh⁺), sedangkan jika tidak menggumpal, berarti Rh-negatif (Rh⁻). Uji golongan darah ini sangat penting dalam berbagai aplikasi medis, terutama dalam transfusi darah, untuk memastikan kecocokan golongan darah antara pendonor dan penerima, serta dalam kehamilan untuk mencegah komplikasi terkait ketidakcocokan golongan darah Rh.',
      backgroundStyle: 'from-purple-50 to-purple-100',
      image: 'https://roboguru-forum-cdn.ruangguru.com/f6db0394-5819-4a59-a9c9-42d496ae5d20.png',
    },
    {
      title: 'Transfusi Darah',
      subtitle: 'Prosedur Pemberian Darah',
      content:
        'Transfusi darah adalah prosedur medis yang melibatkan pemberian darah atau produk darah ke dalam tubuh seseorang melalui pembuluh darah, yang umumnya dilakukan untuk menggantikan darah yang hilang akibat cedera, operasi, atau kondisi medis tertentu. Proses ini sangat penting dalam menyelamatkan nyawa dan mendukung pasien yang mengalami kekurangan darah atau komponen darah seperti sel darah merah, plasma, atau trombosit. Sebelum transfusi, golongan darah penerima dan pendonor harus dicocokkan dengan cermat untuk menghindari reaksi penolakan tubuh terhadap darah yang diberikan. Penggolongan darah dilakukan berdasarkan sistem ABO dan Rhesus (Rh), yang mengklasifikasikan darah menjadi beberapa tipe berdasarkan adanya antigen pada permukaan sel darah merah. Penerima golongan darah O, misalnya, hanya dapat menerima darah dari pendonor dengan golongan darah O, sedangkan penerima golongan darah AB dapat menerima darah dari hampir semua golongan darah. Dalam sistem Rh, perbedaan antara Rh-positif dan Rh-negatif juga harus diperhatikan untuk mencegah reaksi imun yang berbahaya. Transfusi darah tidak hanya melibatkan sel darah merah, tetapi juga dapat mencakup komponen darah lainnya seperti trombosit (untuk pasien dengan gangguan pembekuan darah) atau plasma (untuk menggantikan volume darah yang hilang). Meskipun transfusi darah merupakan prosedur yang menyelamatkan nyawa, namun tetap ada risiko seperti reaksi alergi, infeksi, atau kesalahan dalam pencocokan golongan darah, yang dapat menimbulkan komplikasi. Oleh karena itu, prosedur ini memerlukan pemantauan yang cermat dan kehati-hatian dalam pelaksanaannya.',
      backgroundStyle: 'from-indigo-50 to-indigo-100',
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-bold">
              {slides[currentIndex].title}
            </h1>
          </div>
  
          {/* Content Section */}
          <div className="p-6 overflow-y-auto flex-1">
            <h2 className="text-xl font-semibold text-purple-600 mb-4">
              {slides[currentIndex].subtitle}
            </h2>
  
            <p className="text-gray-700 mb-4">{slides[currentIndex].content}</p>
  
            {slides[currentIndex].image && (
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full rounded-lg shadow-md mb-4 max-h-64 object-cover"
              />
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
