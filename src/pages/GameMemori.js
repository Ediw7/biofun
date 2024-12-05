import React, { useState, useEffect } from 'react';

const animals = [
  { name: "Gajah", scientificName: "Loxodonta", image: "/images/elephant.jpg" },
  { name: "Harimau", scientificName: "Panthera tigris", image: "/images/tiger.jpg" },
  { name: "Kuda", scientificName: "Equus ferus caballus", image: "/images/horse.jpg" },
  { name: "Singa", scientificName: "Panthera leo", image: "/images/lion.jpg" },
  { name: "Zebra", scientificName: "Equus quagga", image: "/images/zebra.jpg" },
  { name: "Panda", scientificName: "Ailuropoda melanoleuca", image: "/images/panda.jpg" }
];

const GameMemori = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  // Shuffle and duplicate cards to create pairs
  useEffect(() => {
    const shuffledCards = [...animals, ...animals]
      .sort(() => Math.random() - 0.5)
      .map((animal, index) => ({
        ...animal,
        id: index,
        isFlipped: false,
        isMatched: false
      }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (id) => {
    if (flipped.length === 2 || isGameOver) return;

    const newCards = [...cards];
    const cardIndex = newCards.findIndex(card => card.id === id);
    if (newCards[cardIndex].isFlipped || newCards[cardIndex].isMatched) return;

    newCards[cardIndex].isFlipped = true;
    setCards(newCards);

    setFlipped(prevFlipped => {
      const newFlipped = [...prevFlipped, newCards[cardIndex]];
      if (newFlipped.length === 2) {
        checkMatch(newFlipped);
      }
      return newFlipped;
    });
  };

  const checkMatch = (flippedCards) => {
    if (flippedCards[0].name === flippedCards[1].name) {
      const newMatched = [...matched, flippedCards[0].name];
      setMatched(newMatched);

      const newCards = cards.map(card => {
        if (flippedCards.some(f => f.id === card.id)) {
          card.isMatched = true;
        }
        return card;
      });

      setCards(newCards);

      if (newMatched.length === animals.length) {
        setIsGameOver(true);
      }
    } else {
      setTimeout(() => {
        const newCards = cards.map(card => {
          if (!card.isMatched) {
            card.isFlipped = false;
          }
          return card;
        });
        setCards(newCards);
      }, 1000);
    }

    setFlipped([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Game Memori Hewan</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <div
            key={card.id}
            className={`w-24 h-32 flex items-center justify-center bg-white rounded-lg shadow-lg ${
              card.isFlipped || card.isMatched ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.isFlipped || card.isMatched ? (
              <div className="text-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="mt-2 text-sm">{card.scientificName}</p>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-xl text-gray-700">
                ?
              </div>
            )}
          </div>
        ))}
      </div>
      {isGameOver && (
        <div className="mt-6 text-2xl font-semibold text-green-600">
          Kamu menang! Semua kartu telah dicocokkan.
        </div>
      )}
    </div>
  );
};

export default GameMemori;
