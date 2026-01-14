import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { User, LessonProgress } from "../types";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validation";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserProgress: (
    lessonId: string,
    correctAnswers: number,
    totalQuestions: number
  ) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Validar email
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      throw new Error(emailValidation.error);
    }

    // Validar senha
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      throw new Error(passwordValidation.error);
    }

    // Verificar se usuário existe no localStorage
    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];

    const existingUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!existingUser) {
      throw new Error("Email ou senha incorretos");
    }

    // Simulação de login
    await new Promise((resolve) => setTimeout(resolve, 500));

    const userToLogin: User = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      level: existingUser.level || 1,
      xp: existingUser.xp || 0,
      streak: existingUser.streak || 0,
    };

    setUser(userToLogin);
    localStorage.setItem("user", JSON.stringify(userToLogin));
  };

  const register = async (name: string, email: string, password: string) => {
    // Validar nome
    const nameValidation = validateName(name);
    if (!nameValidation.valid) {
      throw new Error(nameValidation.error);
    }

    // Validar email
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      throw new Error(emailValidation.error);
    }

    // Validar senha
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      throw new Error(passwordValidation.error);
    }

    // Verificar se email já existe
    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];

    const emailExists = users.some((u: any) => u.email === email);
    if (emailExists) {
      throw new Error("Email já cadastrado");
    }

    // Simulação de cadastro
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newUser: User = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      level: 1,
      xp: 0,
      streak: 0,
    };

    // Salvar usuário na lista de usuários
    const updatedUsers = [...users, { ...newUser, password }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const updateUserProgress = (
    lessonId: string,
    correctAnswers: number,
    totalQuestions: number
  ) => {
    if (!user) return;

    const lessonProgress: LessonProgress = {
      lessonId,
      correctAnswers,
      totalQuestions,
      completedAt: new Date(),
    };

    const completedLessons = user.completedLessons || [];
    const existingIndex = completedLessons.findIndex(
      (l) => l.lessonId === lessonId
    );

    let updatedLessons;
    if (existingIndex >= 0) {
      // Atualiza progresso existente apenas se melhorou
      const existing = completedLessons[existingIndex];
      if (correctAnswers > existing.correctAnswers) {
        updatedLessons = [...completedLessons];
        updatedLessons[existingIndex] = lessonProgress;
      } else {
        updatedLessons = completedLessons;
      }
    } else {
      updatedLessons = [...completedLessons, lessonProgress];
    }

    const updatedUser: User = {
      ...user,
      completedLessons: updatedLessons,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Atualizar também na lista de usuários
    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];
    const userIndex = users.findIndex((u: any) => u.id === user.id);

    if (userIndex >= 0) {
      users[userIndex] = {
        ...users[userIndex],
        completedLessons: updatedLessons,
      };
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUserProgress,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
