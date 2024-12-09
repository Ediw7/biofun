import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabelGolonganDarah = () => {
  const navigate = useNavigate();

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
  const [patientAgglutinationStates, setPatientAgglutinationStates] = useState(
    [1, 0, 1, 0] // menggumpal, tidak, menggumpal, tidak
  );
  const [donorAgglutinationStates, setDonorAgglutinationStates] = useState(
    [
      ...Array(serumOptions.length).fill(0), // Pendonor 1: tidak menggumpal semua
      [1, 0, 0, 0] // Pendonor 2: menggumpal, tidak, tidak, tidak
    ].flat()
  );

  const [showInstruction, setShowInstruction] = useState(false);

  const handleSerumClick = (index) => {
    setSelectedSerum(index);
  };

  const handlePatientAgglutinationClick = (index) => {
    setPatientAgglutinationStates((prevState) =>
      prevState.map((state, i) => (i === index ? (state + 1) % agglutinationOptions.length : state))
    );
  };

  const handleDonorAgglutinationClick = (index) => {
    setDonorAgglutinationStates((prevState) =>
      prevState.map((state, i) => (i === index ? (state + 1) % agglutinationOptions.length : state))
    );
  };

  const handleNavigate = () => {
    navigate("/eksperimen-perbandingan");
  };

  const renderPatientTable = () => (
    <div className="container mx-auto mt-6 bg-white shadow-lg rounded p-4">
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">Pasien</th>
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
          <tr>
            <td className="border px-4 py-2 text-center">
              <img
                src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-child-injured-in-bike-accident-2d-vector-isolated-illustration-picture-image_7945424.png"
                alt="Pasien"
                className="w-24 h-24 mx-auto"
              />
            </td>
            {serumOptions.map((_, colIndex) => {
              const cellState =
                agglutinationOptions[patientAgglutinationStates[colIndex]] || {};

              return (
                <td
                  key={colIndex}
                  className="border px-4 py-2 text-center cursor-pointer"
                  onClick={() => handlePatientAgglutinationClick(colIndex)}
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
        </tbody>
      </table>
    </div>
  );

  const renderDonorTable = () => (
    <div className="container mx-auto mt-6 bg-white shadow-lg rounded p-4">
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">Pendonor</th>
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
  {[0, 1].map((donorIndex) => (
    <tr key={donorIndex}>
      {/* Kolom gambar pendonor */}
      <td className="border px-4 py-2 text-center">
        <div className="flex flex-col items-center">
          <img
            src={`/gambar/pendonor.jpg`} // Ubah jalur ke gambar folder lokal
            alt={`Pendonor ${donorIndex + 1}`}
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-2 text-sm font-medium">{`Pendonor ${donorIndex + 1}`}</p>
        </div>
      </td>

      {/* Kolom serum */}
      {serumOptions.map((_, colIndex) => {
        const cellIndex = donorIndex * serumOptions.length + colIndex;
        const cellState =
          agglutinationOptions[donorAgglutinationStates[cellIndex]] || {};

        return (
          <td
            key={colIndex}
            className={`border px-4 py-2 text-center ${
              donorAgglutinationStates[cellIndex] === 0
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={() =>
              donorAgglutinationStates[cellIndex] === 0 &&
              handleDonorAgglutinationClick(cellIndex)
            }
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4 sm:p-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-8 py-10 sm:py-16 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Uji Golongan Darah
          </h1>
          <p className="text-sm sm:text-xl mb-4">
            Ikuti petunjuk di bawah ini untuk menguji golongan darah pasien dan pendonor.
          </p>
          <button
            onClick={() => setShowInstruction(true)}
            className="bg-white text-purple-600 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Instruksi
          </button>
        </div>
      </div>
  
      {/* Modal Instruksi */}
      {showInstruction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4 text-purple-600">Instruksi</h2>
            <p className="text-sm mb-4">
              1. Klik salah satu serum untuk memilih jenis serum (diusahakan untuk mengurutkan dari Serum A, Serum B, Serum AB, Serum D).<br />
              2. Amati perubahan setelah memilih serum dimana akan menyesuaikan apakah darah pasien/pendonor menggumpal atau tidak menggumpal.<br />
              3. Ulangi tahapan pada bagian uji golongan darah Pendonor.<br />
              4. Klik tombol "Tahap Selanjutnya" untuk melanjutkan ke langkah berikutnya.<br />
            </p>
            <button
              onClick={() => setShowInstruction(false)}
              className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
  
      {/* Konten */}
      <div className="bg-gray-100 p-4">
        {/* Tabel Golongan Darah */}
        <div className="bg-gray-200 p-4 rounded shadow-lg mb-4 mt-6">
          <h2 className="text-lg font-bold mb-4 text-center">Uji Lab Golongan Darah Pasien</h2>
          {renderPatientTable()}
        </div>
  
        <div className="bg-gray-200 p-4 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-center">Uji Lab Golongan Darah Pendonor</h2>
          {renderDonorTable()}
        </div>
  
        {/* Tombol Tahap Selanjutnya */}
        <div className="text-center mt-8">
          <button
            onClick={handleNavigate}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Tahap Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
  
  
};

export default TabelGolonganDarah;