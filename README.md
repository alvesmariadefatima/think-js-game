# Think JS Game

Aplicação web educacional estilo Duolingo para aprender JavaScript de forma interativa e divertida!

## 🎯 Sobre o Projeto

Think JS Game é uma plataforma de aprendizado gamificada que ensina JavaScript através de perguntas interativas, sistema de pontuação e progressão de níveis.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Navegação e rotas
- **Vite** - Build tool moderna e rápida

## 📱 Funcionalidades

- ✅ Sistema de autenticação (Login/Cadastro)
- ✅ Dashboard com estatísticas do usuário
- ✅ Sistema de lições progressivas
- ✅ Quiz interativo com perguntas de JavaScript
- ✅ Sistema de pontuação (XP) e níveis
- ✅ Sequência de dias (streak)
- ✅ Feedback imediato com explicações
- ✅ Tela de resultados e conquistas

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview
```

## 🏗️ Estrutura do Projeto

```
think-js-game/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   └── ProgressBar.tsx
│   ├── context/            # Gerenciamento de estado global
│   │   ├── AuthContext.tsx
│   │   └── GameContext.tsx
│   ├── data/               # Dados mockados
│   │   └── questions.ts
│   ├── pages/              # Páginas da aplicação
│   │   ├── Login.tsx
│   │   ├── Cadastro.tsx
│   │   ├── Home.tsx
│   │   ├── Perguntas.tsx
│   │   └── Parabens.tsx
│   ├── types/              # Definições TypeScript
│   │   └── index.ts
│   ├── App.tsx             # Componente raiz com rotas
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎮 Como Usar

1. **Cadastro/Login**: Crie uma conta ou faça login
2. **Dashboard**: Visualize suas estatísticas e lições disponíveis
3. **Escolha uma Lição**: Selecione uma lição de acordo com a dificuldade
4. **Responda as Perguntas**: Teste seus conhecimentos em JavaScript
5. **Veja o Resultado**: Acompanhe seu progresso e ganhe XP

## 🎨 Páginas

### 1. Login (`/login`)

- Tela de autenticação com email e senha
- Link para cadastro

### 2. Cadastro (`/cadastro`)

- Formulário de registro
- Validação de dados

### 3. Home (`/home`)

- Dashboard com estatísticas (XP, Nível, Streak)
- Lista de lições disponíveis
- Cards informativos

### 4. Perguntas (`/perguntas`)

- Quiz interativo
- Barra de progresso
- Código de exemplo
- Feedback imediato
- Explicações detalhadas

### 5. Parabéns (`/parabens`)

- Resumo do desempenho
- Estatísticas da sessão
- Opção de continuar ou refazer

## 📝 Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build otimizado para produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter

## 📄 Licença

Este projeto está sob a licença definida no arquivo LICENSE.
