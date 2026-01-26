import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import logoParabens from "../assets/logo-parabens.png";

export function Parabens() {
  const { currentSession, resetQuiz } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentSession?.completedAt) {
      navigate("/home");
    }
  }, [currentSession, navigate]);

  if (!currentSession) {
    return null;
  }

  const correctAnswers = currentSession.answers.filter(
    (answer, index) => answer === currentSession.questions[index].correctAnswer,
  ).length;

  const totalQuestions = currentSession.questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const totalXpEarned = currentSession.score;

  const handleContinue = () => {
    resetQuiz();
    navigate("/home");
  };

  const handleRetry = () => {
    navigate("/home");
    resetQuiz();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-2xl">
        <div className="text-center">
          <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <img src={logoParabens} alt="Parabéns" className="w-32 h-50" />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-600">
            {t("congratulations.title", {
              correct: correctAnswers,
              total: totalQuestions,
            })}
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="text-sm text-gray-600">
                {t("congratulations.stats.correctAnswers")}
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {percentage}%
              </div>
              <div className="text-sm text-gray-600">
                <span className="hidden sm:inline">
                  {t("congratulations.stats.performance")}
                </span>
                <span className="sm:hidden">
                  {t("congratulations.stats.performanceShort")}
                </span>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                +{totalXpEarned}
              </div>
              <div className="text-sm text-gray-600">
                {t("congratulations.stats.xpEarned")}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleRetry}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-4 rounded-xl transition"
            >
              🔄 {t("congratulations.tryAgain")}
            </button>
            <button
              onClick={handleContinue}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-xl transition"
            >
              {t("congratulations.continue")} →
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-8">
            Developers by{" "}
            <a href="https://www.linkedin.com/in/oewersson/" target="_blank">
              <strong>Ewersson Assis</strong>
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/maria-de-fatima-alves/"
              target="_blank"
            >
              <strong>Maria de Fátima</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
