import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';


const HeroSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,
        });
      }, []);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-blue-50 pt-16 pb-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 
              data-aos="fade-right"
              className="font-display text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent font-bold mb-6"
            >
              Petualangan Seru Belajar Biologi! 
            </h1>
            <p 
              data-aos="fade-left" 
              data-aos-delay="100"
              className="font-body text-xl text-gray-700 mb-8"
            >
              Jelajahi dunia biologi dengan animasi, games, dan eksperimen yang mengasyikkan! 🌟
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-body text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Mulai Belajar Sekarang 🚀
              </button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div data-aos="fade-left" data-aos-delay="300" className="absolute top-0 right-0">
              <span role="img" aria-label="microscope" className="text-8xl filter drop-shadow-lg">🔬</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="absolute bottom-0 left-0">
              <span role="img" aria-label="dna" className="text-8xl filter drop-shadow-lg">🧬</span>
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span role="img" aria-label="plant" className="text-8xl filter drop-shadow-lg">🌱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutBioFun = () => (
  <div className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
    <div className="container mx-auto px-4 text-center">
      <h2 
        data-aos="fade-up"
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Apa itu BioFun?
      </h2>
      <p 
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
      >
        BioFun adalah platform belajar biologi yang dirancang khusus untuk anak-anak SD agar mereka bisa belajar dengan cara yang menyenangkan dan interaktif.
      </p>
      <button 
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-body text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        Pelajari Fitur Kami
      </button>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 
        data-aos="fade-up"
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Fitur-Fitur Menarik BioFun
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2 text-purple-600">Animasi Interaktif</h3>
          <p className="text-gray-600">Tonton animasi seru dan pelajari biologi dengan cara yang menyenangkan!</p>
        </div>
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-4xl mb-4">🧩</div>
          <h3 className="text-xl font-bold mb-2 text-pink-600">Games Edukatif</h3>
          <p className="text-gray-600">Mainkan game seru untuk uji pengetahuanmu!</p>
        </div>
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-4xl mb-4">🧪</div>
          <h3 className="text-xl font-bold mb-2 text-orange-600">Eksperimen Virtual</h3>
          <p className="text-gray-600">Lakukan eksperimen langsung secara virtual!</p>
        </div>
      </div>
    </div>
  </div>
);

const LearningContent = () => (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 
          data-aos="fade-up"
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Coba Belajar Sekarang!
        </h2>
        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg text-gray-600 mb-12"
        >
          Ayo, tonton videonya dan pelajari hal-hal menarik tentang biologi!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kartu 1: Hewan */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🐾</div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Belajar Hewan</h3>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
              Tonton Sekarang
            </button>
          </div>
  
          {/* Kartu 2:  Tumbuhan */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-pink-600">Belajar Tumbuhan</h3>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
              Tonton Sekarang
            </button>
          </div>
  
          {/* Kartu 3: Manusia */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🧑</div>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Belajar Manusia</h3>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
              Tonton Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  

  const testimonialData = [
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      comment: '"Sejak menggunakan BioFun, nilai biologi anak saya meningkat drastis! Animasi tentang sistem pencernaan membuatnya sangat mudah memahami konsep yang kompleks. Sekarang dia selalu bersemangat belajar biologi!"',
      name: 'Ibu Rina',
      role: 'Orang Tua Siswa Kelas 5 SD',
      color: 'text-blue-600', // Warna yang disederhanakan
      gradientFrom: 'from-blue-50', // Gradien yang disederhanakan
      gradientTo: 'to-pink-50' // Gradien yang disederhanakan
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      comment: '"Sebagai guru SD, saya sangat terkesan dengan eksperimen virtual di BioFun. Anak-anak bisa melihat proses fotosintesis secara interaktif. Mereka jadi lebih aktif bertanya dan berdiskusi di kelas!"',
      name: 'Pak Ahmad',
      role: 'Guru IPA SD',
      color: 'text-blue-600',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-pink-50'
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      comment: '"Game siklus hidup katak di BioFun sangat seru! Awalnya aku tidak suka biologi, tapi sekarang jadi pelajaran favoritku. Aku suka dapat badge dan rewards setiap menyelesaikan tantangan!"',
      name: 'Doni',
      role: 'Siswa Kelas 6 SD',
      color: 'text-blue-600',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-pink-50'
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      comment: '"BioFun membuat belajar di rumah jadi menyenangkan! Aku suka karena bisa mengulang materi kapan saja, dan animasinya lucu-lucu. Quiz interaktifnya juga membantu aku mengingat pelajaran lebih baik!"',
      name: 'Sari',
      role: 'Siswa Kelas 4 SD',
      color: 'text-blue-600',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-pink-50'
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      comment: '"Sebagai wali kelas, saya melihat peningkatan signifikan dalam pemahaman siswa tentang biologi. Mereka jadi lebih percaya diri saat presentasi dan praktikum. BioFun benar-benar membantu proses pembelajaran!"',
      name: 'Ibu Diana',
      role: 'Wali Kelas 5 SD',
      color: 'text-blue-600',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-pink-50'
    }
  ];
  
  
  const TestimonialsSection = () => {
    const scrollContainer = useRef(null);
  
    const scroll = (direction) => {
      if (scrollContainer.current) {
        const cardWidth = 400; // Approximate width of each card including margins
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
  
    // Check scroll position to show/hide buttons
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
  
    const checkScrollButtons = () => {
      if (scrollContainer.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };
  
    useEffect(() => {
      const container = scrollContainer.current;
      if (container) {
        container.addEventListener('scroll', checkScrollButtons);
        // Initial check
        checkScrollButtons();
      }
  
      // Initialize AOS
      AOS.init();
  
      return () => {
        if (container) {
          container.removeEventListener('scroll', checkScrollButtons);
        }
      };
    }, []);
  
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-aos="fade-up">
              Apa Kata Mereka Tentang BioFun?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Dengarkan pengalaman mereka yang telah merasakan manfaat belajar dengan BioFun
            </p>
          </div>
  
          <div className="relative">
            {showLeftButton && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
            )}
  
            <div
              ref={scrollContainer}
              className="flex overflow-x-auto scrollbar-hide space-x-6 px-4 pb-4"
              style={{ scrollBehavior: 'smooth', overflowY: 'hidden' }}
            >
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 transform transition-all duration-300 hover:scale-105"
                  data-aos="zoom-in" // Tambahkan efek AOS
                  data-aos-delay={`${index * 100}`} // Delay untuk animasi
                  data-aos-duration="500" // Durasi animasi
                >
                  <div className={`p-6 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-xl shadow-lg h-full`}>
                    <div className="text-4xl mb-4">{testimonial.rating}</div>
                    <p className="text-lg text-gray-700 mb-6 min-h-[120px]">{testimonial.comment}</p>
                    <div className="flex flex-col items-center">
                      <h3 className={`text-lg font-bold ${testimonial.color}`}>{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {showRightButton && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutBioFun />
      <FeaturesSection />
      <LearningContent />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
