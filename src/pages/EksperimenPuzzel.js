import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EksperimenPuzzel = () => {
  const [pieces, setPieces] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const initialPieces = [
      {
        id: 1,
        title: 'Golongan Darah A',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/A_Blood_Group_Rh_Positivity.svg/1024px-A_Blood_Group_Rh_Positivity.svg.png', // Golongan A
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BloodgroupB.jpg/1024px-BloodgroupB.jpg', // Golongan B
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/AB_Blood_Group.svg/1024px-AB_Blood_Group.svg.png', // Golongan AB
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/O_blood_group.svg/1024px-O_blood_group.svg.png', // Golongan O
        ],
        correctIndex: 0,
        currentIndex: 0,
      },
      {
        id: 2,
        title: 'Golongan Darah B',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/A_Blood_Group_Rh_Positivity.svg/1024px-A_Blood_Group_Rh_Positivity.svg.png', // Golongan A
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BloodgroupB.jpg/1024px-BloodgroupB.jpg', // Golongan B
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/AB_Blood_Group.svg/1024px-AB_Blood_Group.svg.png', // Golongan AB
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/O_blood_group.svg/1024px-O_blood_group.svg.png', // Golongan O
        ],
        correctIndex: 1,
        currentIndex: 0,
      },
      {
        id: 3,
        title: 'Golongan Darah AB',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/A_Blood_Group_Rh_Positivity.svg/1024px-A_Blood_Group_Rh_Positivity.svg.png', // Golongan A
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BloodgroupB.jpg/1024px-BloodgroupB.jpg', // Golongan B
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/AB_Blood_Group.svg/1024px-AB_Blood_Group.svg.png', // Golongan AB
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/O_blood_group.svg/1024px-O_blood_group.svg.png', // Golongan O
        ],
        correctIndex: 2,
        currentIndex: 0,
      },
      {
        id: 4,
        title: 'Golongan Darah O',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/A_Blood_Group_Rh_Positivity.svg/1024px-A_Blood_Group_Rh_Positivity.svg.png', // Golongan A
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BloodgroupB.jpg/1024px-BloodgroupB.jpg', // Golongan B
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/AB_Blood_Group.svg/1024px-AB_Blood_Group.svg.png', // Golongan AB
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/O_blood_group.svg/1024px-O_blood_group.svg.png', // Golongan O
        ],
        correctIndex: 3,
        currentIndex: 0,
      },
    ];
    setPieces(initialPieces);
  }, []);

  useEffect(() => {
    const allCorrect = pieces.every((piece) => piece.currentIndex === piece.correctIndex);
    if (allCorrect && pieces.length > 0) {
      setIsGameOver(true);
      toast.success('Selamat! Kamu berhasil menyusun puzzle golongan darah dengan benar!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  }, [pieces]);

  const handleImageClick = (id) => {
    setPieces((prevPieces) =>
      prevPieces.map((piece) =>
        piece.id === id
          ? {
              ...piece,
              currentIndex: (piece.currentIndex + 1) % piece.images.length,
            }
          : piece
      )
    );
  };

  const handleRestart = () => {
    setPieces((prevPieces) =>
      prevPieces.map((piece) => ({
        ...piece,
        currentIndex: 0,
      }))
    );
    setIsGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Puzzle Uji Golongan Darah</h1>
        <p className="text-lg">Klik pada gambar untuk mengubah hingga sesuai dengan urutan golongan darah!</p>
      </div>

      {/* Kontainer Utama */}
      <div className="container mx-auto mt-6">
        {isGameOver && (
          <div className="text-center mb-6">
            <button
              onClick={handleRestart}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Main Lagi
            </button>
          </div>
        )}

        {/* Layout 4 Kolom */}
        <div className="grid grid-cols-4 gap-6">
          {pieces.map((piece) => (
            <div
              key={piece.id}
              className="text-center p-4 bg-white shadow-md rounded-lg"
              onClick={() => handleImageClick(piece.id)}
            >
              <h2 className="text-xl font-semibold mb-4">{piece.title}</h2>
              <img
                src={piece.images[piece.currentIndex]}
                alt={`Puzzle ${piece.title}`}
                className="w-full h-24 object-contain rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EksperimenPuzzel;
