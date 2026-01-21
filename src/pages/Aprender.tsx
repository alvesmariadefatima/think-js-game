import logoTexto from "../assets/logo-texto.png";
import { Link } from "react-router-dom"

export function Aprender() {
  const levels = [
    {
      icon: '🌱',
      title: 'Iniciante',
      description: 'Neste módulo introdutório de JavaScript, você aprenderá os conceitos fundamentais da linguagem como se funciona na prática. Vamos aprender a armazenar e manipular dados, entender a lógica de programação e compreender como o JavaScript interpreta e exibe informações.',
      bgColor: 'bg-gray-50',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      icon: '🪴',
      title: 'Intermediário',
      description: 'No módulo intermediário de JavaScript, você já aprimorou seus conhecimentos e desenvolveu a lógica! Então é momento de explorar estruturas de dados mais complexas e a concatenação de template strings, permitindo que você crie integrações e iterações.',
      bgColor: 'bg-gray-50',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      icon: '🌳',
      title: 'Avançado',
      description: 'No módulo avançado de JavaScript, você irá explorar conceitos mais sofisticados como programação orientada a objetos, freará soluções altamente dinâmicas. Sendo estruturado objetos, arrays, métodos, funções de alta ordem, e mergulhará em conceitos do dados, permitindo estruturar e processar informações de forma escalável.',
      bgColor: 'bg-gray-50',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/home">
                <img src={logoTexto} alt="ThinkJS" className="h-8 sm:h-10 md:h-12" />
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 mt-6 sm:mt-8">
          Fundamentos de Javascript
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`${level.bgColor} rounded-lg shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition-transform hover:scale-105`}
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6">
                {level.icon}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {level.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow">
                {level.description}
              </p>

              <button
                className={`${level.buttonColor} text-gray-800 font-bold py-2.5 sm:py-3 px-8 sm:px-12 rounded-md transition-colors w-full text-sm sm:text-base`}
              >
                Iniciar
              </button>
            </div>
          ))}
        </div>

        <footer className="bg-gray-50 text-center mt-12 sm:mt-16 py-6 text-xs sm:text-sm text-gray-500 px-4">
          Developers by Ewersson and Maria de Fátima
        </footer>
      </main>
    </div>
  );
}

export default Aprender;