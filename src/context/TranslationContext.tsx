import React, { createContext, useCallback, useEffect, useState } from 'react';
import { translations, Language } from '../data/translations';

type TranslationContextType = {
  currentLanguage: Language;
  t: (typeof translations)['pt-BR'];
  changeLanguage: (language: Language) => void;
  availableLanguages: { code: Language; name: string; flag: string }[];
};

export const TranslationContext =
  createContext<TranslationContextType | undefined>(undefined);

const STORAGE_KEY = 'think-js-language';

const AVAILABLE_LANGUAGES = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
] as const;

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt-BR');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && translations[stored]) {
      setCurrentLanguage(stored);
    }
  }, []);

  const changeLanguage = useCallback((language: Language) => {
    localStorage.setItem(STORAGE_KEY, language);
    setCurrentLanguage(language);
  }, []);

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        t: translations[currentLanguage],
        changeLanguage,
        availableLanguages: [...AVAILABLE_LANGUAGES],
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = React.useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used inside TranslationProvider');
  }
  return context;
};