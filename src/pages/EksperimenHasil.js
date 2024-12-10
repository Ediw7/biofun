import React from "react";
import { useNavigate } from "react-router-dom";

const EksperimenHasil = () => {
  const navigate = useNavigate();

  // Data perbandingan jawaban
  const data = [
    {
      id: 1,
      kategori: "Pasien 1",
      kunciJawaban: ["+", "-", "+", "-"],
      golDarahKunci: "A"
    },
    {
      id: 2,
      kategori: "Pendonor 1",
      kunciJawaban: ["-", "-", "-", "-"],
      golDarahKunci: "O"
    },
    {
      id: 3,
      kategori: "Pendonor 2",
      kunciJawaban: ["-", "+", "+", "+"],
      golDarahKunci: "B"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-8 py-4 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-4xl font-bold mb-2">Uji Golongan Darah</h1>
          <p className="text-xs md:text-base mb-2 px-2">
            Kunci jawaban uji golongan darah
          </p>
        </div>
      </div>

      {/* Tabel Perbandingan */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl overflow-x-auto">
        <div className="min-w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 md:p-4 border text-xs md:text-base">Kategori</th>
                <th className="p-2 md:p-4 border text-center text-xs md:text-base">Anti-A</th>
                <th className="p-2 md:p-4 border text-center text-xs md:text-base">Anti-B</th>
                <th className="p-2 md:p-4 border text-center text-xs md:text-base">Anti-AB</th>
                <th className="p-2 md:p-4 border text-center text-xs md:text-base">Anti-D</th>
                <th className="p-2 md:p-4 border text-center text-xs md:text-base">Gol. Darah</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="bg-gray-50">
                  <td className="border p-2 md:p-4 text-center font-semibold bg-gray-100 text-xs md:text-base">
                    {item.kategori}
                  </td>
                  {item.kunciJawaban.map((jawaban, index) => (
                    <td 
                      key={index} 
                      className="border p-2 md:p-4 text-center text-xs md:text-base bg-green-50"
                    >
                      {jawaban}
                    </td>
                  ))}
                  <td className="border p-2 md:p-4 text-center text-xs md:text-base bg-green-50">
                    {item.golDarahKunci}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs md:text-sm text-center text-gray-600 px-2">
          (+) Menggumpal &nbsp; | &nbsp; (-) Tidak Menggumpal
        </p>
      </div>

      {/* Button Kembali */}
      <div className="mt-6 md:mt-8 text-center">
        <button
          className="bg-purple-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => navigate("/eksperimen-golongan-darah")}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default EksperimenHasil;