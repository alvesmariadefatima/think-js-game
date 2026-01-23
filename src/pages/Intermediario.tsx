import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, ArrowLeft, X } from "lucide-react";
import logoTexto from "../assets/logo-texto.png";

interface Topic {
  id: number;
  title: string;
  explanation: string;
  description: string;
  example: string;
  readings: { title: string; source: string }[];
}

const topics: Topic[] = [
  {
    id: 1,
    title: "Escopo e Hoisting",
    explanation:
      "Escopo define onde uma variável pode ser acessada. Hoisting é o comportamento do JavaScript de mover declarações para o topo do escopo.",
    description: "Entendendo var, let, const e o funcionamento interno.",
    example: "console.log(a);\nvar a = 10;",
    readings: [
      {
        title: "MDN – Escopo",
        source: "https://developer.mozilla.org/pt-BR/docs/Glossary/Scope",
      },
    ],
  },
  {
    id: 2,
    title: "Arrow Functions",
    explanation:
      "Arrow functions são uma forma mais curta de escrever funções e não possuem seu próprio this.",
    description: "Sintaxe moderna e comportamento do this.",
    example: "const soma = (a, b) => a + b;",
    readings: [
      {
        title: "MDN – Arrow Functions",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
      },
    ],
  },
  {
    id: 3,
    title: "Desestruturação",
    explanation:
      "Permite extrair valores de arrays e objetos de forma simples.",
    description: "Código mais limpo e legível.",
    example: "const { nome, idade } = pessoa;",
    readings: [
      {
        title: "MDN – Destructuring",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
      },
    ],
  },
  {
    id: 4,
    title: "Template Strings",
    explanation:
      "Permitem interpolar variáveis dentro de strings usando crases.",
    description: "Concatenação moderna.",
    example: "const msg = `Olá, ${nome}!`;",
    readings: [
      {
        title: "MDN – Template literals",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals",
      },
    ],
  },
  {
    id: 5,
    title: "Métodos de Array",
    explanation:
      "Métodos como map, filter e reduce ajudam a trabalhar com listas de forma funcional.",
    description: "Programação funcional na prática.",
    example: "numeros.map(n => n * 2);",
    readings: [
      {
        title: "MDN – Array.map",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
      },
    ],
  },
  {
    id: 6,
    title: "Spread e Rest",
    explanation:
      "Permitem copiar e agrupar dados facilmente.",
    description: "Manipulação avançada de objetos e arrays.",
    example: "const novo = [...lista, 4];",
    readings: [
      {
        title: "MDN – Spread syntax",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
      },
    ],
  },
  {
    id: 7,
    title: "Closures",
    explanation:
      "Closures permitem que funções acessem variáveis fora de seu escopo.",
    description: "Conceito poderoso do JavaScript.",
    example: "function contador() { let c = 0; return () => ++c; }",
    readings: [
      {
        title: "MDN – Closures",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures",
      },
    ],
  },
  {
    id: 8,
    title: "Manipulação do DOM",
    explanation:
      "JavaScript pode acessar e modificar elementos HTML.",
    description: "Interação direta com a página.",
    example: "document.querySelector('h1').textContent = 'Olá';",
    readings: [
      {
        title: "MDN – DOM",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model",
      },
    ],
  },
  {
    id: 9,
    title: "Promises",
    explanation:
      "Promises representam operações assíncronas.",
    description: "Trabalhando com dados futuros.",
    example: "fetch(url).then(r => r.json());",
    readings: [
      {
        title: "MDN – Promises",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      },
    ],
  },
  {
    id: 10,
    title: "Async / Await",
    explanation:
      "Sintaxe moderna para lidar com código assíncrono.",
    description: "Código mais legível.",
    example: "const data = await fetch(url);",
    readings: [
      {
        title: "MDN – async/await",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function",
      },
    ],
  },
];

export default function Intermediario() {
  const [current, setCurrent] = useState(0);
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
            onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
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
                🪴 Nível Intermediário
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
                : console.log("Módulo intermediário finalizado")
            }
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            {current === topics.length - 1 ? "Finalizar" : "Avançar"}
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