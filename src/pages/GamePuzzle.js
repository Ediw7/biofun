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
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg', // Telur
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg', // Ulat
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg', // Kepompong
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg', // Kupu-Kupu
        ],
        correctIndex: 0,
        currentIndex: 0,
      },
      {
        id: 2,
        title: 'Ulat',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg', // Telur
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg', // Ulat
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg', // Kepompong
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg', // Kupu-Kupu
        ],
        correctIndex: 1,
        currentIndex: 0,
      },
      {
        id: 3,
        title: 'Kepompong',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg', // Telur
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg', // Ulat
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg', // Kepompong
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg', // Kupu-Kupu
        ],
        correctIndex: 2,
        currentIndex: 0,
      },
      {
        id: 4,
        title: 'Kupu-Kupu',
        images: [
          'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/06/Telur-kupu-kupu.jpg', // Telur
          'https://cdn.pixabay.com/photo/2022/09/05/18/53/caterpillar-7434958_1280.jpg', // Ulat
          'https://storage.nu.or.id/storage/post/1_1/mid/15531265155c92d473a2f82.jpg', // Kepompong
          'https://asset.kompas.com/crops/k1XcF4y-3pfXpezv3uvZOdfcXc0=/0x0:1279x853/1200x800/data/photo/2022/07/22/62daa4ff6f40d.jpg', // Kupu-Kupu
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
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Puzzle Metamorfosis Kupu-Kupu</h1>
        <p className="text-lg">Klik pada gambar untuk mengubah hingga sesuai dengan urutan!</p>
      </div>

      {/* Kontainer Utama */}
      <div className="container mx-auto mt-6">
        {isGameOver && (
          <div className="text-center mb-6">
            <button
              onClick={handleRestart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
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

export default GamePuzzle;
