import { useTranslation } from '../context/TranslationContext';
import { Language } from '../data/translations';

/**
 * Hook para obter apenas as traduções
 * Útil quando você não precisa de changeLanguage ou availableLanguages
 */
export const useTranslations = () => {
  const { t } = useTranslation();
  return t;
};

/**
 * Hook para gerenciar o idioma atual
 * Útil para componentes que precisam trocar idioma
 */
export const useLanguage = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useTranslation();
  
  return {
    current: currentLanguage,
    change: changeLanguage,
    available: availableLanguages,
    isPortuguese: currentLanguage === 'pt-BR',
    isGerman: currentLanguage === 'de',
    isSpanish: currentLanguage === 'es',
    isEnglish: currentLanguage === 'en',
  };
};

/**
 * Hook para formatar valores de acordo com o idioma
 * Exemplos: datas, números, moedas
 */
export const useFormats = () => {
  const { currentLanguage } = useTranslation();

  const formatNumber = (num: number): string => {
    const locales: Record<Language, string> = {
      'pt-BR': 'pt-BR',
      'de': 'de-DE',
      'es': 'es-ES',
      'en': 'en-US',
    };

    return new Intl.NumberFormat(locales[currentLanguage]).format(num);
  };

  const formatCurrency = (value: number, currency = 'BRL'): string => {
    const locales: Record<Language, string> = {
      'pt-BR': 'pt-BR',
      'de': 'de-DE',
      'es': 'es-ES',
      'en': 'en-US',
    };

    return new Intl.NumberFormat(locales[currentLanguage], {
      style: 'currency',
      currency,
    }).format(value);
  };

  const formatDate = (date: Date): string => {
    const locales: Record<Language, string> = {
      'pt-BR': 'pt-BR',
      'de': 'de-DE',
      'es': 'es-ES',
      'en': 'en-US',
    };

    return new Intl.DateTimeFormat(locales[currentLanguage], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const formatTime = (date: Date): string => {
    const locales: Record<Language, string> = {
      'pt-BR': 'pt-BR',
      'de': 'de-DE',
      'es': 'es-ES',
      'en': 'en-US',
    };

    return new Intl.DateTimeFormat(locales[currentLanguage], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  const formatDateTime = (date: Date): string => {
    const locales: Record<Language, string> = {
      'pt-BR': 'pt-BR',
      'de': 'de-DE',
      'es': 'es-ES',
      'en': 'en-US',
    };

    return new Intl.DateTimeFormat(locales[currentLanguage], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return {
    formatNumber,
    formatCurrency,
    formatDate,
    formatTime,
    formatDateTime,
  };
};

/**
 * Hook para pluralização baseada no idioma
 */
export const usePluralization = () => {
  const { currentLanguage } = useTranslation();

  const pluralize = (count: number, singular: string, plural: string): string => {
    // Regras diferentes por idioma
    if (currentLanguage === 'pt-BR' || currentLanguage === 'es' || currentLanguage === 'en') {
      return count === 1 ? singular : plural;
    }

    // Alemão tem mais regras complexas, mas para simplificar:
    return count === 1 ? singular : plural;
  };

  return { pluralize };
};

/**
 * Hook para gerenciar temas baseados em idioma
 * Alguns idiomas podem ter preferências de direção (RTL)
 */
export const useLanguageTheme = () => {
  const { currentLanguage } = useTranslation();

  return {
    isRTL: false, // Todos os idiomas são LTR por enquanto
    direction: 'ltr' as const,
    textAlign: 'left' as const,
    languageName: {
      'pt-BR': 'Português (Brasil)',
      'de': 'Deutsch',
      'es': 'Español',
      'en': 'English',
    }[currentLanguage],
  };
};

/**
 * Hook para validação de formulários com mensagens de erro localizadas
 */
export const useFormValidation = () => {
  const { t } = useTranslation();

  const validateEmail = (email: string): { valid: boolean; error?: string } => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return { valid: false, error: `${t.email} é obrigatório` };
    }
    if (!emailRegex.test(email)) {
      return { valid: false, error: `${t.email} inválido` };
    }
    return { valid: true };
  };

  const validatePassword = (password: string): { valid: boolean; error?: string } => {
    if (!password) {
      return { valid: false, error: `${t.senha} é obrigatória` };
    }
    if (password.length < 6) {
      return { valid: false, error: `${t.senha} deve ter pelo menos 6 caracteres` };
    }
    return { valid: true };
  };

  const validateRequired = (value: string, fieldName: string): { valid: boolean; error?: string } => {
    if (!value || value.trim() === '') {
      return { valid: false, error: `${fieldName} é obrigatório` };
    }
    return { valid: true };
  };

  return {
    validateEmail,
    validatePassword,
    validateRequired,
  };
};

/**
 * Hook para gerenciar notificações com mensagens localizadas
 */
export const useLocalizedMessages = () => {
  const { t } = useTranslation();

  const getSuccessMessage = (action: string): string => {
    const messages: Record<string, string> = {
      login: `${t.sucesso}: Login realizado com sucesso!`,
      register: `${t.sucesso}: Conta criada com sucesso!`,
      save: `${t.sucesso}: Dados salvos com sucesso!`,
      delete: `${t.sucesso}: Deletado com sucesso!`,
      update: `${t.sucesso}: Atualizado com sucesso!`,
    };
    return messages[action] || t.sucesso;
  };

  const getErrorMessage = (error: string): string => {
    const messages: Record<string, string> = {
      'network': `${t.erro}: Erro de conexão. Tente novamente.`,
      'timeout': `${t.erro}: Operação expirou. Tente novamente.`,
      'notfound': `${t.erro}: Recurso não encontrado.`,
      'unauthorized': `${t.erro}: Você não está autorizado.`,
      'validation': `${t.erro}: Dados inválidos.`,
    };
    return messages[error] || `${t.erro}: Algo deu errado!`;
  };

  return {
    getSuccessMessage,
    getErrorMessage,
  };
};