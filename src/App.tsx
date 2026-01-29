import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Perguntas } from "./pages/Perguntas";
import { Parabens } from "./pages/Parabens";
import { Aprender } from "./pages/Aprender";
import Iniciante from "./pages/Iniciante";
import Intermediario from "./pages/Intermediario";
import Avancado from "./pages/Avancado";
import { Homepage } from "./pages/Homepage";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/home" />;
}

function AppRoutes() {
  return (
    <Routes>

      <Route 
        path="/"
        element={
          <PublicRoute>
            <Homepage />
          </PublicRoute>
        }
      />

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

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/perguntas"
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

      <Route path="/" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <AuthProvider>
        <GameProvider>
          <AppRoutes />
        </GameProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
