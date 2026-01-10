# Think JS Game

Webapp desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server ultra-rápido

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
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   ├── index.css        # Estilos globais + Tailwind
│   └── vite-env.d.ts    # Tipos do Vite
├── public/              # Arquivos estáticos
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── vite.config.ts       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
└── postcss.config.js    # Configuração PostCSS
```

## 🎨 Desenvolvimento

O projeto usa:

- **ESLint** para linting
- **TypeScript** em modo strict
- **Hot Module Replacement (HMR)** para desenvolvimento rápido

## 📝 Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build otimizado para produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter

## 📄 Licença

Este projeto está sob a licença definida no arquivo LICENSE.
