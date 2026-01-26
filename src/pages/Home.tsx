import { useNavigate, Link } from "react-router-dom";
import {
  BookOpen,
  Target,
  BarChart3,
  Store,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { useGame } from "../context/GameContext";
import { useTranslation } from "../context/TranslationContext";

import LanguageSelector from "../components/LanguageSelector";
import { lessons } from "../data/questions";
import logoTexto from "../assets/logo-texto.png";

export function Home() {
  const { user, logout } = useAuth();
  const { startQuiz } = useGame();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isLessonUnlocked = (lessonId: string): boolean => {
    if (lessonId === "lesson-1") return true;

    const completedLessons = user?.completedLessons || [];

    const previousLessonMap: Record<string, string> = {
      "lesson-2": "lesson-1",
      "lesson-3": "lesson-2",
      "lesson-4": "lesson-3",
    };

    const previousLesson = previousLessonMap[lessonId];
    if (!previousLesson) return false;

    const progress = completedLessons.find(
      (l) => l.lessonId === previousLesson
    );

    return progress ? progress.correctAnswers >= 2 : false;
  };

  const getLessonStatus = (lessonId: string): string => {
    const completedLessons = user?.completedLessons || [];
    const lessonProgress = completedLessons.find(
      (l) => l.lessonId === lessonId
    );

    if (!isLessonUnlocked(lessonId)) return t.bloqueado;
    if (lessonProgress && lessonProgress.correctAnswers >= 2)
      return t.sucesso;

    return t.iniciarLicao;
  };

  const handleStartLesson = (lessonId: string) => {
    if (!isLessonUnlocked(lessonId)) return;

    const lesson = lessons.find((l) => l.id === lessonId);
    if (!lesson) return;

    startQuiz(lessonId, lesson.questions);
    navigate("/perguntas");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const trilhas = [
    {
      id: "lesson-1",
      nivel: t.facil,
      questoes: `${lessons[0]?.questions.length || 0} ${t.perguntas}`,
      status: getLessonStatus("lesson-1"),
      emoji: "😊",
    },
    {
      id: "lesson-2",
      nivel: t.intermediario,
      questoes: `${lessons[1]?.questions.length || 0} ${t.perguntas}`,
      status: getLessonStatus("lesson-2"),
      emoji: "🤔",
    },
    {
      id: "lesson-3",
      nivel: t.dificil,
      questoes: `${lessons[2]?.questions.length || 0} ${t.perguntas}`,
      status: getLessonStatus("lesson-3"),
      emoji: "😎",
    },
    {
      id: "lesson-4",
      nivel: t.nivel,
      questoes: `50 ${t.perguntas}`,
      status: getLessonStatus("lesson-4"),
      emoji: "🤓",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src={logoTexto} alt="ThinkJS" className="h-12" />
          <LanguageSelector />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-600">
            {t.ola}, {user?.name}!
          </h2>
          <p className="text-gray-600">{t.dashboard}</p>
        </div>

        <div className="grid gap-4 mb-8">
          {trilhas.map((trilha) => (
            <div
              key={trilha.id}
              className={`bg-white rounded-2xl p-6 shadow-sm ${
                trilha.status === t.bloqueado
                  ? "opacity-60 cursor-not-allowed"
                  : "cursor-pointer hover:shadow-md"
              }`}
              onClick={() => handleStartLesson(trilha.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <span className="text-4xl">{trilha.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-600">
                      {trilha.nivel}
                    </h3>
                    <p className="text-sm text-gray-600 text-left">{trilha.questoes}</p>
                  </div>
                </div>

                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                  {trilha.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 text-gray-600 shadow-sm space-y-2">
          <Link to="/aprender" className="flex gap-3 p-3 rounded-lg">
            <BookOpen size={20} /> {t.licoes}
          </Link>

          <div className="flex gap-3 p-3 text-gray-600">
            <Target size={20} /> {t.continuarLicao}
          </div>

          <div className="flex gap-3 p-3 text-gray-600">
            <BarChart3 size={20} /> {t.desempenho}
          </div>

          <div className="flex gap-3 p-3 text-gray-600">
            <Store size={20} /> {t.loja}
          </div>

          <div className="flex gap-3 p-3 text-gray-600">
            <Settings size={20} /> {t.configuracoes}
          </div>

          <button
            onClick={handleLogout}
            className="flex gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full"
          >
            <LogOut size={20} /> {t.sair}
          </button>
        </div>
      </div>
    </div>
  );
}