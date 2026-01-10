import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, _password: string) => {
    // Simulação de login - substituir por chamada real à API
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser: User = {
      id: "1",
      name: "Desenvolvedor",
      email,
      level: 1,
      xp: 0,
      streak: 0,
    };

    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const register = async (name: string, email: string, _password: string) => {
    // Simulação de cadastro - substituir por chamada real à API
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      level: 1,
      xp: 0,
      streak: 0,
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
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
