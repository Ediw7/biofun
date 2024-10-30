import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KamiSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 p-8 text-center">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Selamat Datang di BioFun!
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Platform pembelajaran biologi yang interaktif dan menyenangkan untuk anak-anak! 
          BioFun adalah platform pembelajaran biologi yang dirancang untuk membantu anak-anak memahami konsep-konsep biologi
          secara interaktif dan menyenangkan. Kami percaya bahwa pembelajaran tidak harus membosankan. Dengan menggunakan teknologi
          dan metode pengajaran yang inovatif, kami ingin menciptakan lingkungan yang membuat belajar biologi menjadi pengalaman
          yang mengasyikkan.
        </p>
      </div>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div data-aos="fade-right" className="w-full md:w-1/2 md:text-left text-center p-4">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Misi kami adalah untuk menyediakan platform pembelajaran yang dapat diakses dan interaktif untuk anak-anak agar mereka
            lebih mudah memahami biologi. Kami fokus pada cara-cara kreatif yang membuat pembelajaran terasa menyenangkan dan bermakna.
          </p>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://www.beberoosie.co.id/wp-content/uploads/2018/10/BR-Article-10-2-510x340.png" alt="Mission Image 1" className="rounded-lg shadow-lg" />
            <img src="https://png.pngtree.com/png-vector/20240324/ourlarge/pngtree-adorable-students-in-the-classroom-utilizing-a-laptop-and-tablet-png-image_12046944.png" alt="Mission Image 2" className="rounded-lg shadow-lg" />
            <img src="https://guruinovatif.s3.ap-southeast-1.amazonaws.com/9216/20230905_115533_0000.png" alt="Mission Image 3" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetOurLeaders = () => {
  const profileImages = [
    { src: 'https://ibighit.com/bts/images/profile/proof/member/member-jin.jpg', name: 'Jin', position: 'CEO' },
    { src: 'https://ibighit.com/bts/images/profile/proof/member/member-jhope.jpg', name: 'J-Hope', position: 'COO' },
    // Tambahkan profil tambahan di sini jika diperlukan
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 
          data-aos="fade-up"
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Meet Our Leaders
        </h2>
        <p data-aos="fade-up" className="text-lg text-gray-700 mb-8">
          Kenali lebih dekat tim pemimpin kami yang berdedikasi untuk memberikan pengalaman belajar terbaik bagi Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-center">
          {profileImages.map((profile, index) => (
            <div data-aos="zoom-in" data-aos-delay={index * 100} key={index} className="flex flex-col items-center text-center">
              <img
                src={profile.src}
                alt={`Profile of ${profile.name}`}
                className="rounded-full w-40 h-40 mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
              <p className="text-gray-500">{profile.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <KamiSection />
      <OurMission />
      <MeetOurLeaders />
    </div>
  );
};

export default Home;
