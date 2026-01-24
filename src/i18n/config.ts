import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-br.json';
import enUS from './locales/en-us.json';
import deDE from './locales/de-de.json';
import esES from './locales/es-es.json';

const savedLanguage = localStorage.getItem('i18nextLng') || 'pt-br';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-br': {
        translation: ptBR
      },
      'en-us': {
        translation: enUS
      },
      'de-de': {
        translation: deDE
      },
      'es-es': {
        translation: esES
      }
    },
    lng: savedLanguage,
    fallbackLng: 'pt-br',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
