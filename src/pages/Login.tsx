import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-2xl">🐝</span>
          </div>
          <div>
            <h1 className="text-2xl text-gray-600 font-bold">ThinkJS</h1>
            <p className="text-sm text-gray-600">Aprenda JavaScript!</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6  text-gray-600">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-600 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
            />
          </div>
        </form>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg mt-6 transition"
        >
          {loading ? "Entrando..." : "Login"}
        </button>

        <Link to="/cadastro">
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg mt-3 transition">
            Cadastro
          </button>
        </Link>

        <button className="w-full text-sm text-gray-600 hover:text-gray-900 mt-4">
          Esqueci minha senha
        </button>

        <p className="text-xs text-gray-500 text-center mt-8">
          Developers by Ewerson and Maria de Fátima
        </p>
      </div>
    </div>
  );
}
