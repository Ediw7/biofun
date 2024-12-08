import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GameQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);

  const questions = [
    {
      question: "Apa nama organ utama dalam sistem peredaran darah manusia?",
      options: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
      correctAnswer: 0,
      explanation: "Jantung adalah organ pusat dalam sistem peredaran darah, memompa darah ke seluruh tubuh.",
    },
    {
      question: "Jantung manusia memiliki berapa bilik?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      explanation: "Jantung manusia memiliki 4 bilik: 2 atrium (serambi) dan 2 ventrikel (bilik).",
    },
    {
      question: "Apa komponen darah yang bertanggung jawab untuk pembekuan darah?",
      options: ["Sel darah merah", "Trombosit", "Plasma", "Sel darah putih"],
      correctAnswer: 1,
      explanation: "Trombosit membantu pembekuan darah dengan menutupi luka agar perdarahan berhenti.",
    },
    {
      question: "Pembuluh darah mana yang membawa darah kaya oksigen dari paru-paru ke jantung?",
      options: ["Arteri pulmonalis", "Vena pulmonalis", "Aorta", "Kapiler"],
      correctAnswer: 1,
      explanation: "Vena pulmonalis membawa darah kaya oksigen dari paru-paru ke atrium kiri jantung.",
    },
    {
      question: "Apa yang terjadi di kapiler darah?",
      options: [
        "Darah dipompa dari jantung ke seluruh tubuh",
        "Pertukaran oksigen dan karbon dioksida",
        "Pengangkutan hormon ke seluruh tubuh",
        "Produksi sel darah merah",
      ],
      correctAnswer: 1,
      explanation: "Di kapiler, terjadi pertukaran oksigen dan karbon dioksida antara darah dan jaringan tubuh.",
    },
  ];
  

  const handleTimeOut = useCallback(() => {
    toast.warning("Waktu habis!");
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
    }
  }, [currentQuestion, questions.length]);

  useEffect(() => {
    if (!showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (timeLeft === 0) {
      handleTimeOut();
    }
  }, [timeLeft, showResult, handleTimeOut]);

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
      toast.success("Jawaban Benar!");
    } else {
      toast.error("Jawaban Salah!");
    }

    toast.info(questions[currentQuestion].explanation, {
      autoClose: 3000,
      position: "bottom-center",
    });

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setTimeLeft(15);
      }
    }, 3000);
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(15);
  };

  const handleExit = () => {
    toast.success("Anda keluar dari permainan!", { autoClose: 2000 });
    setTimeout(() => (window.location.href = '/games-edukatif'), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-bold">
              {!showResult ? `Pertanyaan ${currentQuestion + 1}/${questions.length}` : "Hasil Kuis"}
            </h1>
            {!showResult && <span>Sisa Waktu: {timeLeft}s</span>}
          </div>

          {/* Content Section */}
          <div className="p-6 overflow-y-auto flex-1">
            {!showResult ? (
              <>
                <h2 className="text-xl font-semibold text-purple-600 mb-4 text-center">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full px-4 py-3 rounded text-left transition-colors ${
                        selectedAnswer === index
                          ? index === questions[currentQuestion].correctAnswer
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                          : "bg-gray-100 hover:bg-purple-100"
                      }`}
                      onClick={() => handleAnswerClick(index)}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Hasil Kuis</h2>
                <p className="text-xl mb-6">
                  Kamu menjawab benar {score} dari {questions.length} pertanyaan
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    onClick={handlePlayAgain}
                  >
                    Main Lagi
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleExit}
                  >
                    Keluar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GameQuiz;
