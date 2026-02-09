import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function Aprender() {
  const levels = [
    {
      icon: "🌱",
      title: "Iniciante",
      route: "/iniciante",
      description: "Comece do zero e aprenda os fundamentos do JavaScript",
      bgColor: "bg-gray-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
    {
      icon: "🪴",
      title: "Intermediário",
      route: "/intermediario",
      description: "Aprofunde seus conhecimentos em conceitos mais avançados",
      bgColor: "bg-gray-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
    {
      icon: "🌳",
      title: "Avançado",
      route: "/avancado",
      description: "Domine tópicos complexos e técnicas profissionais",
      bgColor: "bg-gray-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 mt-6 sm:mt-8">
          Escolha seu Caminho de Aprendizado
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

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {level.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow">
                {level.description}
              </p>

              <Link
                to={level.route}
                className={`${level.buttonColor} text-gray-800 font-bold py-2.5 sm:py-3 px-8 sm:px-12 rounded-md transition-colors w-full text-sm sm:text-base text-center`}
              >
                Começar
              </Link>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default Aprender;
