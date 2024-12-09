import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate dari react-router-dom

const EksperimenHasil = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  // Data perbandingan jawaban
  const data = [
    {
      id: 1,
      kategori: "Pasien 1",
      jawabanKamu: ["+", "-", "+", "-"],
      kunciJawaban: ["+", "-", "+", "-"],
      golDarahKamu: "A⁺",
      golDarahKunci: "A⁺",
    },
    {
      id: 2,
      kategori: "Pasien 2",
      jawabanKamu: ["+", "-", "+", "-"],
      kunciJawaban: ["+", "-", "+", "-"],
      golDarahKamu: "A⁻",
      golDarahKunci: "A⁻",
    },
    {
      id: 3,
      kategori: "Pendonor 1",
      jawabanKamu: ["+", "+", "-", "+"],
      kunciJawaban: ["+", "+", "-", "+"],
      golDarahKamu: "B⁺",
      golDarahKunci: "B⁺",
    },
    {
      id: 4,
      kategori: "Pendonor 2",
      jawabanKamu: ["+", "+", "+", "-"],
      kunciJawaban: ["+", "+", "+", "-"],
      golDarahKamu: "AB⁻",
      golDarahKunci: "AB⁻",
    },
  ];

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

      {/* Tabel Perbandingan */}
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border">Kategori</th>
              <th className="p-4 border text-center">Anti-A</th>
              <th className="p-4 border text-center">Anti-B</th>
              <th className="p-4 border text-center">Anti-AB</th>
              <th className="p-4 border text-center">Anti-D</th>
              <th className="p-4 border text-center">Gol. Darah</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <tr className="bg-gray-100">
                  <td
                    rowSpan="2"
                    className="border p-4 text-center font-semibold bg-gray-100"
                  >
                    {item.kategori}
                  </td>
                  {/* Jawaban Kamu */}
                  {item.jawabanKamu.map((jawaban, index) => (
                    <td key={index} className="border p-4 text-center">
                      {jawaban}
                    </td>
                  ))}
                  <td className="border p-4 text-center">{item.golDarahKamu}</td>
                </tr>
                <tr>
                  {/* Kunci Jawaban */}
                  {item.kunciJawaban.map((jawaban, index) => (
                    <td
                      key={index}
                      className={`border p-4 text-center ${
                        item.jawabanKamu[index] === jawaban
                          ? "bg-white"
                          : "bg-red-100"
                      }`}
                    >
                      {jawaban}
                    </td>
                  ))}
                  <td
                    className={`border p-4 text-center ${
                      item.golDarahKamu === item.golDarahKunci
                        ? "bg-white"
                        : "bg-red-100"
                    }`}
                  >
                    {item.golDarahKunci}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <p className="mt-4 text-sm text-center text-gray-600">
          (+) Menggumpal &nbsp; | &nbsp; (-) Tidak Menggumpal &nbsp; | &nbsp;{" "}
          (warna hijau) Kunci Jawaban
        </p>
      </div>

      {/* Button Kembali */}
      <div className="mt-8 text-center">
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => navigate("/eksperimen-golongan-darah")}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default EksperimenHasil;
