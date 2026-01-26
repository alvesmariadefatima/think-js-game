import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { TranslationProvider } from "./context/TranslationContext";
import { GameProvider } from "./context/GameContext";

// Páginas
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Perguntas } from "./pages/Perguntas";
import { Parabens } from "./pages/Parabens";
import { Aprender } from "./pages/Aprender";
import Iniciante from "./pages/Iniciante";
import Intermediario from "./pages/Intermediario";
import Avancado from "./pages/Avancado";

/* =========================
   ROTAS PROTEGIDAS
========================= */
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated
    ? <>{children}</>
    : <Navigate to="/login" replace />;
}

/* =========================
   ROTAS PÚBLICAS
========================= */
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated
    ? <Navigate to="/home" replace />
    : <>{children}</>;
}

/* =========================
   ROTAS DA APLICAÇÃO
========================= */
function AppRoutes() {
  return (
    <Routes>
      {/* Rota padrão */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ===== PÚBLICAS ===== */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/cadastro"
        element={
          <PublicRoute>
            <Cadastro />
          </PublicRoute>
        }
      />

      {/* ===== PROTEGIDAS ===== */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/quiz/:lessonId"
        element={
          <PrivateRoute>
            <Perguntas />
          </PrivateRoute>
        }
      />

      <Route
        path="/parabens"
        element={
          <PrivateRoute>
            <Parabens />
          </PrivateRoute>
        }
      />

      <Route
        path="/aprender"
        element={
          <PrivateRoute>
            <Aprender />
          </PrivateRoute>
        }
      />

      <Route
        path="/iniciante"
        element={
          <PrivateRoute>
            <Iniciante />
          </PrivateRoute>
        }
      />

      <Route
        path="/intermediario"
        element={
          <PrivateRoute>
            <Intermediario />
          </PrivateRoute>
        }
      />

      <Route
        path="/avancado"
        element={
          <PrivateRoute>
            <Avancado />
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/* =========================
   APP PRINCIPAL
========================= */
export default function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <AuthProvider>
        <TranslationProvider>
          <GameProvider>
            <AppRoutes />
          </GameProvider>
        </TranslationProvider>
      </AuthProvider>
    </Router>
  );
}