// ===== CONTEXT =====
export { 
  TranslationContext, 
  TranslationProvider, 
  useTranslation 
} from './context/TranslationContext';
import { Language } from "./data/translations";

// ===== COMPONENTES =====
export { LanguageSelector } from './components/LanguageSelector';

// ===== DADOS =====
export { 
  translations, 
  type Language, 
  type Translations 
} from './data/translations';

// ===== HOOKS CUSTOMIZADOS =====
export {
  useTranslations,
  useLanguage,
  useFormats,
  usePluralization,
  useLanguageTheme,
  useFormValidation,
  useLocalizedMessages,
} from './hooks/useTranslationHooks';