import { Question, Lesson } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    question: 'Qual é a forma correta de declarar uma variável em JavaScript?',
    options: [
      'variable nome = "João"',
      'let nome = "João"',
      'var nome == "João"',
      'const nome := "João"'
    ],
    correctAnswer: 1,
    explanation: 'A palavra-chave "let" é usada para declarar variáveis em JavaScript moderno.',
    difficulty: 'easy',
    topic: 'Variáveis',
    xpReward: 10
  },
  {
    id: 'q2',
    question: 'O que o seguinte código imprime?',
    code: 'console.log(typeof null);',
    options: [
      'null',
      'undefined',
      'object',
      'number'
    ],
    correctAnswer: 2,
    explanation: 'typeof null retorna "object" por razões históricas do JavaScript. Isso é considerado um bug da linguagem.',
    difficulty: 'medium',
    topic: 'Tipos de Dados',
    xpReward: 20
  },
  {
    id: 'q3',
    question: 'Qual é a diferença entre "==" e "===" em JavaScript?',
    options: [
      'Não há diferença',
      '== compara valor e tipo, === compara apenas valor',
      '=== compara valor e tipo, == compara apenas valor',
      '== é para números, === é para strings'
    ],
    correctAnswer: 2,
    explanation: 'O operador === (igualdade estrita) compara tanto o valor quanto o tipo, enquanto == (igualdade frouxa) compara apenas o valor após coerção de tipo.',
    difficulty: 'easy',
    topic: 'Operadores',
    xpReward: 10
  },
  {
    id: 'q4',
    question: 'O que é uma arrow function?',
    code: 'const soma = (a, b) => a + b;',
    options: [
      'Uma função antiga do JavaScript',
      'Uma sintaxe moderna e concisa para escrever funções',
      'Um tipo de loop',
      'Um operador matemático'
    ],
    correctAnswer: 1,
    explanation: 'Arrow functions (=>) são uma sintaxe moderna introduzida no ES6 para escrever funções de forma mais concisa.',
    difficulty: 'easy',
    topic: 'Funções',
    xpReward: 15
  },
  {
    id: 'q5',
    question: 'Qual será o resultado?',
    code: '[1, 2, 3].map(x => x * 2)',
    options: [
      '[1, 2, 3]',
      '[2, 4, 6]',
      '[1, 4, 9]',
      'Error'
    ],
    correctAnswer: 1,
    explanation: 'O método map() cria um novo array com os resultados da chamada de uma função para cada elemento. Aqui, multiplica cada número por 2.',
    difficulty: 'medium',
    topic: 'Arrays',
    xpReward: 20
  },
  {
    id: 'q6',
    question: 'O que é "this" em JavaScript?',
    options: [
      'Uma palavra reservada sem uso',
      'Referência ao objeto atual',
      'Um tipo de variável',
      'Uma função built-in'
    ],
    correctAnswer: 1,
    explanation: 'A palavra-chave "this" refere-se ao objeto que está executando o código atual.',
    difficulty: 'medium',
    topic: 'Contexto',
    xpReward: 20
  },
  {
    id: 'q7',
    question: 'Qual é a saída?',
    code: 'console.log(1 + "2" + 3);',
    options: [
      '123',
      '6',
      '33',
      '15'
    ],
    correctAnswer: 0,
    explanation: 'JavaScript converte os números para string e concatena todos os valores, resultando em "123".',
    difficulty: 'medium',
    topic: 'Coerção de Tipos',
    xpReward: 20
  },
  {
    id: 'q8',
    question: 'O que é um Promise em JavaScript?',
    options: [
      'Um tipo de loop',
      'Um objeto que representa a eventual conclusão ou falha de uma operação assíncrona',
      'Uma variável especial',
      'Um método de array'
    ],
    correctAnswer: 1,
    explanation: 'Promise é um objeto usado para processamento assíncrono, representando um valor que pode estar disponível agora, no futuro, ou nunca.',
    difficulty: 'hard',
    topic: 'Assíncrono',
    xpReward: 30
  }
];

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Fundamentos do JavaScript',
    description: 'Aprenda os conceitos básicos da linguagem JavaScript',
    difficulty: 'easy',
    questions: questions.slice(0, 3),
    isLocked: false,
    xpRequired: 0
  },
  {
    id: 'lesson-2',
    title: 'Funções e Arrays',
    description: 'Domine funções, arrow functions e métodos de array',
    difficulty: 'medium',
    questions: questions.slice(3, 6),
    isLocked: false,
    xpRequired: 30
  },
  {
    id: 'lesson-3',
    title: 'JavaScript Avançado',
    description: 'Conceitos avançados como this, promises e async/await',
    difficulty: 'hard',
    questions: questions.slice(6, 8),
    isLocked: false,
    xpRequired: 90
  }
];
