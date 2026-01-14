import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, Heart } from "lucide-react";
import { useGame } from "../context/GameContext";

export function Perguntas() {
  const { currentSession, answerQuestion, nextQuestion, finishQuiz } =
    useGame();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [lives] = useState(10);

  useEffect(() => {
    if (!currentSession) {
      navigate("/home");
    }
  }, [currentSession, navigate]);

  if (!currentSession) {
    return null;
  }

  const currentQuestion =
    currentSession.questions[currentSession.currentQuestionIndex];
  const isLastQuestion =
    currentSession.currentQuestionIndex === currentSession.questions.length - 1;
  const hasAnswered = selectedAnswer !== null;

  const handleSelectAnswer = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;

    answerQuestion(selectedAnswer);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      finishQuiz();
      navigate("/parabens");
    } else {
      nextQuestion();
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const getAnswerClassName = (index: number) => {
    const baseClass = "w-full text-left p-4 rounded-xl border-2 transition";

    if (!showExplanation) {
      return `${baseClass} ${
        selectedAnswer === index
          ? "border-yellow-400 bg-yellow-50"
          : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-yellow-300"
      }`;
    }

    if (index === currentQuestion.correctAnswer) {
      return `${baseClass} border-green-500 bg-green-50`;
    }

    if (selectedAnswer === index && index !== currentQuestion.correctAnswer) {
      return `${baseClass} border-red-500 bg-red-50`;
    }

    return `${baseClass} border-gray-300 opacity-50`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 text-gray-600">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/home")}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => navigate("/home")}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-red-500 fill-red-500" size={24} />
              <span className="font-bold">{lives}</span>
            </div>
          </div>

          {/* Barra de Progresso */}
          <div className="w-full">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-300 ease-out rounded-full"
                style={{
                  width: `${
                    ((currentSession.currentQuestionIndex + 1) /
                      currentSession.questions.length) *
                    100
                  }%`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Questão {currentSession.currentQuestionIndex + 1}</span>
              <span>{currentSession.questions.length} questões</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        {/* Question */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-6 text-gray-600">
            {currentQuestion.question}
          </h3>

          {currentQuestion.code && (
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
              <code>{currentQuestion.code}</code>
            </div>
          )}

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showExplanation}
                className={getAnswerClassName(index)}
              >
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-500">{index + 1}</span>
                  <span className="flex-1  text-gray-600">{option}</span>
                  {showExplanation &&
                    index === currentQuestion.correctAnswer && (
                      <span className="text-green-600 text-xl">✓</span>
                    )}
                  {showExplanation &&
                    selectedAnswer === index &&
                    index !== currentQuestion.correctAnswer && (
                      <span className="text-red-600 text-xl">✗</span>
                    )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="font-bold text-blue-900 mb-2">📚 Explicação:</h3>
            <p className="text-blue-800">{currentQuestion.explanation}</p>
            {selectedAnswer === currentQuestion.correctAnswer && (
              <div className="mt-3 text-green-600 font-semibold">
                🎉 Parabéns! Você ganhou {currentQuestion.xpReward} XP
              </div>
            )}
          </div>
        )}

        {!showExplanation ? (
          <>
            <button
              onClick={handleConfirm}
              disabled={!hasAnswered}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 font-semibold py-4 rounded-xl transition"
            >
              Confirmar Resposta
            </button>
            <button
              onClick={() => navigate("/home")}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-4 rounded-xl mt-4 transition"
            >
              Pular
            </button>
          </>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-xl transition"
          >
            {isLastQuestion ? "Ver Resultado 🎉" : "Próxima Pergunta →"}
          </button>
        )}

        <p className="text-xs text-gray-500 text-center mt-8">
          Developers by Ewerson and Maria de Fátima
        </p>
      </div>
    </div>
  );
}
