import { useNavigate } from "react-router-dom";
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
import { lessons } from "../data/questions";

export function Home() {
  const { user, logout } = useAuth();
  const { startQuiz } = useGame();
  const navigate = useNavigate();

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
      questoes: `${lessons[0]?.questions.length || 0} questões`,
      status: "NÃO CONCLUÍDO",
      emoji: "😊",
    },
    {
      id: "lesson-2",
      nivel: "Intermediário",
      questoes: `${lessons[1]?.questions.length || 0} questões`,
      status: "BLOQUEADO",
      emoji: "🤔",
    },
    {
      id: "lesson-3",
      nivel: "Avançado",
      questoes: `${lessons[2]?.questions.length || 0} questões`,
      status: "BLOQUEADO",
      emoji: "😎",
    },
    {
      id: "lesson-4",
      nivel: "Especialista",
      questoes: "50 questões",
      status: "BLOQUEADO",
      emoji: "🤓",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xl">🐝</span>
            </div>
            <h1 className="text-xl font-bold text-gray-600">ThinkJS</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-gray-600 font-bold mb-2">
            Olá, {user?.name}!
          </h2>
          <p className="text-gray-600">
            Acompanhe as trilhas do conhecimento abaixo:
          </p>
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
              <span className="font-medium">Aprender</span>
            </button>
            <button className="w-full flex items-center text-gray-600 gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <Target size={20} className="text-gray-600" />
              <span className="font-medium">Praticar</span>
            </button>
            <button className="w-full flex items-center  text-gray-600gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <BarChart3 size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">Estatísticas</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <Store size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">Loja</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
              <Settings size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">Configurações</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition"
            >
              <LogOut size={20} className="text-gray-600" />
              <span className="font-medium text-gray-600">Sair</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-8">
          Developers by Ewerson and Maria de Fátima
        </p>
      </div>
    </div>
  );
}
