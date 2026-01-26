import React, { useMemo, useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import { Language } from "../data/translations";

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } =
    useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLangObj = useMemo(
    () =>
      availableLanguages.find((lang) => lang.code === currentLanguage) ??
      availableLanguages[0],
    [availableLanguages, currentLanguage]
  );

  const handleSelectLanguage = (language: Language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botão do seletor */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
      >
        <span className="text-xl">{currentLangObj.flag}</span>
        <span className="hidden sm:inline font-medium text-gray-700">
          {currentLangObj.name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-20">
            {availableLanguages.map((lang) => {
              const isActive = currentLanguage === lang.code;

              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-yellow-100 transition-colors duration-150 ${
                    isActive
                      ? "bg-yellow-50 border-l-4 border-yellow-400"
                      : "border-l-4 border-transparent"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium text-gray-700">
                    {lang.name}
                  </span>

                  {isActive && (
                    <svg
                      className="w-4 h-4 ml-auto text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;