import logoTexto from "../assets/logo-texto.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../components/LanguageSelector";

export function Aprender() {
  const { t } = useTranslation();

  const levels = [
    {
      icon: "🌱",
      title: t("learn.beginner.title"),
      route: "/iniciante",
      description: t("learn.beginner.description"),
      bgColor: "bg-gray-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
    {
      icon: "🪴",
      title: t("learn.intermediate.title"),
      route: "/intermediario",
      description: t("learn.intermediate.description"),
      bgColor: "bg-gray-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
    {
      icon: "🌳",
      title: t("learn.advanced.title"),
      route: "/avancado",
      description: t("learn.advanced.description"),
      bgColor: "bg-gray-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/home">
              <img
                src={logoTexto}
                alt="ThinkJS"
                className="h-8 sm:h-10 md:h-12"
              />
            </Link>
          </div>
          <LanguageSelector />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 mt-6 sm:mt-8">
          {t("learn.pageTitle")}
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
                {t("learn.startButton")}
              </Link>
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
