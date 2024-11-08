import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const GamePuzzle = () => {
  const [pieces, setPieces] = useState([
    {
      id: 1,
      image: 'https://i.imgur.com/wAhyELW.png',
      correctPosition: 0,
      position: 0
    },
    {
      id: 2,
      image: 'https://i.imgur.com/QT6wQsz.png',
      correctPosition: 1,
      position: 1
    },
    {
      id: 3,
      image: 'https://i.imgur.com/EPCCqAv.png',
      correctPosition: 2,
      position: 2
    },
    {
      id: 4,
      image: 'https://i.imgur.com/cqBLfK1.png',
      correctPosition: 3,
      position: 3
    }
  ]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const correctPositions = pieces.every((piece, index) => piece.position === piece.correctPosition);
    if (correctPositions) {
      setIsGameOver(true);
      toast.success('Selamat! Kamu berhasil menyusun metamorfosis katak dengan benar!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  }, [pieces]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updatedPieces = Array.from(pieces);
    const [reorderedItem] = updatedPieces.splice(result.source.index, 1);
    updatedPieces.splice(result.destination.index, 0, reorderedItem);
    setPieces(updatedPieces);
  };

  const handleRestart = () => {
    setPieces([
      {
        id: 1,
        image: 'https://i.imgur.com/wAhyELW.png',
        correctPosition: 0,
        position: 0
      },
      {
        id: 2,
        image: 'https://i.imgur.com/QT6wQsz.png',
        correctPosition: 1,
        position: 1
      },
      {
        id: 3,
        image: 'https://i.imgur.com/EPCCqAv.png',
        correctPosition: 2,
        position: 2
      },
      {
        id: 4,
        image: 'https://i.imgur.com/cqBLfK1.png',
        correctPosition: 3,
        position: 3
      }
    ]);
    setIsGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
          Puzzle Metamorfosis Katak
        </h1>
        <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
          Semangat!
        </p>
      </div>
    </div>

      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">Puzzle Metamorfosis Katak</h2>
        <p className="text-lg mb-6">Susun gambar-gambar ini menjadi urutan metamorfosis katak yang benar!</p>
        {isGameOver && (
          <button
            onClick={handleRestart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors hover:bg-blue-700"
          >
            Main Lagi
          </button>
        )}
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="puzzle-pieces" direction="horizontal">
          {(provided) => (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {pieces.map((piece, index) => (
                <Draggable key={piece.id} draggableId={`piece-${piece.id}`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`cursor-pointer w-full max-w-xs mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2 ${
                        piece.position === piece.correctPosition
                          ? 'border-4 border-green-500'
                          : 'border-4 border-gray-300'
                      }`}
                    >
                      <img
                        src={piece.image}
                        alt={`Puzzle Piece ${piece.id}`}
                        className="w-full h-48 object-contain rounded-t-lg"
                      />
                      <div className="p-4 text-center">
                        <p className="text-lg font-semibold">Posisi: {piece.position + 1}</p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ToastContainer />
    </div>
  );
};

export default GamePuzzle;