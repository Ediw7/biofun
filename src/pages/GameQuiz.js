import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GameQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa nama organ utama dalam sistem peredaran darah manusia?",
      options: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
      correctAnswer: 0
    },
    {
      question: "Jantung manusia memiliki berapa bilik?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2
    },
    {
      question: "Darah yang membawa oksigen keluar dari jantung melalui pembuluh darah yang disebut?",
      options: ["Aorta", "Vena cava", "Arteri pulmonalis", "Vena pulmonalis"],
      correctAnswer: 0
    },
    {
      question: "Apa yang dimaksud dengan sirkulasi besar dalam sistem peredaran darah?",
      options: [
        "Peredaran darah dari jantung ke seluruh tubuh",
        "Peredaran darah dari jantung ke paru-paru",
        "Peredaran darah hanya di sekitar kepala",
        "Peredaran darah dalam pembuluh darah besar"
      ],
      correctAnswer: 0
    },
    {
      question: "Apa nama pembuluh darah yang membawa darah kembali ke jantung?",
      options: ["Vena", "Arteri", "Kapiler", "Aorta"],
      correctAnswer: 0
    },
    {
      question: "Darah yang kaya oksigen mengalir melalui pembuluh darah yang disebut?",
      options: ["Vena pulmonalis", "Aorta", "Vena cava", "Arteri pulmonalis"],
      correctAnswer: 0
    },
    {
      question: "Apa fungsi dari sistem peredaran darah?",
      options: [
        "Mengangkut oksigen dan nutrisi ke seluruh tubuh",
        "Membuang racun dari tubuh",
        "Menjaga suhu tubuh tetap stabil",
        "Semua jawaban benar"
      ],
      correctAnswer: 3
    }
  ];

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success("Jawaban Benar!");
    } else {
      toast.error("Jawaban Salah!");
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleExit = () => {
    toast.success("Anda keluar dari permainan!", {
      autoClose: 2000
    });
    setTimeout(() => window.location.href = '/games-edukatif', 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-right">
            Kuis Sistem Peredaran Darah
          </h1>
          <p className="text-xl mb-8" data-aos="fade-left" data-aos-delay="200">
            Semangat!
          </p>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="p-6 rounded-lg shadow-md max-w-xl mx-auto mt-6 bg-white">
        {!showResult ? (
          <>
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
              Kuis Sistem Peredaran Darah
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md px-6 py-3 text-left"
                    onClick={() => handleAnswerClick(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">Hasil Kuis</h2>
            <p className="text-xl text-center text-purple-600 mb-6">
              Kamu menjawab benar {score} dari {questions.length} pertanyaan.
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                onClick={handlePlayAgain}
              >
                Main Lagi
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
                onClick={handleExit}
              >
                Keluar
              </button>
            </div>
          </>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default GameQuiz;
