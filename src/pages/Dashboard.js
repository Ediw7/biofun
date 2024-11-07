// Dashboard.js

import React, { useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState("Pengguna");
  const [progress, setProgress] = useState(25);
  const [points, setPoints] = useState(150);
  const [achievements, setAchievements] = useState(["Master Fotosintesis", "Penjelajah Biologi"]);
  const [latestActivity, setLatestActivity] = useState("Animasi Fotosintesis");

  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      background: 'linear-gradient(to bottom, #f0f4f8, #d9e2ec)',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      padding: '20px',
      background: 'linear-gradient(90deg, #7926A8, #E0207D)',
      color: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    subheader: {
      color: '#fff',
      fontSize: '18px',
      marginTop: '8px',
      fontStyle: 'italic',
    },
    progressSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px',
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    progressLabel: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    progressContainer: {
      flex: 1,
      height: '16px',
      backgroundColor: '#e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      marginLeft: '15px',
    },
    progressBar: {
      width: `${progress}%`,
      height: '100%',
      backgroundColor: '#4CAF50',
    },
    cardContainer: {
      display: 'flex',
      gap: '20px',
      marginTop: '30px',
      flexWrap: 'wrap',
    },
    card: {
      flex: '1 1 30%',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    leaderboard: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#4CAF50',
      borderRadius: '12px',
      color: '#fff',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    dailyFact: {
      padding: '20px',
      backgroundColor: '#e3f2fd',
      borderRadius: '12px',
      marginTop: '30px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    factText: {
      fontSize: '16px',
      fontStyle: 'italic',
      color: '#333',
    },
    button: {
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#45A049',
      },
    },
    footer: {
      marginTop: '40px',
      textAlign: 'center',
      fontSize: '16px',
      color: '#555',
      fontStyle: 'italic',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1>Selamat Datang di Dashboard BioFun!</h1>
        <p style={styles.subheader}>Halo, {user}! Siap untuk petualangan biologi hari ini?</p>
      </div>

      {/* Progress Overview */}
      <div style={styles.progressSection}>
        <span style={styles.progressLabel}>Ikhtisar Kemajuan</span>
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}></div>
        </div>
        <span>{progress}%</span>
      </div>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Pencapaian: {achievements.join(', ')}</p>
      <p>Terakhir Ditonton: {latestActivity}</p>

      {/* Interactive Cards */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Hewan 🐾</h3>
          <button style={styles.button} onClick={() => alert("Mulai Modul Hewan")}>Mulai Belajar</button>
        </div>
        <div style={styles.card}>
          <h3>Tumbuhan 🌱</h3>
          <button style={styles.button} onClick={() => alert("Mulai Modul Tumbuhan")}>Mulai Belajar</button>
        </div>
        <div style={styles.card}>
          <h3>Tubuh Manusia 🧬</h3>
          <button style={styles.button} onClick={() => alert("Mulai Modul Tubuh Manusia")}>Mulai Belajar</button>
        </div>
      </div>

      {/* Daily Fact */}
      <div style={styles.dailyFact}>
        <h4>Fakta Biologi Harian</h4>
        <p style={styles.factText}>Tahukah kamu? Tubuh manusia memiliki lebih dari 37 triliun sel!</p>
        <button style={styles.button} onClick={() => alert("Jawab Tantangan!")}>Tantangan Harian</button>
      </div>

      {/* Leaderboard */}
      <div style={styles.leaderboard}>
        <h4>Papan Peringkat</h4>
        <p>Top Learners - Peringkat kamu: Top 10% Penjelajah BioFun</p>
      </div>

      {/* Recommendations */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h4>Rekomendasi Modul</h4>
          <p>Berdasarkan minat kamu di Tumbuhan, kami sarankan "Permainan Fotosintesis".</p>
        </div>
        <div style={styles.card}>
          <h4>Target Mingguan</h4>
          <p>Selesaikan 3 permainan tentang Kerajaan Hewan minggu ini!</p>
        </div>
      </div>

      {/* Feedback Section */}
      <div style={styles.dailyFact}>
        <h4>Umpan Balik & Testimoni</h4>
        <p>"Platform ini sangat membantu anak saya memahami biologi!" - Orang Tua</p>
        <button style={styles.button} onClick={() => alert("Beri Umpan Balik")}>Beri Umpan Balik</button>
      </div>

      {/* Reward Section */}
      <div style={styles.card}>
        <h4>Sistem Poin</h4>
        <p>Poin Kamu: {points}</p>
        <button style={styles.button} onClick={() => alert("Tukar Poin")}>Tukar Poin dengan Hadiah</button>
      </div>

      {/* Motivational Message */}
      <div style={styles.footer}>
        <p>“Teruslah menjelajah! Setiap sel di tubuhmu mendukungmu!”</p>
      </div>
    </div>
  );
}

export default Dashboard;
