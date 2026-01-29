import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ChevronRight, ArrowLeft, X } from "lucide-react";
import { getBeginnerTopics } from "../data/beginnertopics";
import logoTexto from "../assets/logo-texto.png";

export default function Iniciante() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const topics = useMemo(
    () => getBeginnerTopics("pt-BR"),
    [],
  );
  const topic = topics[current];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoTexto} alt="ThinkJS" className="h-12 sm:h-14 md:h-16 lg:h-20" />
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
        {/* Topo */}
        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              current === 0 ? navigate("/aprender") : setCurrent((c) => c - 1)
            }
            className="p-2 rounded-full text-gray-700"
          >
            <ArrowLeft />
          </button>
          <button className="p-2 rounded-full text-gray-700">
            <Link to="/home">
              <X />
            </Link>
          </button>
        </div>

        {/* Barra de progresso */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full transition-all duration-500 bg-yellow-400"
            style={{ width: `${((current + 1) / topics.length) * 100}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-gray-700 font-bold">
            🌱 Nível Iniciante
          </h1>
          <span className="text-sm text-gray-500">
            {current + 1} / {topics.length}
          </span>
        </div>

        <div className="rounded-2xl shadow p-6 space-y-4">
          <h2 className="text-gray-700 text-xl font-semibold">{topic.title}</h2>
          <p className="text-gray-700 leading-relaxed">{topic.explanation}</p>
          <p className="text-gray-600">{topic.description}</p>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{topic.example}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6 space-y-3">
          <div className="text-gray-700 flex items-center gap-2 font-semibold">
            <BookOpen size={18} /> Material Complementar
          </div>
          {topic.readings.map((r, i) => (
            <a
              key={i}
              href={r.source}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center bg-yellow-400 text-black transition p-3 rounded-xl"
            >
              <span>{r.title}</span>
              <ChevronRight />
            </a>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              if (current < topics.length - 1) {
                setCurrent((c) => c + 1);
              } else {
                console.log("Módulo iniciante finalizado");
              }
            }}
            className="px-6 py-3 rounded-xl font-semibold transition bg-yellow-400 text-black hover:bg-yellow-500"
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
