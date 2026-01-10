import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Think JS Game
        </h1>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <p className="text-xl text-white/90 mb-6">
            Webapp desenvolvido com React, TypeScript e Tailwind CSS
          </p>

          <div className="space-y-4">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95"
            >
              Contador: {count}
            </button>

            <p className="text-white/70 text-sm">
              Clique no botão para incrementar o contador
            </p>
          </div>
        </div>

        <div className="mt-8 text-white/60 text-sm">
          <p>
            Edite os arquivos em{" "}
            <code className="bg-white/10 px-2 py-1 rounded">src/</code> para
            começar
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
