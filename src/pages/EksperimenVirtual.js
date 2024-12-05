import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const menuItems = [
  {
    id: 1,
    title: 'Kompetensi',
    icon: '📋',
    detail: `Kompetensi yang ingin dicapai melalui eksperimen virtual ini mencakup:
- Pemahaman Konsep Biologi: Memahami proses biologis seperti fotosintesis, respirasi, dan daur nitrogen.`,
  },
  {
    id: 2,
    title: 'Materi',
    icon: '📖',
    slides: [
      {
        title: 'Pengantar',
        content: 'Golongan darah adalah sistem pengelompokan darah manusia berdasarkan keberadaan atau ketiadaan antigen tertentu di permukaan sel darah merah. Sistem golongan darah yang paling umum digunakan adalah sistem ABO dan Rhesus (Rh). Dalam sistem ABO, darah dikelompokkan menjadi empat golongan utama: A, B, AB, dan O, berdasarkan dua jenis antigen, yaitu antigen A dan antigen B, yang ada atau tidak ada di permukaan sel darah merah. Selain itu, sistem Rhesus mengelompokkan darah berdasarkan ada tidaknya antigen D, dengan golongan darah Rh-positif (Rh⁺) dan Rh-negatif (Rh⁻). Golongan darah sangat penting dalam berbagai aspek medis, terutama dalam transfusi darah, di mana kesesuaian golongan darah antara pendonor dan penerima sangat mempengaruhi keberhasilan transfusi dan mencegah reaksi imun yang berbahaya. Selain itu, golongan darah juga berperan dalam kehamilan, karena ketidakcocokan golongan darah ibu dan janin, terutama dalam sistem Rhesus, dapat menyebabkan komplikasi serius seperti penyakit hemolitik pada bayi. Oleh karena itu, pemahaman tentang golongan darah sangat penting dalam dunia medis.',
      },
      {
        title: 'Penggolongan Darah Sistem RH',
        content: 'sistem Rhesus (Rh) juga berperan penting dalam penggolongan darah. Penggolongan darah Rh ditentukan oleh adanya atau tidak adanya antigen D pada permukaan sel darah merah. Jika sel darah merah mengandung antigen D, maka golongan darah tersebut disebut Rh-positif (Rh⁺), sedangkan jika tidak ada antigen D, golongan darah disebut Rh-negatif (Rh⁻). Sistem Rh ini sangat penting dalam transfusi darah dan juga dalam kehamilan. Misalnya, seorang ibu yang memiliki golongan darah Rh-negatif dapat mengalami masalah jika janin yang dikandungnya memiliki golongan darah Rh-positif, karena tubuh ibu dapat memproduksi antibodi yang menyerang sel darah merah janin, yang dikenal dengan penyakit hemolitik pada bayi baru lahir. Oleh karena itu, dalam situasi kehamilan dengan ketidakcocokan Rh, ibu yang Rh-negatif sering diberi suntikan imunoglobulin anti-D untuk mencegah pembentukan antibodi yang dapat membahayakan janin.',
      },
      {
        title: 'Penggolongan Darah Sistem ABO',
        content:  'Sistem ABO didasarkan pada adanya dua jenis antigen utama, yaitu antigen A dan antigen B, yang terdapat pada permukaan sel darah merah. Berdasarkan keberadaan atau ketidakhadiran antigen ini, golongan darah dibagi menjadi empat tipe: A, B, AB, dan O. Golongan darah A memiliki antigen A di permukaan sel darah merah dan antibodi anti-B di plasma darah, sedangkan golongan darah B memiliki antigen B dan antibodi anti-A. Golongan darah AB memiliki kedua antigen A dan B, namun tidak memiliki antibodi terhadap keduanya, menjadikannya golongan darah universal penerima. Sementara itu, golongan darah O tidak memiliki antigen A maupun B, namun memiliki antibodi anti-A dan anti-B, sehingga dapat diberikan kepada hampir semua golongan darah sebagai golongan darah universal pendonor.',
      },
      {
        title: 'Uji Golongan Darah',
        content: 'Uji golongan darah adalah prosedur laboratorium yang digunakan untuk menentukan tipe golongan darah seseorang berdasarkan adanya antigen tertentu pada permukaan sel darah merah dan antibodi yang ada dalam plasma darah. Uji ini dilakukan dengan mencampurkan darah seseorang dengan serum yang mengandung antibodi khusus untuk antigen A, B, dan Rh. Pada sistem ABO, darah dicampur dengan serum yang mengandung antibodi anti-A dan anti-B untuk melihat apakah darah menggumpal, yang menunjukkan adanya reaksi antara antigen pada sel darah merah dengan antibodi di serum. Jika darah menggumpal dengan serum anti-A, maka individu tersebut memiliki antigen A dan golongan darahnya adalah A. Jika menggumpal dengan serum anti-B, golongan darahnya adalah B. Jika menggumpal dengan keduanya, golongan darahnya adalah AB, dan jika tidak menggumpal dengan kedua serum, golongan darahnya adalah O. Untuk sistem Rh, darah dicampur dengan serum yang mengandung antibodi anti-D. Jika darah menggumpal, berarti individu tersebut Rh-positif (Rh⁺), sedangkan jika tidak menggumpal, berarti Rh-negatif (Rh⁻). Uji golongan darah ini sangat penting dalam berbagai aplikasi medis, terutama dalam transfusi darah, untuk memastikan kecocokan golongan darah antara pendonor dan penerima, serta dalam kehamilan untuk mencegah komplikasi terkait ketidakcocokan golongan darah Rh.',
        Image: 'https://roboguru-forum-cdn.ruangguru.com/f6db0394-5819-4a59-a9c9-42d496ae5d20.png',
      },
      {
        title: 'Transfusi Darah',
        content: 'Transfusi darah adalah prosedur medis yang melibatkan pemberian darah atau produk darah ke dalam tubuh seseorang melalui pembuluh darah, yang umumnya dilakukan untuk menggantikan darah yang hilang akibat cedera, operasi, atau kondisi medis tertentu. Proses ini sangat penting dalam menyelamatkan nyawa dan mendukung pasien yang mengalami kekurangan darah atau komponen darah seperti sel darah merah, plasma, atau trombosit. Sebelum transfusi, golongan darah penerima dan pendonor harus dicocokkan dengan cermat untuk menghindari reaksi penolakan tubuh terhadap darah yang diberikan. Penggolongan darah dilakukan berdasarkan sistem ABO dan Rhesus (Rh), yang mengklasifikasikan darah menjadi beberapa tipe berdasarkan adanya antigen pada permukaan sel darah merah. Penerima golongan darah O, misalnya, hanya dapat menerima darah dari pendonor dengan golongan darah O, sedangkan penerima golongan darah AB dapat menerima darah dari hampir semua golongan darah. Dalam sistem Rh, perbedaan antara Rh-positif dan Rh-negatif juga harus diperhatikan untuk mencegah reaksi imun yang berbahaya. Transfusi darah tidak hanya melibatkan sel darah merah, tetapi juga dapat mencakup komponen darah lainnya seperti trombosit (untuk pasien dengan gangguan pembekuan darah) atau plasma (untuk menggantikan volume darah yang hilang). Meskipun transfusi darah merupakan prosedur yang menyelamatkan nyawa, namun tetap ada risiko seperti reaksi alergi, infeksi, atau kesalahan dalam pencocokan golongan darah, yang dapat menimbulkan komplikasi. Oleh karena itu, prosedur ini memerlukan pemantauan yang cermat dan kehati-hatian dalam pelaksanaannya.',
        Image: 'https://seratusinstitute.com/medias2/images/home/news/2018/09/17/Kecocokan%20darah.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Eksperimen Virtual',
    icon: '🧪',
    detail: 'Eksperimen virtual ini mencakup simulasi berbagai eksperimen biologi. Misalnya, percobaan yang melibatkan pengamatan pengaruh berbagai kondisi terhadap fotosintesis.',
    image: 'https://png.pngtree.com/illustration/20220705/ourmid/pngtree-bicycle-accident-in-childhood-2d-vector-isolated-illustration-image_78011.png',
  },
  {
    id: 4,
    title: 'Evaluasi',
    icon: '✅',
    detail: 'Evaluasi berupa kuis interaktif dan laporan praktik.',
  },
];
 
const EksperimenVirtual = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCardClick = (item) => {
    setSelectedCard(item);
    setCurrentSlide(0); // Reset slide to the first one
  };

  const nextSlide = () => {
    if (selectedCard && selectedCard.slides && currentSlide < selectedCard.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-gradient-to-b from-teal-50 to-green-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-green-500 text-center py-16">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          Eksperimen Virtual Golongan Darah Manusia
        </h1>
      </div>

      {/* Menu Cards */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white shadow-lg rounded-lg flex flex-col items-center justify-center py-6 hover:shadow-xl transition cursor-pointer
                ${selectedCard?.id === item.id ? 'bg-teal-500 text-white' : 'bg-white'}`}
              onClick={() => handleCardClick(item)}
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Section */}
      {selectedCard && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-12 relative">
          <h2 className="text-3xl font-extrabold text-teal-500 mb-4">
            {selectedCard.title} - Detail
          </h2>

          {/* Eksperimen Virtual Content */}
          {selectedCard.id === 3 ? (
            <div className="flex flex-col items-center">
              <img
                src={selectedCard.image}
                alt="Eksperimen Virtual"
                className="w-1/2 h-auto rounded-lg mb-6"
              />
              <div className="text-lg text-gray-700 text-center">
                <p>{selectedCard.detail}</p>
              </div>
              {/* Navigation Buttons */}
              <div className="flex mt-4">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 ${
                    currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === 0} // Eksperimen Virtual hanya memiliki 1 slide
                  className={`ml-4 p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 ${
                    currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ) : (
            // If slides are available, show slides content
            selectedCard.slides && (
              <>
                <h3 className="text-2xl font-bold text-teal-600 mb-4">
                  {selectedCard.slides[currentSlide].title}
                </h3>
                <div className="p-4 border rounded-lg text-gray-700 mb-6">
                  <p className="text-lg whitespace-pre-line">
                    {selectedCard.slides[currentSlide].content}
                  </p>
                </div>

                {/* Navigation Icons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 ${
                      currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === selectedCard.slides.length - 1}
                    className={`p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 ${
                      currentSlide === selectedCard.slides.length - 1
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </>
            )
          )}
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-12 pb-12"></div>
    </div>
  );
};

export default EksperimenVirtual;