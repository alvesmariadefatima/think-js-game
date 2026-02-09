import logoParabens from "../assets/logo-parabens.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logoTexto from "../assets/logo-texto.png";

export function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoTexto} alt="ThinkJS" className="h-50" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center lg:justify-start">
            <img
              src={logoParabens}
              alt="Mascote ThinkJS"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left w-full">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Aprenda brincando.
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Programe transformando.
              </h2>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Aprenda JavaScript através de quizzes interativos e conceitos
              teóricos de forma divertida.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/login" className="flex-1 sm:flex-none">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 sm:px-6 rounded-lg transition text-sm sm:text-base">
                  Inicie sua jornada aqui
                </button>
              </Link>
              <Link to="/cadastro" className="flex-1 sm:flex-none">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 sm:px-6 rounded-lg transition text-sm sm:text-base">
                  Faça seu cadastro
                </button>
              </Link>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Aprenda JavaScript de forma simples e divertida: exercícios
              práticos, sistema de níveis e seu progresso sempre visível.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
