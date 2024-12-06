import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TabelGolonganDarah = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const serumOptions = [
    { nama: "Serum Anti-A", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-A.png" },
    { nama: "Serum Anti-B", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-B.png" },
    { nama: "Serum Anti-AB", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-AB.png" },
    { nama: "Serum Anti-D", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-D.png" },
  ];

  const agglutinationOptions = [
    { status: "menggumpal", image: "gambar/menggumpal.png" },
    { status: "tidak menggumpal", image: "gambar/tidak-menggumpal.png" },
  ];

  const [selectedSerum, setSelectedSerum] = useState(0);
  const [agglutinationStates, setAgglutinationStates] = useState(
    Array(2 * serumOptions.length).fill(0)
  );

  const [showInstruction, setShowInstruction] = useState(false); // State untuk pop-up instruksi

  const handleSerumClick = (index) => {
    setSelectedSerum(index);
  };

  const handleAgglutinationClick = (index) => {
    setAgglutinationStates((prevState) =>
      prevState.map((state, i) => (i === index ? (state + 1) % agglutinationOptions.length : state))
    );
  };

  const handleNavigate = () => {
    navigate("/eksperimen-perbandingan"); // Navigasi ke halaman /eksperimen-hasil
  };

  const renderTable = () => (
    <div className="container mx-auto mt-6 bg-white shadow-lg rounded p-4">
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">Pasien \ Serum</th>
            {serumOptions.map((serum, index) => (
              <th key={index} className="border px-4 py-2 text-center">
                <img
                  src={serum.image}
                  alt={serum.nama}
                  className={`w-16 h-16 mx-auto cursor-pointer ${
                    selectedSerum === index ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => handleSerumClick(index)}
                />
                <p className="mt-2 text-sm">{serum.nama}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(2)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border px-4 py-2 text-center">
                <img
                  src="https://via.placeholder.com/100?text=Pasien"
                  alt={`Pasien ${rowIndex + 1}`}
                  className="w-24 h-24 mx-auto"
                />
              </td>
              {serumOptions.map((_, colIndex) => {
                const cellIndex = rowIndex * serumOptions.length + colIndex;
                const cellState =
                  agglutinationOptions[agglutinationStates[cellIndex]] || {};

                return (
                  <td
                    key={colIndex}
                    className="border px-4 py-2 text-center cursor-pointer"
                    onClick={() => handleAgglutinationClick(cellIndex)}
                  >
                    <img
                      src={cellState.image}
                      alt={cellState.status}
                      className="w-12 h-12 mx-auto"
                    />
                    <p className="mt-2 text-sm">{cellState.status}</p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* Header dengan Judul */}
      <div className="bg-blue-500 text-white py-4 px-6 text-center relative">
        <h1 className="text-2xl font-bold">Tabel Golongan Darah</h1>
        <p>Klik gambar serum atau kolom aglutinasi untuk interaksi</p>
      </div>

      {/* Button Instruksi (Ikon Alat) */}
      <div className="absolute top-4 left-4">
        <button className="p-2 flex flex-col items-center" onClick={() => setShowInstruction(true)}>
          <img
            src="https://cdn.icon-icons.com/icons2/3871/PNG/512/menu_icon_244496.png"
            alt="Alat"
            className="w-14 h-14"
          />
          <span className="text-blue-500 font-semibold">Alat</span>
        </button>
      </div>

      {/* Pop-Up Instruksi */}
      {showInstruction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Instruksi</h2>
            <p className="text-sm mb-4">
              Setelah menentukan Alat dan Bahan, Tahap selanjutnya : <br />
              1. Klik salah satu serum untuk memilih jenis serum (diusahakan untuk mengurutkan dari Serum A, Serum B, Serum AB, Serum D.<br />
              2. Amati perubahan setelah memilih serum dimana akan menyesuaikan apakah darah pasien/pendonor menggumpal atau tidak menggumpal.<br />
              3. Ulangi tahapan pada bagian uji golongan darah Pendonor. <br />
              4. Klik tombol "Tahap Selanjutnya" untuk melanjutkan ke langkah berikutnya.<br />

            </p>
            <button
              onClick={() => setShowInstruction(false)} // Tutup pop-up instruksi
              className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* First Card */}
      <div className="bg-gray-200 p-4 rounded shadow-lg mb-4 mt-6">
        <h2 className="text-lg font-bold mb-4 text-center">Uji Lab Golongan Darah Pasien</h2>
        {renderTable()}
      </div>

      {/* Second Card */}
      <div className="bg-gray-200 p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-center">Uji Lab Golongan Darah Pasien</h2>
        {renderTable()}
      </div>

      {/* Button Mulai Eksperimen */}
      <div className="text-center mt-8">
        <button
          onClick={handleNavigate} // Navigasi ke halaman hasil
          className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Tahap Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default TabelGolonganDarah;
