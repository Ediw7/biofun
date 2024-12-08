import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GamePuzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const initialPieces = [
      {
        id: 1,
        title: 'Telur',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg',
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg',
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg',
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg',
        ],
        correctIndex: 0,
        currentIndex: 2,
      },
      {
        id: 2,
        title: 'Ulat',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg',
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg',
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg',
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg',
        ],
        correctIndex: 1,
        currentIndex: 3,
      },
      {
        id: 3,
        title: 'Kepompong',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg',
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg',
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg',
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg',
        ],
        correctIndex: 2,
        currentIndex: 0,
      },
      {
        id: 4,
        title: 'Kupu-Kupu',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg',
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg',
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg',
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg',
        ],
        correctIndex: 3,
        currentIndex: 1,
      },
    ];
    setPieces(initialPieces);
  }, []);

  useEffect(() => {
    const allCorrect = pieces.every((piece) => piece.currentIndex === piece.correctIndex);
    if (allCorrect && pieces.length > 0) {
      setIsGameOver(true);
      toast.success('Selamat! Kamu berhasil menyusun puzzle dengan benar!', {
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-300 hover:scale-110">
          Puzzle Metamorfosis Kupu-Kupu
        </h1>
        <p className="text-lg">Klik pada gambar untuk mengubah hingga sesuai dengan urutan!</p>
      </div>

      {/* Kontainer Utama */}
      <div className="container mx-auto mt-6">
        {isGameOver && (
          <div className="text-center mb-6">
            <button
              onClick={handleRestart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
            >
              Main Lagi
            </button>
          </div>
        )}

        {/* Layout 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pieces.map((piece) => (
            <div
              key={piece.id}
              className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-xl"
              onClick={() => handleImageClick(piece.id)}
            >
              <h2 className="text-xl text-purple-600 font-semibold mb-4">{piece.title}</h2>
              <img
                src={piece.images[piece.currentIndex]}
                alt={`Puzzle ${piece.title}`}
                className="w-full h-28 object-cover rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default GamePuzzle;
