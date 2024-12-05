import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EksperimenGolonganDarah = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleNavigate = () => {
    navigate('/golongan-darah'); // Sesuaikan dengan rute tujuan
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Eksperimen Golongan Darah 🩸
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Pelajari bagaimana golongan darah cocok untuk transfusi melalui simulasi virtual ini!
          </p>
        </div>
      </div>

      {/* Experiment Section */}
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4"
          data-aos="zoom-in"
        >
          {/* Gambar */}
          <div className="flex-1">
            <img
              src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-child-injured-in-bike-accident-2d-vector-isolated-illustration-picture-image_7945424.png"
              alt="Kecelakaan Golongan Darah"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Teks */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Studi Kasus</h2>
            <p className="text-gray-600 mb-4">
              Telah terjadi kecelakaan lalu lintas yang melibatkan dua buah mobil. Kedua pengemudi 
              membutuhkan transfusi darah, dan masing-masing keluarga telah menyiapkan 1 pendonor.
            </p>
            <p className="text-gray-600 mb-4">
              Bantulah dokter untuk memeriksa golongan darah kedua pengemudi dan pendonornya agar 
              transfusi dapat dilakukan dengan tepat.
            </p>
            <button
              onClick={handleNavigate}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Mulai Eksperimen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EksperimenGolonganDarah;
