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
    <div className="min-h-screen bg-teal-200 p-6">
      {/* Header */}
      <div className="bg-yellow-400 p-4 rounded flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">
          Perbandingan Jawaban Kamu dan Kunci Jawaban
        </h1>
      </div>

      {/* Tabel Perbandingan */}
      <div className="bg-white mt-6 p-4 rounded shadow-lg">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Kategori</th>
              <th className="p-2 border">Anti-A</th>
              <th className="p-2 border">Anti-B</th>
              <th className="p-2 border">Anti-AB</th>
              <th className="p-2 border">Anti-D</th>
              <th className="p-2 border">Gol. Darah</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <tr className="bg-gray-50">
                  <td
                    rowSpan="2"
                    className="border p-2 text-center font-bold bg-yellow-100"
                  >
                    {item.kategori}
                  </td>
                  {/* Jawaban Kamu */}
                  {item.jawabanKamu.map((jawaban, index) => (
                    <td key={index} className="border p-2 text-center">
                      {jawaban}
                    </td>
                  ))}
                  <td className="border p-2 text-center">{item.golDarahKamu}</td>
                </tr>
                <tr>
                  {/* Kunci Jawaban */}
                  {item.kunciJawaban.map((jawaban, index) => (
                    <td
                      key={index}
                      className={`border p-2 text-center ${
                        item.jawabanKamu[index] === jawaban
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {jawaban}
                    </td>
                  ))}
                  <td
                    className={`border p-2 text-center ${
                      item.golDarahKamu === item.golDarahKunci
                        ? "bg-green-100"
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
        <p className="mt-2 text-sm text-center text-gray-600">
          (+) Menggumpal &nbsp; | &nbsp; (-) Tidak Menggumpal &nbsp; | &nbsp;{" "}
          (warna hijau) Kunci Jawaban
        </p>
      </div>

      {/* Button Kembali */}
      <div className="mt-6 text-center">
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          onClick={() => navigate("/eksperimen-golongan-darah")}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default EksperimenHasil;
