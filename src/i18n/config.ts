import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import deDE from './locales/de-DE.json';
import esES from './locales/es-ES.json';

const savedLanguage = localStorage.getItem('i18nextLng') || 'pt-BR';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        translation: ptBR
      },
      'en-US': {
        translation: enUS
      },
      'de-DE': {
        translation: deDE
      },
      'es-ES': {
        translation: esES
      }
    },
    lng: savedLanguage,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
