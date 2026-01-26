import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Language, Translations, translations } from '../data/translations';

interface TranslationContextType {
  currentLanguage: Language;
  t: Translations;
  changeLanguage: (language: Language) => void;
  availableLanguages: Array<{ code: Language; name: string; flag: string }>;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'think-js-language';

const AVAILABLE_LANGUAGES: Array<{ code: Language; name: string; flag: string }> = [
  { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Tentar recuperar idioma armazenado
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && Object.keys(translations).includes(stored)) {
      return stored;
    }

    // Tentar detectar idioma do navegador
    const browserLang = navigator.language.split('-')[0];
    const browserLanguage = detectBrowserLanguage(browserLang);
    return browserLanguage;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = useCallback((language: Language) => {
    if (Object.keys(translations).includes(language)) {
      setCurrentLanguage(language);
    }
  }, []);

  const value: TranslationContextType = {
    currentLanguage,
    t: translations[currentLanguage],
    changeLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * Hook personalizado para usar traduções em qualquer componente
 */
export const useTranslation = (): TranslationContextType => {
  const context = React.useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation deve ser usado dentro de TranslationProvider');
  }
  return context;
};

/**
 * Detecta o idioma do navegador e mapeia para um idioma suportado
 */
function detectBrowserLanguage(browserLang: string): Language {
  const languageMap: Record<string, Language> = {
    pt: 'pt-BR',
    de: 'de',
    es: 'es',
    en: 'en',
  };

  return languageMap[browserLang] || 'pt-BR';
}