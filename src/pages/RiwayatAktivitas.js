import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { CalendarDays, Clock, Trophy, BookOpen, Gamepad2, FlaskConical } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RiwayatAktivitas = () => {
  const [activities, setActivities] = useState([
    { name: "Pembelajaran", value: 40 },
    { name: "Permainan", value: 30 },
    { name: "Eksperimen", value: 30 },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { 
      title: "Modul Fotosintesis", 
      date: "2024-11-01", 
      status: "Selesai",
      type: "Pembelajaran",
      duration: "45 menit",
      score: 85
    },
    { 
      title: "Permainan Tumbuhan", 
      date: "2024-11-02", 
      status: "Selesai",
      type: "Permainan",
      duration: "30 menit",
      score: 90
    },
    { 
      title: "Eksperimen Sel Hewan", 
      date: "2024-11-03", 
      status: "Sedang Berlangsung",
      type: "Eksperimen",
      duration: "60 menit",
      score: null
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return 'bg-pink-500';
      case 'Sedang Berlangsung':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'Pembelajaran':
        return <BookOpen size={20} className="text-purple-600" />;
      case 'Permainan':
        return <Gamepad2 size={20} className="text-pink-600" />;
      case 'Eksperimen':
        return <FlaskConical size={20} className="text-purple-500" />;
      default:
        return null;
    }
  };

  const COLORS = ['#A855F7', '#EC4899', '#D946EF'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-left">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-aos="fade-right"
          >
            Riwayat Aktivitas BioFun 📜
          </h1>
          <p 
            className="text-base md:text-xl mb-8"
            data-aos="fade-left" data-aos-delay="200"
          >
            Pantau perkembangan belajar biologi Anda!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Chart Section */}
          <div 
            className="bg-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            data-aos="fade-right"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center text-purple-800">Distribusi Aktivitas Belajar</h2>
            <div className="flex justify-center">
              <PieChart width={280} height={280} className="w-full max-w-[300px]">
                <Pie
                  data={activities}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {activities.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>

          {/* Statistics Section */}
          <div 
            className="bg-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            data-aos="fade-left"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-purple-800">Statistik Pembelajaran</h2>
            <div className="space-y-4">
              <div 
                className="flex justify-between items-center p-3 md:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Clock size={18} className="text-purple-600" />
                  <span className="font-medium text-sm md:text-base text-gray-800">Total Waktu Belajar</span>
                </div>
                <span className="font-semibold text-sm md:text-base text-purple-600">135 menit</span>
              </div>
              <div 
                className="flex justify-between items-center p-3 md:p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Trophy size={18} className="text-pink-600" />
                  <span className="font-medium text-sm md:text-base text-gray-800">Rata-rata Nilai</span>
                </div>
                <span className="font-semibold text-sm md:text-base text-pink-600">87.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div 
          className="mt-6 md:mt-8 bg-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-purple-800">Aktivitas Terbaru</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 md:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-200 space-y-2 md:space-y-0"
                data-aos="fade-left"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="flex items-center gap-3 md:gap-4 w-full">
                  {getActivityIcon(activity.type)}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm md:text-base text-gray-800">{activity.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <CalendarDays size={14} className="text-purple-600" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-purple-600" />
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-end items-center gap-2 mt-2 md:mt-0 w-full md:w-auto">
                  {activity.score && (
                    <div className="px-2 py-1 text-xs md:text-sm bg-pink-100 text-pink-800 rounded-full font-medium">
                      Nilai: {activity.score}
                    </div>
                  )}
                  <span className={`px-2 py-1 text-xs md:text-sm text-white rounded-full ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatAktivitas;