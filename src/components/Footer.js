import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">BioFun</h3>
            <p className="text-white">
              Kami adalah platform belajar yang memberikan informasi menarik tentang biologi dan banyak lagi.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-2">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-500 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500 transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-white mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-white text-sm">© {new Date().getFullYear()} Edi Wicoro & Mazroha Anis Sugesti</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-pink-500 transition duration-200 mx-2">Kebijakan Privasi</a>
            <a href="#" className="text-white hover:text-pink-500 transition duration-200 mx-2">Syarat dan Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
