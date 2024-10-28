import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KamiSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar di sebelah kiri */}
        <div data-aos="fade-right" className="text-center md:text-left">
          <img
            src="https://via.placeholder.com/300"
            alt="Gambar BioFun"
            className="rounded-lg shadow-lg mx-auto md:mx-0"
          />
        </div>
        {/* Kata-kata singkat di sebelah kanan */}
        <div data-aos="fade-left" className="text-center md:text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Selamat Datang di BioFun
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Platform pembelajaran biologi yang interaktif dan menyenangkan untuk anak-anak! 
            BioFun adalah platform pembelajaran biologi yang dirancang untuk membantu anak-anak memahami konsep-konsep biologi
          secara interaktif dan menyenangkan. Kami percaya bahwa pembelajaran tidak harus membosankan. Dengan menggunakan teknologi
          dan metode pengajaran yang inovatif, kami ingin menciptakan lingkungan yang membuat belajar biologi menjadi pengalaman
          yang mengasyikkan.
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto text-center">
        
        <h2 
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {/* Foto profil orang pertama */}
          <div data-aos="zoom-in">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile 1"
              className="rounded-full w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nama 1</h3>
          </div>
          {/* Foto profil orang kedua */}
          <div data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile 2"
              className="rounded-full w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nama 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <KamiSection />
      <AboutUs />
    </div>
  );
};

export default Home;
