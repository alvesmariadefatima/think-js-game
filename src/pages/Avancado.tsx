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
    title: "Execution Context e Call Stack",
    explanation:
      "O JavaScript executa código criando contextos de execução que são empilhados na Call Stack.",
    description: "Como o JS lê, executa e finaliza funções.",
    example: "function a() { b(); }\nfunction b() { console.log('JS'); }\na();",
    readings: [
      {
        title: "MDN – Execution Context",
        source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_context",
      },
    ],
  },
  {
    id: 2,
    title: "Event Loop",
    explanation:
      "O Event Loop coordena a execução assíncrona entre Call Stack, Web APIs e Callback Queue.",
    description: "Entendendo concorrência no JavaScript.",
    example: "setTimeout(() => console.log('Async'), 0);\nconsole.log('Sync');",
    readings: [
      {
        title: "MDN – Event Loop",
        source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",
      },
    ],
  },
  {
    id: 3,
    title: "Prototypes",
    explanation:
      "JavaScript usa herança baseada em protótipos, não em classes tradicionais.",
    description: "Prototype chain e reutilização de comportamento.",
    example: "function Pessoa() {}\nPessoa.prototype.falar = () => 'Oi';",
    readings: [
      {
        title: "MDN – Prototypes",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
      },
    ],
  },
  {
    id: 4,
    title: "Classes e Herança",
    explanation:
      "Classes são uma abstração sintática sobre o sistema de protótipos.",
    description: "Sintaxe moderna para herança.",
    example: "class Animal { falar() {} }\nclass Cachorro extends Animal {}",
    readings: [
      {
        title: "MDN – Classes",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes",
      },
    ],
  },
  {
    id: 5,
    title: "this, call, apply e bind",
    explanation:
      "O valor de this depende do contexto de execução.",
    description: "Controle explícito do contexto.",
    example: "func.call(obj);\nfunc.apply(obj);\nfunc.bind(obj);",
    readings: [
      {
        title: "MDN – this",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this",
      },
    ],
  },
  {
    id: 6,
    title: "Imutabilidade",
    explanation:
      "Evitar mutações torna o código mais previsível e seguro.",
    description: "Base para programação funcional.",
    example: "const novo = [...lista, 4];",
    readings: [
      {
        title: "MDN – Immutability",
        source: "https://developer.mozilla.org/en-US/docs/Glossary/Immutable",
      },
    ],
  },
  {
    id: 7,
    title: "Currying e Composition",
    explanation:
      "Técnicas funcionais para criar funções reutilizáveis.",
    description: "Funções puras e encadeamento.",
    example: "const soma = a => b => a + b;",
    readings: [
      {
        title: "MDN – Functional Programming",
        source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Functional_programming",
      },
    ],
  },
  {
    id: 8,
    title: "Design Patterns",
    explanation:
      "Padrões resolvem problemas recorrentes de arquitetura.",
    description: "Module e Factory Pattern.",
    example: "const Modulo = (() => ({ init() {} }))();",
    readings: [
      {
        title: "MDN – Design Patterns",
        source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Design_Patterns",
      },
    ],
  },
  {
    id: 9,
    title: "Performance e Memória",
    explanation:
      "Código eficiente evita vazamentos de memória e gargalos.",
    description: "Boas práticas avançadas.",
    example: "console.time('loop');\nconsole.timeEnd('loop');",
    readings: [
      {
        title: "MDN – Performance",
        source: "https://developer.mozilla.org/en-US/docs/Web/Performance",
      },
    ],
  },
  {
    id: 10,
    title: "Módulos ES",
    explanation:
      "Módulos organizam e isolam código.",
    description: "Import e export modernos.",
    example: "export default function() {}\nimport fn from './file';",
    readings: [
      {
        title: "MDN – Modules",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules",
      },
    ],
  },
];

export default function Avancado() {
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