import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Language, Translations, translations } from "../data/translations";

interface TranslationContextType {
  currentLanguage: Language;
  t: Translations;
  changeLanguage: (language: Language) => void;
  availableLanguages: Array<{ code: Language; name: string; flag: string }>;
}

export const TranslationContext =
  createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = "think-js-language";

const AVAILABLE_LANGUAGES: TranslationContextType["availableLanguages"] = [
  { code: "pt-BR", name: "Português (Brasil)", flag: "🇧🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored && isValidLanguage(stored)) {
      return stored;
    }

    return detectBrowserLanguage(navigator.language);
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    document.documentElement.lang = currentLanguage.split("-")[0];
  }, [currentLanguage]);

  const changeLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language);
  }, []);

  const value = useMemo<TranslationContextType>(
    () => ({
      currentLanguage,
      t: translations[currentLanguage],
      changeLanguage,
      availableLanguages: AVAILABLE_LANGUAGES,
    }),
    [currentLanguage, changeLanguage]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * Hook para acessar traduções
 */
export const useTranslation = (): TranslationContextType => {
  const context = React.useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslation deve ser usado dentro de TranslationProvider"
    );
  }
  return context;
};

/**
 * Valida se a string é um idioma suportado
 */
function isValidLanguage(value: string): value is Language {
  return value in translations;
}

/**
 * Detecta idioma do navegador
 */
function detectBrowserLanguage(lang: string): Language {
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";

  return "pt-BR";
}