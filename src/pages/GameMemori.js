import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const animals = [
  { name: "Gajah", scientificName: "Loxodonta", image: "https://i.pinimg.com/originals/fa/ce/d7/faced74d0ae4a86eb755b9e05945244f.png", sound: "/audio/gajah.mp3" },
  { name: "Harimau", scientificName: "Panthera tigris", image: "https://img.pikbest.com/ai/illus_our/20230423/d0232aa552629d70f067b2a7a3a90e55.jpg!sw800", sound: "/audio/harimau.mp3" },
  { name: "Kuda", scientificName: "Equus ferus caballus", image: "https://st.depositphotos.com/2664341/58356/v/450/depositphotos_583567638-stock-illustration-illustration-cute-cartoon-horse.jpg", sound: "/audio/kuda.mp3" },
  { name: "Singa", scientificName: "Panthera leo", image: "https://st.depositphotos.com/1967477/1843/i/950/depositphotos_18438051-stock-illustration-lion-cartoon.jpg", sound: "/audio/tiger.mp3" },
  { name: "Sapi", scientificName: "Bos taurus", image: "https://png.pngtree.com/png-clipart/20230409/original/pngtree-cute-cow-cartoon-png-image_9040341.png", sound: "/audio/sapi.mp3" },
  { name: "Burung Hantu", scientificName: "Strigiformes", image: "https://png.pngtree.com/png-clipart/20220923/original/pngtree-owl-bird-cartoon-png-image_8629432.png", sound: "/audio/owl.mp3" },
];

const GameMemori = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const shuffledCards = [...animals, ...animals]
      .sort(() => Math.random() - 0.5)
      .map((animal, index) => ({
        ...animal,
        id: index,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (id) => {
    if (flipped.length === 2 || isGameOver) return;

    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((card) => card.id === id);

    if (updatedCards[cardIndex].isFlipped || updatedCards[cardIndex].isMatched) return;

    updatedCards[cardIndex].isFlipped = true;
    setCards(updatedCards);

    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped, updatedCards[cardIndex]];
      if (newFlipped.length === 2) checkMatch(newFlipped);
      return newFlipped;
    });
  };

  const checkMatch = (flippedCards) => {
    if (flippedCards[0].name === flippedCards[1].name) {
      // Play sound of the matched animal
      playSound(flippedCards[0].sound);

      const newMatched = [...matched, flippedCards[0].name];
      setMatched(newMatched);

      const updatedCards = cards.map((card) => {
        if (flippedCards.some((flippedCard) => flippedCard.id === card.id)) {
          card.isMatched = true;
        }
        return card;
      });

      setCards(updatedCards);

      if (newMatched.length === animals.length) setIsGameOver(true);
    } else {
      setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (!card.isMatched) card.isFlipped = false;
          return card;
        });
        setCards(updatedCards);
      }, 1000);
    }
    setFlipped([]);
  };

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const restartGame = () => {
    const shuffledCards = [...animals, ...animals]
      .sort(() => Math.random() - 0.5)
      .map((animal, index) => ({
        ...animal,
        id: index,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setIsGameOver(false);
  };

  const exitGame = () => {
    toast.success("Anda keluar dari permainan!", { autoClose: 2000 });
    setTimeout(() => (window.location.href = '/games-edukatif'), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section - Full width */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-300 hover:scale-110">
          Game Memori Hewan
        </h1>
        <p className="text-lg">Klik pada gambar untuk mencocokkan pasangan!</p>
      </div>

      {/* Game Over Message */}
      {isGameOver && (
        <div className="mt-6 text-2xl font-semibold text-purple-600">
          Kamu menang! Semua kartu telah dicocokkan.
        </div>
      )}

      {/* Buttons for restarting or exiting, only when the game is over */}
      {isGameOver && (
        <div className="mt-6 flex space-x-4">
          <button
            onClick={restartGame}
            className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-200"
          >
            Main Lagi
          </button>
          <button
            onClick={exitGame}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200"
          >
            Keluar
          </button>
        </div>
      )}

      {/* Cards Grid - Centered with smaller card size */}
      <div className="grid grid-cols-4 gap-6 mt-8 mb-8 max-w-4xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-28 h-36 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
              card.isFlipped || card.isMatched ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.isFlipped || card.isMatched ? (
              <div className="flex flex-col items-center justify-center h-full p-2">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-center text-sm font-semibold text-gray-800">{card.name}</p>
                <p className="text-center text-xs text-gray-600">{card.scientificName}</p>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xl text-gray-700 font-bold">
                ?
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default GameMemori;
