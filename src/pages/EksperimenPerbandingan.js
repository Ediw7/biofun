import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate dari react-router-dom

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
    // Periksa validasi data di sini (opsional)
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
    <div className="min-h-screen bg-teal-200 p-6">
      {/* Header */}
      <div className="bg-yellow-400 p-4 rounded flex items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Tentukan Golongan Darah dan Kecocokan Pendonor
        </h1>
      </div>

      {/* Tabel Golongan Darah */}
      <div className="bg-white mt-6 p-4 rounded shadow-lg">
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border">Pasien / Pendonor</th>
              <th className="p-2 border">Anti-A</th>
              <th className="p-2 border">Anti-B</th>
              <th className="p-2 border">Anti-AB</th>
              <th className="p-2 border">Anti-D</th>
              <th className="p-2 border">Gol. Darah</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td className="border p-2 text-center">
                  {index < 2 ? `Pasien ${index + 1}` : `Pendonor ${index - 1}`}
                </td>
                {["+", "-", "+", "-"].map((val, colIndex) => (
                  <td key={colIndex} className="border p-2 text-center">
                    {val}
                  </td>
                ))}
                <td className="border p-2 text-center">
                  <select
                    value={selectedGolDar[index] || ""}
                    onChange={(e) => handleGolDarChange(index, e.target.value)}
                    className="border border-gray-300 p-1 rounded"
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
        <p className="mt-2 text-sm text-center">
          (+) Menggumpal &nbsp; | &nbsp; (-) Tidak Menggumpal
        </p>
      </div>

      {/* Pilih Pendonor */}
      <div className="bg-white mt-6 p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold text-center mb-4">
          Pilih Pendonor untuk Pasien
        </h2>
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Pasien {index + 1}</p>
            <select
              value={selectedPendonor[index] || ""}
              onChange={(e) => handlePendonorChange(index, e.target.value)}
              className="border border-gray-300 p-2 rounded w-2/3"
            >
              <option value="">Pilih Pendonor</option>
              <option value="1">Pendonor 1</option>
              <option value="2">Pendonor 2</option>
            </select>
          </div>
        ))}
      </div>

      {/* Button Lanjut */}
      <div className="mt-6 text-center">
        <button
          onClick={handleLanjut}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow hover:bg-orange-600 transition"
        >
          Lanjut
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-80 p-6 rounded shadow-lg text-center relative">
            <h2 className="text-lg font-bold text-red-500 mb-4">
              HASIL ANALISIS KURANG TEPAT
            </h2>
            <button
              className="bg-orange-400 px-6 py-2 text-white rounded-lg hover:bg-orange-500 transition"
              onClick={handleLihatKunciJawaban} // Menambahkan fungsi navigasi ke halaman Kunci Jawaban
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
