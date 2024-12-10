import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabelGolonganDarah = () => {
  const navigate = useNavigate();

  const serumOptions = [
    { nama: "Serum Anti-A", image: "gambar/seruma.png" },
    { nama: "Serum Anti-B", image: "gambar/serumb.png" },
    { nama: "Serum Anti-AB", image: "gambar/serumab.png" },
    { nama: "Serum Anti-D", image: "gambar/serumd.png" },
  ];

  const agglutinationOptions = [
    { status: "tidak menggumpal", image: "gambar/tidak-menggumpal.png" },
    { status: "menggumpal", image: "gambar/menggumpal.png" },
  ];

  const [selectedSerum, setSelectedSerum] = useState(0);
  const [patientAgglutinationStates, setPatientAgglutinationStates] = useState([0, 0, 0, 0]);
  const [donorAgglutinationStates, setDonorAgglutinationStates] = useState([
    0, 0, 0, 0, // Pendonor 1
    0, 0, 0, 0, // Pendonor 2
  ]);
  const [showInstruction, setShowInstruction] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

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

  const checkMatch = () => {
    const patientExpected = [1, 0, 1, 0];
    const donorExpected = [
      [0, 0, 0, 0], // Pendonor 1
      [0, 1, 1, 1], // Pendonor 2
    ];

    const isPatientMatch = patientAgglutinationStates.every((state, i) => state === patientExpected[i]);
    const isDonorMatch = donorExpected.every((donor, donorIndex) =>
      donor.every((state, i) => state === donorAgglutinationStates[donorIndex * 4 + i])
    );

    if (isPatientMatch && isDonorMatch) {
      setShowSuccessPopup(true);
      setShowErrorPopup(false);
    } else {
      setShowSuccessPopup(false);
      setShowErrorPopup(true);
    }
  };

  const handleNextStep = () => {
    checkMatch();
    if (showSuccessPopup) navigate("/eksperimen-perbandingan");
  };

  const renderTable = (title, handleAgglutinationClick, agglutinationStates) => (
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
            {/* Tampilkan hanya 1 baris untuk Pasien */}
            {title.includes("Pasien") && (
              <tr>
                <td className="border px-2 py-1 text-center">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-child-injured-in-bike-accident-2d-vector-isolated-illustration-picture-image_7945424.png"
                      alt="Pasien"
                      className="w-16 h-16 mx-auto"
                    />
                    <p className="mt-1 text-xs font-medium">Pasien</p>
                  </div>
                </td>
                {serumOptions.map((_, colIndex) => {
                  const cellState = agglutinationOptions[agglutinationStates[colIndex]] || {};
                  return (
                    <td
                      key={colIndex}
                      className="border px-2 py-1 text-center cursor-pointer"
                      onClick={() => handleAgglutinationClick(colIndex)}
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
            )}
  
            {/* Tampilkan baris untuk Pendonor */}
            {title.includes("Pendonor") && (
              <>
                {[...Array(2)].map((_, donorIndex) => (
                  <tr key={donorIndex}>
                    <td className="border px-2 py-1 text-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={`/gambar/pendonor.jpg`}
                          alt={`Pendonor ${donorIndex + 1}`}
                          className="w-16 h-16 mx-auto"
                        />
                        <p className="mt-1 text-xs font-medium">Pendonor {donorIndex + 1}</p>
                      </div>
                    </td>
                    {serumOptions.map((_, colIndex) => {
                      const cellIndex = donorIndex * serumOptions.length + colIndex;
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
              </>
            )}
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
                <strong>Pasien:</strong> Menggumpal, Tidak Menggumpal, Menggumpal, Tidak menggumpal<br />
                </p>
              </div>
              <div className="text-xs md:text-sm mb-4">
                <h3 className="font-semibold text-purple-600">Instruksi Pendonor</h3>
                <p className="mb-2">
                  <strong>Pendonor 1:</strong> Tidak menggumpal, Tidak menggumpal, Tidak menggumpal, Tidak menggumpal<br />
                  <strong>Pendonor 2:</strong> Tidak menggumpal, Menggumpal, Menggumpal, Menggumpal<br />
                </p>
            </div>
            <button
              onClick={() => setShowInstruction(false)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Tabel Golongan Darah */}
      {renderTable("Golongan Darah Pasien", handlePatientAgglutinationClick, patientAgglutinationStates)}
      {renderTable("Golongan Darah Pendonor", handleDonorAgglutinationClick, donorAgglutinationStates)}

     {/* Popup Success */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 p-4">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Proses Berhasil!</h3>
            <p className="text-gray-700 mb-6">Proses golongan darah berhasil disimpan.</p>
            <button
              onClick={handleNextStep}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      )}

      {/* Popup Error */}
      {showErrorPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 p-4">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Terjadi Kesalahan</h3>
            <p className="text-gray-700 mb-6">Golongan darah tidak sesuai, silakan coba lagi.</p>
            <button
              onClick={() => setShowErrorPopup(false)}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition transform hover:scale-105"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      )}


      {/* Button Next Step */}
      <div className="text-center mt-8">
        <button
          onClick={handleNextStep}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full max-w-xs"
        >
          Tahap Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default TabelGolonganDarah;
