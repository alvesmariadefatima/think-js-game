import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ChevronRight, ArrowLeft, X } from "lucide-react";
import { getBeginnerTopics } from "../data/beginnertopics";
import logoTexto from "../assets/logo-texto.png";

interface Topic {
  id: number;
  title: string;
  explanation: string;
  description: string;
  example: string;
  readings: { title: string; source: string }[];
}

const getTopics = (lang: string): Topic[] => {
  const topicsData: { [key: string]: Topic[] } = {
    "pt-BR": [
      {
        id: 1,
        title: "O que é JavaScript?",
        explanation:
          "JavaScript é uma linguagem de programação usada para dar vida às páginas da internet. Sempre que você clica em um botão, preenche um formulário ou vê algo mudar na tela sem recarregar, o JavaScript está agindo por trás.",
        description: "Introdução ao JavaScript e onde ele é usado.",
        example: "console.log('Olá, JavaScript!');",
        readings: [
          {
            title: "MDN – O que é JavaScript",
            source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          },
        ],
      },
      {
        id: 2,
        title: "Variáveis",
        explanation:
          "Variáveis são como caixas onde guardamos informações para usar depois, como nomes ou números.",
        description: "Aprendendo a guardar valores.",
        example: "let nome = 'Maria';\nconst idade = 18;",
        readings: [
          {
            title: "MDN – Variáveis",
            source:
              "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types",
          },
        ],
      },
    ],
    "en-US": [
      {
        id: 1,
        title: "What is JavaScript?",
        explanation:
          "JavaScript is a programming language used to bring web pages to life. Whenever you click a button, fill out a form, or see something change on the screen without reloading, JavaScript is working behind the scenes.",
        description: "Introduction to JavaScript and where it is used.",
        example: "console.log('Hello, JavaScript!');",
        readings: [
          {
            title: "MDN – What is JavaScript",
            source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
        ],
      },
      {
        id: 2,
        title: "Variables",
        explanation:
          "Variables are like boxes where we store information to use later, such as names or numbers.",
        description: "Learning to store values.",
        example: "let name = 'Maria';\nconst age = 18;",
        readings: [
          {
            title: "MDN – Variables",
            source:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
          },
        ],
      },
    ],
  };

  return topicsData[lang] || topicsData["pt-BR"];
};

const topics: Topic[] = [
  {
    id: 1,
    title: "O que é JavaScript?",
    explanation:
      "JavaScript é uma linguagem de programação usada para dar vida às páginas da internet. Sempre que você clica em um botão, preenche um formulário ou vê algo mudar na tela sem recarregar, o JavaScript está agindo por trás.",
    description: "Introdução ao JavaScript e onde ele é usado.",
    example: "console.log('Olá, JavaScript!');",
    readings: [
      {
        title: "MDN – O que é JavaScript",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
    ],
  },
  {
    id: 2,
    title: "Variáveis",
    explanation:
      "Variáveis são como caixas onde guardamos informações para usar depois, como nomes ou números.",
    description: "Aprendendo a guardar valores.",
    example: "let nome = 'Maria';\nconst idade = 18;",
    readings: [
      {
        title: "MDN – Variáveis",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types",
      },
    ],
  },
  {
    id: 3,
    title: "Tipos de Dados",
    explanation:
      "Os tipos de dados indicam que tipo de informação estamos guardando, como texto, números ou verdadeiro/falso.",
    description: "Entendendo os tipos básicos.",
    example: "let idade = 20;\nlet nome = 'Ana';\nlet ativo = true;",
    readings: [
      {
        title: "MDN – Tipos de Dados",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures",
      },
    ],
  },
  {
    id: 4,
    title: "Operadores",
    explanation:
      "Operadores permitem fazer contas e comparações, como somar números ou verificar se valores são iguais.",
    description: "Operações básicas.",
    example: "let soma = 5 + 3;\nlet maior = 10 > 5;",
    readings: [
      {
        title: "MDN – Operadores",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators",
      },
    ],
  },
  {
    id: 5,
    title: "Condicionais",
    explanation:
      "Condicionais ajudam o programa a tomar decisões, como executar algo apenas se uma condição for verdadeira.",
    description: "Tomando decisões com if.",
    example: "if (idade >= 18) {\n  console.log('Maior de idade');\n}",
    readings: [
      {
        title: "MDN – if/else",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else",
      },
    ],
  },
  {
    id: 6,
    title: "Funções",
    explanation:
      "Funções são blocos de código reutilizáveis que executam uma tarefa quando chamados.",
    description: "Criando e usando funções.",
    example: "function saudacao() {\n  console.log('Olá!');\n}",
    readings: [
      {
        title: "MDN – Funções",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
      },
    ],
  },
  {
    id: 7,
    title: "Arrays",
    explanation: "Arrays são listas usadas para guardar vários valores juntos.",
    description: "Trabalhando com listas.",
    example: "let frutas = ['maçã', 'banana'];",
    readings: [
      {
        title: "MDN – Arrays",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
    ],
  },
  {
    id: 8,
    title: "Objetos",
    explanation:
      "Objetos permitem agrupar informações relacionadas em um único lugar.",
    description: "Estruturando dados.",
    example: "let pessoa = { nome: 'João', idade: 30 };",
    readings: [
      {
        title: "MDN – Objetos",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects",
      },
    ],
  },
  {
    id: 9,
    title: "Loops",
    explanation:
      "Loops repetem ações automaticamente, evitando repetir código manualmente.",
    description: "Repetições com for.",
    example: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    readings: [
      {
        title: "MDN – Loops",
        source:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration",
      },
    ],
  },
  {
    id: 10,
    title: "Eventos",
    explanation:
      "Eventos acontecem quando o usuário interage com a página, como clicar em um botão.",
    description: "Interação com o usuário.",
    example: "button.addEventListener('click', () => console.log('Clicou'));",
    readings: [
      {
        title: "MDN – Eventos",
        source: "https://developer.mozilla.org/pt-BR/docs/Web/API/Event",
      },
    ],
  },
];

export default function Iniciante() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const topics = useMemo(() => getBeginnerTopics("pt-BR"), []);
  const topic = topics[current];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoTexto} alt="ThinkJS" className="h-50" />
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
          <h1 className="text-2xl text-gray-700 font-bold">🌱 Iniciante</h1>
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
