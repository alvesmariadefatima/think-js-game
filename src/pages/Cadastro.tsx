import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validatePasswordMatch } from "../utils/validation";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";

export function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    }

    // Validar se senhas coincidem
    const passwordMatchValidation = validatePasswordMatch(
      password,
      confirmPassword,
    );
    if (!passwordMatchValidation.valid) {
      setError(passwordMatchValidation.error || "As senhas não coincidem");
      return;
    }

    setLoading(true);
    try {
      await register(name.trim(), email.trim(), password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message || "Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt="ThinkJS"
              className="h-30 sm:h-20 md:h-24 lg:h-28"
            />
          </Link>
        </div>

        <h2 className="text-xl text-gray-700 font-semibold mb-6">
          Criar Conta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg  text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg  text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Senha
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border text-gray-600 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
        </form>

        <div className="flex gap-3 mt-6">
          <Link to="/login" className="flex-1">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition">
              Voltar
            </button>
          </Link>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Carregando..." : "Criar Conta"}
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
