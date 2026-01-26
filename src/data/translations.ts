export type Language = 'pt-BR' | 'de' | 'es' | 'en';

export interface Translations {
  // Autenticação
  login: string;
  cadastro: string;
  email: string;
  senha: string;
  esqueciMinhaSenha: string;
  naoTemConta: string;
  temConta: string;
  entrar: string;
  registrar: string;
  
  // Dashboard/Home
  bemVindo: string;
  ola: string;
  dashboard: string;
  nivel: string;
  pontos: string;
  sequencia: string;
  dias: string;
  licoes: string;
  iniciarLicao: string;
  continuarLicao: string;
  proximaLicao: string;
  
  // Lições
  licao: string;
  perguntas: string;
  dificuldade: string;
  facil: string;
  intermediario: string;
  dificil: string;
  topicos: string;
  
  // Quiz
  pergunta: string;
  de: string;
  proxima: string;
  anterior: string;
  enviar: string;
  responder: string;
  resultado: string;
  correto: string;
  incorreto: string;
  explicacao: string;
  exemplo: string;
  
  // Resultados
  parabens: string;
  muitoBem: string;
  desempenho: string;
  acertos: string;
  erros: string;
  taxaAcerto: string;
  tempoDecorrido: string;
  pontuacaoObtida: string;
  refazer: string;
  voltarHome: string;
  proximoDesafio: string;
  
  // Geral
  carregando: string;
  erro: string;
  sucesso: string;
  sair: string;
  idioma: string;
  perfil: string;
  configuracoes: string;
  sobre: string;
  ajuda: string;
  fechar: string;
  cancelar: string;
  confirmar: string;
  compartilhar: string;
  naoHaLicoes: string;
}

