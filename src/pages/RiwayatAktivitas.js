// ActivityHistory.js

import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function ActivityHistory() {
  const [activities, setActivities] = useState([
    { name: "Pembelajaran", value: 40 },
    { name: "Permainan", value: 30 },
    { name: "Eksperimen", value: 30 },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { title: "Modul Fotosintesis", date: "2024-11-01", status: "Selesai" },
    { title: "Permainan Tumbuhan", date: "2024-11-02", status: "Selesai" },
    { title: "Eksperimen Sel Hewan", date: "2024-11-03", status: "Sedang Berlangsung" },
  ]);

  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to bottom, #f0f4f8, #d9e2ec)',
    },
    header: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    activitySection: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    activityCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '15px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    activityText: {
      fontSize: '16px',
      color: '#333',
    },
    activityStatus: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      borderRadius: '8px',
      padding: '5px 10px',
    },
    chartContainer: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
    },
    chartTitle: {
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
    
  };

  const COLORS = ['#4CAF50', '#FF9800', '#03A9F4']; // Warna untuk chart (Pembelajaran, Permainan, Eksperimen)

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1>Riwayat Aktivitas BioFun</h1>
      </div>

      {/* Recent Activities */}
      <div style={styles.activitySection}>
        <h2>Aktivitas Terbaru</h2>
        {recentActivities.map((activity, index) => (
          <div key={index} style={styles.activityCard}>
            <div style={styles.activityText}>
              <strong>{activity.title}</strong> - {activity.date}
            </div>
            <div style={styles.activityStatus}>{activity.status}</div>
          </div>
        ))}
      </div>

      {/* Grafik Aktivitas */}
      <div style={styles.chartContainer}>
        <div style={styles.chartTitle}>Pembagian Waktu Aktivitas</div>
        <PieChart width={200} height={200}>
          <Pie
            data={activities}
            dataKey="value"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {activities.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default ActivityHistory;
