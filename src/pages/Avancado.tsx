import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ChevronRight, ArrowLeft, X } from "lucide-react";
import { getAdvancedTopics } from "../data/advancedtopics";
import logoTexto from "../assets/logo-texto.png";

export default function Avancado() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const topics = useMemo(
    () => getAdvancedTopics("pt"),
    [],
  );
  const topic = topics[current];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src={logoTexto} alt="ThinkJS" className="h-10" />
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Topo */}
        <div className="flex justify-between">
          <button
            onClick={() =>
              current === 0 ? navigate("/aprender") : setCurrent((c) => c - 1)
            }
            className="p-2 text-gray-700"
          >
            <ArrowLeft />
          </button>
          <Link to="/home" className="p-2 text-gray-700">
            <X />
          </Link>
        </div>

        {/* Progresso */}
        <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="bg-yellow-400 h-3 transition-all"
            style={{ width: `${((current + 1) / topics.length) * 100}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            🌳 Nível Avançado
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{topic.title}</h2>
          <p className="text-gray-700">{topic.explanation}</p>
          <p className="text-gray-600">{topic.description}</p>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
            <code>{topic.example}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 p-6 rounded-2xl space-y-3">
          <div className="text-gray-700 flex items-center gap-2 font-semibold">
            <BookOpen size={18} /> Material Complementar
          </div>
          {topic.readings.map((r, i) => (
            <a
              key={i}
              href={r.source}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between bg-yellow-400 p-3 rounded-xl text-black"
            >
              {r.title}
              <ChevronRight />
            </a>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() =>
              current < topics.length - 1
                ? setCurrent((c) => c + 1)
                : console.log("Módulo avançado finalizado")
            }
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            {current === topics.length - 1
              ? "Finalizar"
              : "Próximo"}
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
  );
}
