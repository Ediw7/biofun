import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const developers = [
    { 
      name: 'Edi Wicoro', 
      role: 'Ketua Tim',
      image: 'gambar/edi.png',
      skills: ['Web Developer', 'UI/UX Design']
    },
    { 
      name: 'Mazroha Anis Sugesti', 
      role: 'Anggota',
      image: 'gambar/anis.png',
      skills: ['Web Developer', 'UI/UX Design']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <div data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Tentang BioFun
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            BioFun adalah platform revolusioner untuk pembelajaran biologi anak-anak. 
            Kami percaya bahwa pendidikan sains harus menyenangkan, interaktif, dan mudah dipahami. 
            Misi kami adalah menginspirasi generasi muda untuk jatuh cinta dengan dunia biologi.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div data-aos="fade-right" className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Kisah Kami
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perjalanan BioFun dimulai dari passion kami untuk membuat sains lebih mudah dimengerti dan menarik bagi anak-anak. 
              Kami melihat bahwa banyak anak-anak merasa takut dan bosan dengan pelajaran biologi. 
              Oleh karena itu, kami memutuskan untuk menciptakan platform yang tidak hanya mendidik, 
              tetapi juga menghibur dan menginspirasi.
            </p>
          </div>
          <div data-aos="fade-left" className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-64">
              <img 
                src="gambar/biofunstory.png" 
                alt="BioFun Story" 
                className="h-full w-full object-cover rounded-lg shadow-lg"
                data-aos="zoom-in"
              />
            </div>
            <div className="h-64">
              <img 
                src="gambar/biofunlearning.png" 
                alt="BioFun Learning" 
                className="h-full w-full object-cover rounded-lg shadow-lg"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </div>

       {/* Mission and Vision Section */}
       <div className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Misi dan Visi Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-12 px-8">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-md" data-aos="flip-left">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Misi</h3>
                <p className="text-gray-700">
                  Membuat pembelajaran biologi menjadi pengalaman yang menyenangkan, 
                  interaktif, dan mudah dipahami bagi anak-anak. Kami berkomitmen untuk 
                  menginspirasi rasa ingin tahu ilmiah dan mencintai alam.
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl shadow-md" data-aos="flip-right">
                <h3 className="text-2xl font-semibold mb-4 text-purple-800">Visi</h3>
                <p className="text-gray-700">
                  Menjadi platform pendidikan biologi terdepan yang mengubah cara anak-anak 
                  memandang dan mempelajari sains, menciptakan generasi yang cerdas, 
                  kreatif, dan peduli terhadap lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Team Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Tim Pengembang Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
            {developers.map((dev, index) => (
              <div 
                key={index} 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={dev.image}
                    alt={`Profile of ${dev.name}`}
                    className="w-full h-80 object-cover"
                    data-aos="flip-up"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h3 className="text-2xl font-bold">{dev.name}</h3>
                    <p className="text-sm opacity-80">{dev.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    {dev.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
