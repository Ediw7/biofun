import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriManusia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const humans = [
    { id: 1, name: 'Manusia A', image: 'https://source.unsplash.com/100x100/?human1', description: 'Deskripsi Manusia A.' },
    { id: 2, name: 'Manusia B', image: 'https://source.unsplash.com/100x100/?human2', description: 'Deskripsi Manusia B.' },
    { id: 3, name: 'Manusia C', image: 'https://source.unsplash.com/100x100/?human3', description: 'Deskripsi Manusia C.' },
    { id: 4, name: 'Manusia D', image: 'https://source.unsplash.com/100x100/?human4', description: 'Deskripsi Manusia D.' },
    { id: 5, name: 'Manusia E', image: 'https://source.unsplash.com/100x100/?human5', description: 'Deskripsi Manusia E.' },
    { id: 6, name: 'Manusia F', image: 'https://source.unsplash.com/100x100/?human6', description: 'Deskripsi Manusia F.' },
    { id: 7, name: 'Manusia G', image: 'https://source.unsplash.com/100x100/?human7', description: 'Deskripsi Manusia G.' },
    { id: 8, name: 'Manusia H', image: 'https://source.unsplash.com/100x100/?human8', description: 'Deskripsi Manusia H.' }
  ];

  const handleCardClick = (id) => {
    navigate(`/manusia/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Manusia 👤
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Klik pada gambar manusia untuk mempelajari lebih lanjut!
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {humans.map((human) => (
            <div
              key={human.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              data-aos="zoom-in"
              onClick={() => handleCardClick(human.id)}
            >
              <img
                src={human.image}
                alt={human.name}
                className="object-cover w-full h-32 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{human.name}</h3>
              <p className="text-gray-600">{human.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriManusia;
