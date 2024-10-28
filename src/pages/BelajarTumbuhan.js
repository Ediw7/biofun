import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const BelajarTumbuhanGambar = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Data gambar (URL bisa diganti dengan gambar sesuai kebutuhan)
  const imageCategories = [
    {
      id: 'flowering',
      images: [
        'https://source.unsplash.com/100x100/?flower1',
        'https://source.unsplash.com/100x100/?flower2',
        'https://source.unsplash.com/100x100/?flower3',
        'https://source.unsplash.com/100x100/?flower4',
      ]
    },
    {
      id: 'trees',
      images: [
        'https://source.unsplash.com/100x100/?tree1',
        'https://source.unsplash.com/100x100/?tree2',
        'https://source.unsplash.com/100x100/?tree3',
        'https://source.unsplash.com/100x100/?tree4',
      ]
    },
    {
      id: 'shrubs',
      images: [
        'https://source.unsplash.com/100x100/?shrub1',
        'https://source.unsplash.com/100x100/?shrub2',
        'https://source.unsplash.com/100x100/?shrub3',
        'https://source.unsplash.com/100x100/?shrub4',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Galeri Tumbuhan 🌿
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Scroll untuk melihat lebih banyak gambar dari berbagai jenis tumbuhan.
          </p>
        </div>
      </div>

      {/* Image Galleries */}
      <div className="container mx-auto px-4 py-8">
        {imageCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-green-600" data-aos="fade-right">
              {category.id.charAt(0).toUpperCase() + category.id.slice(1)}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="bg-white p-2 shadow-lg rounded-lg overflow-hidden"
                  data-aos="zoom-in"
                >
                  <img
                    src={image}
                    alt="Tumbuhan"
                    className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BelajarTumbuhanGambar;
