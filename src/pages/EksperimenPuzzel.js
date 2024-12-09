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
    { status: "tidak menggumpal", image: "gambar/tidak-menggumpal.png" },
    { status: "menggumpal", image: "gambar/menggumpal.png" },
  ];

  const [selectedSerum, setSelectedSerum] = useState(0);
  const [patientAgglutinationStates, setPatientAgglutinationStates] = useState(
    [0, 0, 0, 0] // tidak menggumpal, menggumpal, tidak, menggumpal
  );
  const [donorAgglutinationStates, setDonorAgglutinationStates] = useState(
    [
      ...Array(serumOptions.length).fill(0), // Pendonor 1: menggumpal semua
      [0, 0, 0, 0] // Pendonor 2: tidak menggumpal, menggumpal, menggumpal, menggumpal
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

  const renderTable = (title, renderData, handleAgglutinationClick, agglutinationStates) => (
    <div className="w-full bg-white shadow-lg rounded p-4 mb-4">
      <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border px-2 py-1 text-center w-1/6">
                {title.includes("Pasien") ? "Pasien" : "Pendonor"}
              </th>
              {serumOptions.map((serum, index) => (
                <th key={index} className="border px-2 py-1 text-center">
                  <img
                    src={serum.image}
                    alt={serum.nama}
                    className={`w-12 h-12 mx-auto cursor-pointer`}
                    onClick={() => handleSerumClick(index)}
                  />
                  <p className="mt-1 text-xs">{serum.nama}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderData.map((_, donorIndex) => (
              <tr key={donorIndex}>
                <td className="border px-2 py-1 text-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={title.includes("Pasien") 
                        ? "https://png.pngtree.com/png-clipart/20230815/original/pngtree-child-injured-in-bike-accident-2d-vector-isolated-illustration-picture-image_7945424.png"
                        : `/gambar/pendonor.jpg`
                      }
                      alt={title.includes("Pasien") ? "Pasien" : `Pendonor ${donorIndex + 1}`}
                      className="w-16 h-16 mx-auto"
                    />
                    <p className="mt-1 text-xs font-medium">
                      {title.includes("Pasien") ? "Pasien" : `Pendonor ${donorIndex + 1}`}
                    </p>
                  </div>
                </td>
                {serumOptions.map((_, colIndex) => {
                  const cellIndex = title.includes("Pasien") 
                    ? colIndex 
                    : donorIndex * serumOptions.length + colIndex;
                  const cellState = agglutinationOptions[agglutinationStates[cellIndex]] || {};

                  return (
                    <td
                      key={colIndex}
                      className="border px-2 py-1 text-center cursor-pointer"
                      onClick={() => handleAgglutinationClick(cellIndex)}
                    >
                      <img
                        src={cellState.image}
                        alt={cellState.status}
                        className="w-10 h-10 mx-auto"
                      />
                      <p className="mt-1 text-xs">{cellState.status}</p>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4 py-6 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Uji Golongan Darah</h1>
          <p className="text-sm md:text-base mb-2">
            Ikuti petunjuk di bawah ini untuk menguji golongan darah pasien dan pendonor.
          </p>
          <button
            onClick={() => setShowInstruction(true)}
            className="bg-white text-purple-600 font-bold px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md hover:bg-gray-100 transition text-sm md:text-base"
          >
            Instruksi
          </button>
        </div>
      </div>

      {/* Modal Instruksi */}
      {showInstruction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-lg font-bold mb-2 text-purple-600">Instruksi</h2>
          <div className="text-xs md:text-sm mb-4">
            <h3 className="font-semibold text-purple-600">Instruksi Umum</h3>
            <p className="mb-2">
              <strong>1. BACA SEMUA INSTRUKSI DENGAN TELITI.<br /></strong>
              2. Klik gambar darah untuk mengubah tipe darah pada tabel.<br />
              3. Amati perubahan.<br />
              4. Ulangi tahapan pada bagian uji golongan darah Pendonor.<br />
              5. Klik tombol "Tahap Selanjutnya" untuk melanjutkan jika tipe darah sudah sesuai.<br />
            </p>
          </div>
          <div className="text-xs md:text-sm mb-4">
            <h3 className="font-semibold text-purple-600">Instruksi Pasien</h3>
            <p className="mb-2">
            <strong>Pasien:</strong> Tidak menggumpal, Menggumpal, Tidak Menggumpal, Menggumpal<br />
            </p>
          </div>
          <div className="text-xs md:text-sm mb-4">
            <h3 className="font-semibold text-purple-600">Instruksi Pendonor</h3>
            <p className="mb-2">
              <strong>Pendonor 1:</strong> Menggumpal, Menggumpal, Menggumpal, Menggumpal<br />
              <strong>Pendonor 2:</strong> Tidak menggumpal, Menggumpal, Menggumpal, Menggumpal<br />
            </p>
          </div>
          <button
            onClick={() => setShowInstruction(false)}
            className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition text-sm"
          >
            Tutup
          </button>
        </div>
      </div>
      
      )}

      {/* Konten */}
      <div className="space-y-4">
        {renderTable(
          "Uji Lab Golongan Darah Pasien", 
          [1], 
          handlePatientAgglutinationClick, 
          patientAgglutinationStates
        )}
        {renderTable(
          "Uji Lab Golongan Darah Pendonor", 
          [1, 1], 
          handleDonorAgglutinationClick, 
          donorAgglutinationStates
        )}

        {/* Tombol Tahap Selanjutnya */}
        <div className="text-center">
          <button
            onClick={handleNavigate}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Tahap Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabelGolonganDarah;