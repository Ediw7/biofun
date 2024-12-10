import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EksperimenPerbandingan = () => {
  const [selectedGolDar, setSelectedGolDar] = useState([null, null, null]); // Untuk pasien dan dua pendonor
  const golonganDarahOptions = ["A", "B", "AB", "O"];
  const [selectedPendonor, setSelectedPendonor] = useState([null, null]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');
  
  // Menambahkan hook useNavigate untuk melakukan navigasi
  const navigate = useNavigate();

  const handleGolDarChange = (index, value) => {
    const updatedGolDar = [...selectedGolDar];
    updatedGolDar[index] = value;
    setSelectedGolDar(updatedGolDar);
  };

  const handlePendonorChange = (index, value) => {
    const updatedPendonor = [...selectedPendonor];
    updatedPendonor[0] = value;
    setSelectedPendonor(updatedPendonor);
  };

  const handleLanjut = () => {
    // Jawaban yang benar
    const correctBloodTypes = {
      pasien: 'A',
      pendonor1: 'O',
      pendonor2: 'B'
    };

    const selectedPasienGolDar = selectedGolDar[0];
    const selectedPendonorIndex = selectedPendonor[0];

    // Cek apakah jawaban benar
    if (
      selectedPasienGolDar === correctBloodTypes.pasien &&
      selectedPendonorIndex === '1' &&
      selectedGolDar[1] === correctBloodTypes.pendonor1
    ) {
      setPopupType('benar');
    } else {
      setPopupType('salah');
    }
    
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupType('');
  };

  const handleLihatKunciJawaban = () => {
    navigate("/eksperimen-hasil");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      {/* Hero Section - Responsive */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-6 py-4 md:py-6 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-4xl font-bold mb-2">Uji Golongan Darah</h1>
          <p className="text-xs md:text-base mb-2">
            Pilih jawaban golongan darah berdasarkan hasil uji coba.
          </p>
        </div>
      </div>

      {/* Tabel Golongan Darah - Responsive */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl mb-6 overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 md:p-4 border text-xs md:text-base">Pasien / Pendonor</th>
              <th className="p-2 md:p-4 border text-xs md:text-base">Anti-A</th>
              <th className="p-2 md:p-4 border text-xs md:text-base">Anti-B</th>
              <th className="p-2 md:p-4 border text-xs md:text-base">Anti-AB</th>
              <th className="p-2 md:p-4 border text-xs md:text-base">Anti-D</th>
              <th className="p-2 md:p-4 border text-xs md:text-base">Gol. Darah</th>
            </tr>
          </thead>
          <tbody>
            {/* Pasien 1 */}
            <tr>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">Pasien</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">+</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">+</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center">
                <select
                  value={selectedGolDar[0] || ""}
                  onChange={(e) => handleGolDarChange(0, e.target.value)}
                  className="border border-gray-300 p-1 md:p-2 text-xs md:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Pilih Gol. Darah</option>
                  {golonganDarahOptions.map((gol, golIndex) => (
                    <option key={golIndex} value={gol}>
                      {gol}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Pendonor 1 */}
            <tr>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">Pendonor 1</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center">
                <select
                  value={selectedGolDar[1] || ""}
                  onChange={(e) => handleGolDarChange(1, e.target.value)}
                  className="border border-gray-300 p-1 md:p-2 text-xs md:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Pilih Gol. Darah</option>
                  {golonganDarahOptions.map((gol, golIndex) => (
                    <option key={golIndex} value={gol}>
                      {gol}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Pendonor 2 */}
            <tr>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">Pendonor 2</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">-</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">+</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">+</td>
              <td className="border p-2 md:p-4 text-center text-xs md:text-base">+</td>
              <td className="border p-2 md:p-4 text-center">
                <select
                  value={selectedGolDar[2] || ""}
                  onChange={(e) => handleGolDarChange(2, e.target.value)}
                  className="border border-gray-300 p-1 md:p-2 text-xs md:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Pilih Gol. Darah</option>
                  {golonganDarahOptions.map((gol, golIndex) => (
                    <option key={golIndex} value={gol}>
                      {gol}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 md:mt-4 text-xs md:text-sm text-center text-gray-600">
          (+) Menggumpal &nbsp; | &nbsp; (-) Tidak Menggumpal
        </p>
      </div>

      {/* Pilih Pendonor - Responsive */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl mb-6">
        <h2 className="text-base md:text-lg font-semibold text-center mb-4">
          Pilih Pendonor untuk Pasien
        </h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs md:text-base text-gray-700">Pasien</p>
          <select
            value={selectedPendonor[0] || ""}
            onChange={(e) => handlePendonorChange(0, e.target.value)}
            className="border border-gray-300 p-1 md:p-2 text-xs md:text-base rounded-xl w-2/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Pilih Pendonor</option>
            <option value="1">Pendonor 1</option>
            <option value="2">Pendonor 2</option>
          </select>
        </div>
      </div>

      {/* Button Lanjut - Responsive */}
      <div className="mt-6 text-center">
        <button
          onClick={handleLanjut}
          className="bg-purple-600 text-white px-6 md:px-10 py-2 md:py-3 text-xs md:text-base rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          Cek Hasil
        </button>
      </div>

     {/* Popup - Responsive and Elegant */}
{showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 border-4 border-blue-400 relative">
      {/* Close Button */}
      <button
        onClick={handleClosePopup}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* Header */}
      <h3
        className={`text-2xl font-bold mb-4 ${
          popupType === 'benar' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {popupType === 'benar' ? 'SELAMAT! JAWABAN ANDA BENAR' : 'HASIL ANALISIS KURANG TEPAT'}
      </h3>
      {/* Content */}
      <div className="text-gray-700 text-center mb-6">
        {popupType === 'benar'
          ? 'Anda telah memberikan jawaban yang tepat. Teruskan usaha yang baik ini!'
          : 'Silakan lihat kunci jawaban untuk memahami kesalahan Anda.'}
      </div>
      {/* Buttons */}
      <div className="space-y-4">
        {popupType === 'benar' ? (
          <button
            onClick={handleClosePopup}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            Tutup
          </button>
        ) : (
          <>
            <button
              onClick={handleLihatKunciJawaban}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition transform hover:scale-105"
            >
              Lihat Kunci Jawaban
            </button>
            <button
              onClick={handleClosePopup}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
            >
              Tutup
            </button>
          </>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default EksperimenPerbandingan;