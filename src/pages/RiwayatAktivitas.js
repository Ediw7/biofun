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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-left">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-down"
          >
            Riwayat Aktivitas BioFun
          </h1>
          <p 
            className="text-xl mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Pantau perkembangan belajar biologi Anda!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chart Section */}
          <div 
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            data-aos="fade-right"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-purple-800">Distribusi Aktivitas Belajar</h2>
            <div className="flex justify-center">
              <PieChart width={300} height={300}>
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
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            data-aos="fade-left"
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Statistik Pembelajaran</h2>
            <div className="space-y-4">
              <div 
                className="flex justify-between items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-purple-600" />
                  <span className="font-medium text-gray-800">Total Waktu Belajar</span>
                </div>
                <span className="font-semibold text-purple-600">135 menit</span>
              </div>
              <div 
                className="flex justify-between items-center p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3">
                  <Trophy size={20} className="text-pink-600" />
                  <span className="font-medium text-gray-800">Rata-rata Nilai</span>
                </div>
                <span className="font-semibold text-pink-600">87.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div 
          className="mt-8 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-800">Aktivitas Terbaru</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-200"
                data-aos="fade-left"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="flex items-center gap-4">
                  {getActivityIcon(activity.type)}
                  <div>
                    <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <CalendarDays size={16} className="text-purple-600" />
                      <span>{activity.date}</span>
                      <Clock size={16} className="ml-2 text-purple-600" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {activity.score && (
                    <div className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full font-medium">
                      Nilai: {activity.score}
                    </div>
                  )}
                  <span className={`px-3 py-1 text-white rounded-full ${getStatusColor(activity.status)}`}>
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