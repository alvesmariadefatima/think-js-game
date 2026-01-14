export const validateEmail = (email: string): { valid: boolean; error?: string } => {
  if (!email) {
    return { valid: false, error: "Email é obrigatório" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Email inválido" };
  }

  return { valid: true };
};

export const validatePassword = (password: string): { valid: boolean; error?: string } => {
  if (!password) {
    return { valid: false, error: "Senha é obrigatória" };
  }

  if (password.length < 6) {
    return { valid: false, error: "Senha deve ter no mínimo 6 caracteres" };
  }

  if (password.length > 50) {
    return { valid: false, error: "Senha muito longa (máximo 50 caracteres)" };
  }

  // Verifica se tem pelo menos uma letra
  if (!/[a-zA-Z]/.test(password)) {
    return { valid: false, error: "Senha deve conter pelo menos uma letra" };
  }

  // Verifica se tem pelo menos um número
  if (!/\d/.test(password)) {
    return { valid: false, error: "Senha deve conter pelo menos um número" };
  }

  return { valid: true };
};

export const validateName = (name: string): { valid: boolean; error?: string } => {
  if (!name) {
    return { valid: false, error: "Nome é obrigatório" };
  }

  if (name.trim().length < 3) {
    return { valid: false, error: "Nome deve ter no mínimo 3 caracteres" };
  }

  if (name.length > 100) {
    return { valid: false, error: "Nome muito longo (máximo 100 caracteres)" };
  }

  // Verifica se contém apenas letras e espaços
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
    return { valid: false, error: "Nome deve conter apenas letras" };
  }

  return { valid: true };
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): { valid: boolean; error?: string } => {
  if (password !== confirmPassword) {
    return { valid: false, error: "As senhas não coincidem" };
  }

  return { valid: true };
};
