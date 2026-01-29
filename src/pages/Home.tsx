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
import { getLessons } from "../data/questions";
import { useState, useEffect } from "react";
import logoTexto from "../assets/logo-texto.png";

export function Home() {
  const { user, logout } = useAuth();
  const { startQuiz } = useGame();
  const navigate = useNavigate();
  const [currentLessons, setCurrentLessons] = useState(
    getLessons("pt-BR"),
  );

  useEffect(() => {
    setCurrentLessons(getLessons("pt-BR"));
  }, []);

  const lessons = currentLessons;

  // Função para verificar se uma lição está desbloqueada
  const isLessonUnlocked = (lessonId: string): boolean => {
    if (lessonId === "lesson-1") return true; // Primeira lição sempre desbloqueada

    const completedLessons = user?.completedLessons || [];

    // Para lesson-2, precisa ter completado lesson-1 com pelo menos 2 acertos
    if (lessonId === "lesson-2") {
      const lesson1 = completedLessons.find((l) => l.lessonId === "lesson-1");
      return lesson1 ? lesson1.correctAnswers >= 2 : false;
    }

    // Para lesson-3, precisa ter completado lesson-2 com pelo menos 2 acertos
    if (lessonId === "lesson-3") {
      const lesson2 = completedLessons.find((l) => l.lessonId === "lesson-2");
      return lesson2 ? lesson2.correctAnswers >= 2 : false;
    }

    // Para lesson-4, precisa ter completado lesson-3 com pelo menos 2 acertos
    if (lessonId === "lesson-4") {
      const lesson3 = completedLessons.find((l) => l.lessonId === "lesson-3");
      return lesson3 ? lesson3.correctAnswers >= 2 : false;
    }

    return false;
  };

  // Função para obter o status da lição
  const getLessonStatus = (lessonId: string): string => {
    const completedLessons = user?.completedLessons || [];
    const lessonProgress = completedLessons.find(
      (l) => l.lessonId === lessonId,
    );

    if (!isLessonUnlocked(lessonId)) {
      return "BLOQUEADO";
    }

    if (lessonProgress && lessonProgress.correctAnswers >= 2) {
      return "CONCLUÍDO";
    }

    return "NÃO CONCLUÍDO";
  };

  const handleStartLesson = (lessonId: string) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    if (lesson) {
      startQuiz(lessonId, lesson.questions);
      navigate("/perguntas");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const trilhas = [
    {
      id: "lesson-1",
      nivel: "Iniciante",
      questoes: `${lessons[0]?.questions.length || 0} Questões`,
      status: getLessonStatus("lesson-1"),
      emoji: "😊",
    },
    {
      id: "lesson-2",
      nivel: "Intermediário",
      questoes: `${lessons[1]?.questions.length || 0} Questões`,
      status: getLessonStatus("lesson-2"),
      emoji: "🤔",
    },
    {
      id: "lesson-3",
      nivel: "Avançado",
      questoes: `${lessons[2]?.questions.length || 0} Questões`,
      status: getLessonStatus("lesson-3"),
      emoji: "😎",
    },
    {
      id: "lesson-4",
      nivel: "Especialista",
      questoes: `50 Questões`,
      status: getLessonStatus("lesson-4"),
      emoji: "🤓",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={logoTexto} alt="ThinkJS" className="h-12 sm:h-14 md:h-16 lg:h-20" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-gray-600 font-bold mb-2">
            Bem-vindo, {user?.name}!
          </h2>
          <p className="text-gray-600">Escolha uma trilha para começar</p>
        </div>

        {/* Trilhas */}
        <div className="grid gap-4 mb-8">
          {trilhas.map((trilha) => (
            <div
              key={trilha.id}
              className={`bg-white rounded-2xl p-6 shadow-sm ${
                trilha.status === "BLOQUEADO"
                  ? "opacity-60"
                  : "cursor-pointer hover:shadow-md"
              } transition`}
              onClick={() =>
                trilha.status !== "BLOQUEADO" && handleStartLesson(trilha.id)
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{trilha.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg">
                      {trilha.nivel}
                    </h3>
                    <p className="text-sm text-gray-600">{trilha.questoes}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm font-medium">{trilha.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Lateral */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="space-y-2">
            <button className="w-full flex text-gray-600 items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <BookOpen size={20} className="text-gray-600" />
              <Link to="/aprender">
                <span className="font-medium">Aprender</span>
              </Link>
            </button>
            <button className="w-full flex items-center text-gray-600 gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <Target size={20} className="text-gray-600" />
              <span className="font-medium">Praticar</span>
            </button>
            <button className="w-full flex items-center  text-gray-600 gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <BarChart3 size={20} className="text-gray-600" />
              <span className="font-medium"> Estatísticas</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <Store size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">
                Loja
              </span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <Settings size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">
                Configurações
              </span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition"
            >
              <LogOut size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">
                Sair
              </span>
            </button>
          </div>
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
  );
}