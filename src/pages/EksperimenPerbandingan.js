import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EksperimenPerbandingan = () => {
  const [selectedGolDar, setSelectedGolDar] = useState([
    null, // Golongan darah pasien 1
    null, // Golongan darah pasien 2
    null, // Golongan darah pendonor 1
    null, // Golongan darah pendonor 2
  ]);

  const golonganDarahOptions = ["A", "B", "AB", "O"];
  const [selectedPendonor, setSelectedPendonor] = useState([null, null]);

  const [showPopup, setShowPopup] = useState(false);
  
  // Menambahkan hook useNavigate untuk melakukan navigasi
  const navigate = useNavigate();

  const handleGolDarChange = (index, value) => {
    const updatedGolDar = [...selectedGolDar];
    updatedGolDar[index] = value;
    setSelectedGolDar(updatedGolDar);
  };

  const handlePendonorChange = (index, value) => {
    const updatedPendonor = [...selectedPendonor];
    updatedPendonor[index] = value;
    setSelectedPendonor(updatedPendonor);
  };

  const handleLanjut = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Fungsi untuk menavigasi ke halaman "Kunci Jawaban"
  const handleLihatKunciJawaban = () => {
    navigate("/eksperimen-hasil"); // Pindah ke halaman Kunci Jawaban
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-8 py-6 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Uji Golongan Darah</h1>
          <p className="text-sm md:text-base mb-2">
            Ikuti petunjuk di bawah ini untuk menguji golongan darah pasien dan pendonor.
          </p>
        </div>
      </div>

      {/* Tabel Golongan Darah */}
      <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border">Pasien / Pendonor</th>
              <th className="p-4 border">Anti-A</th>
              <th className="p-4 border">Anti-B</th>
              <th className="p-4 border">Anti-AB</th>
              <th className="p-4 border">Anti-D</th>
              <th className="p-4 border">Gol. Darah</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td className="border p-4 text-center">
                  {index < 2 ? `Pasien ${index + 1}` : `Pendonor ${index - 1}`}
                </td>
                {["+", "-", "+", "-"].map((val, colIndex) => (
                  <td key={colIndex} className="border p-4 text-center">
                    {val}
                  </td>
                ))}
                <td className="border p-4 text-center">
                  <select
                    value={selectedGolDar[index] || ""}
                    onChange={(e) => handleGolDarChange(index, e.target.value)}
                    className="border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Pilih Darah</option>
                    {golonganDarahOptions.map((gol, golIndex) => (
                      <option key={golIndex} value={gol}>
                        {gol}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-center text-gray-600">
          (+) Menggumpal &nbsp; | &nbsp; (-) Tidak Menggumpal
        </p>
      </div>

      {/* Pilih Pendonor */}
      <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
        <h2 className="text-lg font-semibold text-center mb-6">
          Pilih Pendonor untuk Pasien
        </h2>
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Pasien {index + 1}</p>
            <select
              value={selectedPendonor[index] || ""}
              onChange={(e) => handlePendonorChange(index, e.target.value)}
              className="border border-gray-300 p-2 rounded-xl w-2/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Pilih Pendonor</option>
              <option value="1">Pendonor 1</option>
              <option value="2">Pendonor 2</option>
            </select>
          </div>
        ))}
      </div>

      {/* Button Lanjut */}
      <div className="mt-8 text-center">
        <button
          onClick={handleLanjut}
          className="bg-purple-600 text-white px-10 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          Lanjut
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-2xl shadow-lg text-center relative">
            <h2 className="text-xl font-bold text-red-500 mb-4">
              HASIL ANALISIS KURANG TEPAT
            </h2>
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
              onClick={handleLihatKunciJawaban}
            >
              LIHAT KUNCI JAWABAN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EksperimenPerbandingan;