export const translations: Record<Language, Translations> = {
  'pt-BR': {
    // Autenticação
    login: 'Entrar',
    cadastro: 'Cadastro',
    email: 'E-mail',
    senha: 'Senha',
    esqueciMinhaSenha: 'Esqueci minha senha',
    naoTemConta: 'Não tem uma conta?',
    temConta: 'Já tem uma conta?',
    entrar: 'Entrar',
    registrar: 'Registrar',
    
    // Dashboard/Home
    bemVindo: 'Bem-vindo',
    ola: 'Olá',
    dashboard: 'Dashboard',
    nivel: 'Nível',
    pontos: 'Pontos',
    sequencia: 'Sequência',
    dias: 'dias',
    licoes: 'Lições',
    iniciarLicao: 'Iniciar Lição',
    continuarLicao: 'Continuar Lição',
    proximaLicao: 'Próxima Lição',
    
    // Lições
    licao: 'Lição',
    perguntas: 'Perguntas',
    dificuldade: 'Dificuldade',
    facil: 'Fácil',
    intermediario: 'Intermediário',
    dificil: 'Difícil',
    topicos: 'Tópicos',
    
    // Quiz
    pergunta: 'Pergunta',
    de: 'de',
    proxima: 'Próxima',
    anterior: 'Anterior',
    enviar: 'Enviar',
    responder: 'Responder',
    resultado: 'Resultado',
    correto: 'Correto!',
    incorreto: 'Incorreto!',
    explicacao: 'Explicação',
    exemplo: 'Exemplo',
    
    // Resultados
    parabens: 'Parabéns!',
    muitoBem: 'Muito bem!',
    desempenho: 'Desempenho',
    acertos: 'Acertos',
    erros: 'Erros',
    taxaAcerto: 'Taxa de Acerto',
    tempoDecorrido: 'Tempo Decorrido',
    pontuacaoObtida: 'Pontuação Obtida',
    refazer: 'Refazer',
    voltarHome: 'Voltar ao Home',
    proximoDesafio: 'Próximo Desafio',
    
    // Geral
    carregando: 'Carregando...',
    erro: 'Erro',
    sucesso: 'Sucesso',
    sair: 'Sair',
    idioma: 'Idioma',
    perfil: 'Perfil',
    configuracoes: 'Configurações',
    sobre: 'Sobre',
    ajuda: 'Ajuda',
    fechar: 'Fechar',
    cancelar: 'Cancelar',
    confirmar: 'Confirmar',
    compartilhar: 'Compartilhar',
    naoHaLicoes: 'Nenhuma lição disponível',
  },
  
  'de': {
    // Authentifizierung
    login: 'Anmelden',
    cadastro: 'Registrierung',
    email: 'E-Mail',
    senha: 'Passwort',
    esqueciMinhaSenha: 'Passwort vergessen',
    naoTemConta: 'Kein Konto vorhanden?',
    temConta: 'Haben Sie bereits ein Konto?',
    entrar: 'Anmelden',
    registrar: 'Registrieren',
    
    // Dashboard/Home
    bemVindo: 'Willkommen',
    ola: 'Hallo',
    dashboard: 'Dashboard',
    nivel: 'Stufe',
    pontos: 'Punkte',
    sequencia: 'Sequenz',
    dias: 'Tage',
    licoes: 'Lektionen',
    iniciarLicao: 'Lektion starten',
    continuarLicao: 'Lektion fortsetzen',
    proximaLicao: 'Nächste Lektion',
    
    // Lektionen
    licao: 'Lektion',
    perguntas: 'Fragen',
    dificuldade: 'Schwierigkeit',
    facil: 'Einfach',
    intermediario: 'Mittelstufe',
    dificil: 'Schwierig',
    topicos: 'Themen',
    
    // Quiz
    pergunta: 'Frage',
    de: 'von',
    proxima: 'Nächste',
    anterior: 'Zurück',
    enviar: 'Senden',
    responder: 'Antworten',
    resultado: 'Ergebnis',
    correto: 'Richtig!',
    incorreto: 'Falsch!',
    explicacao: 'Erklärung',
    exemplo: 'Beispiel',
    
    // Ergebnisse
    parabens: 'Glückwunsch!',
    muitoBem: 'Sehr gut!',
    desempenho: 'Leistung',
    acertos: 'Richtige Antworten',
    erros: 'Fehler',
    taxaAcerto: 'Erfolgsquote',
    tempoDecorrido: 'Verstrichene Zeit',
    pontuacaoObtida: 'Erreichte Punktzahl',
    refazer: 'Wiederholen',
    voltarHome: 'Zurück zur Startseite',
    proximoDesafio: 'Nächste Herausforderung',
    
    // Allgemein
    carregando: 'Wird geladen...',
    erro: 'Fehler',
    sucesso: 'Erfolg',
    sair: 'Abmelden',
    idioma: 'Sprache',
    perfil: 'Profil',
    configuracoes: 'Einstellungen',
    sobre: 'Über',
    ajuda: 'Hilfe',
    fechar: 'Schließen',
    cancelar: 'Abbrechen',
    confirmar: 'Bestätigen',
    compartilhar: 'Teilen',
    naoHaLicoes: 'Keine Lektionen verfügbar',
  },
  
  'es': {
    // Autenticación
    login: 'Iniciar sesión',
    cadastro: 'Registro',
    email: 'Correo electrónico',
    senha: 'Contraseña',
    esqueciMinhaSenha: 'Olvidé mi contraseña',
    naoTemConta: '¿No tienes una cuenta?',
    temConta: '¿Ya tienes una cuenta?',
    entrar: 'Iniciar sesión',
    registrar: 'Registrarse',
    
    // Dashboard/Home
    bemVindo: 'Bienvenido',
    ola: 'Hola',
    dashboard: 'Panel de control',
    nivel: 'Nivel',
    pontos: 'Puntos',
    sequencia: 'Secuencia',
    dias: 'días',
    licoes: 'Lecciones',
    iniciarLicao: 'Iniciar lección',
    continuarLicao: 'Continuar lección',
    proximaLicao: 'Siguiente lección',
    
    // Lecciones
    licao: 'Lección',
    perguntas: 'Preguntas',
    dificuldade: 'Dificultad',
    facil: 'Fácil',
    intermediario: 'Intermedio',
    dificil: 'Difícil',
    topicos: 'Temas',
    
    // Quiz
    pergunta: 'Pregunta',
    de: 'de',
    proxima: 'Siguiente',
    anterior: 'Anterior',
    enviar: 'Enviar',
    responder: 'Responder',
    resultado: 'Resultado',
    correto: '¡Correcto!',
    incorreto: '¡Incorrecto!',
    explicacao: 'Explicación',
    exemplo: 'Ejemplo',
    
    // Resultados
    parabens: '¡Felicidades!',
    muitoBem: '¡Muy bien!',
    desempenho: 'Desempeño',
    acertos: 'Respuestas correctas',
    erros: 'Errores',
    taxaAcerto: 'Tasa de acierto',
    tempoDecorrido: 'Tiempo transcurrido',
    pontuacaoObtida: 'Puntuación obtenida',
    refazer: 'Repetir',
    voltarHome: 'Volver al inicio',
    proximoDesafio: 'Siguiente desafío',
    
    // General
    carregando: 'Cargando...',
    erro: 'Error',
    sucesso: 'Éxito',
    sair: 'Cerrar sesión',
    idioma: 'Idioma',
    perfil: 'Perfil',
    configuracoes: 'Configuración',
    sobre: 'Acerca de',
    ajuda: 'Ayuda',
    fechar: 'Cerrar',
    cancelar: 'Cancelar',
    confirmar: 'Confirmar',
    compartilhar: 'Compartir',
    naoHaLicoes: 'No hay lecciones disponibles',
  },
  
  'en': {
    // Authentication
    login: 'Sign In',
    cadastro: 'Sign Up',
    email: 'Email',
    senha: 'Password',
    esqueciMinhaSenha: 'Forgot password',
    naoTemConta: 'Don\'t have an account?',
    temConta: 'Already have an account?',
    entrar: 'Sign In',
    registrar: 'Register',
    
    // Dashboard/Home
    bemVindo: 'Welcome',
    ola: 'Hello',
    dashboard: 'Dashboard',
    nivel: 'Level',
    pontos: 'Points',
    sequencia: 'Streak',
    dias: 'days',
    licoes: 'Lessons',
    iniciarLicao: 'Start Lesson',
    continuarLicao: 'Continue Lesson',
    proximaLicao: 'Next Lesson',
    
    // Lessons
    licao: 'Lesson',
    perguntas: 'Questions',
    dificuldade: 'Difficulty',
    facil: 'Easy',
    intermediario: 'Intermediate',
    dificil: 'Hard',
    topicos: 'Topics',
    
    // Quiz
    pergunta: 'Question',
    de: 'of',
    proxima: 'Next',
    anterior: 'Previous',
    enviar: 'Submit',
    responder: 'Answer',
    resultado: 'Result',
    correto: 'Correct!',
    incorreto: 'Incorrect!',
    explicacao: 'Explanation',
    exemplo: 'Example',
    
    // Results
    parabens: 'Congratulations!',
    muitoBem: 'Great job!',
    desempenho: 'Performance',
    acertos: 'Correct Answers',
    erros: 'Errors',
    taxaAcerto: 'Success Rate',
    tempoDecorrido: 'Time Elapsed',
    pontuacaoObtida: 'Score Obtained',
    refazer: 'Retry',
    voltarHome: 'Back to Home',
    proximoDesafio: 'Next Challenge',
    
    // General
    carregando: 'Loading...',
    erro: 'Error',
    sucesso: 'Success',
    sair: 'Logout',
    idioma: 'Language',
    perfil: 'Profile',
    configuracoes: 'Settings',
    sobre: 'About',
    ajuda: 'Help',
    fechar: 'Close',
    cancelar: 'Cancel',
    confirmar: 'Confirm',
    compartilhar: 'Share',
    naoHaLicoes: 'No lessons available',
  },
};