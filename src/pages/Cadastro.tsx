import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "../context/TranslationContext";
import LanguageSelector from "../components/LanguageSelector";
import { validatePasswordMatch } from "../utils/validation";
import { LanguageSelector } from "../components/LanguageSelector";
import logo from "../assets/logo.png";
import { useTranslation } from "../context/TranslationContext";

export function Cadastro() {
  const { t } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError(t.erro);
      return;
    }

    const passwordMatchValidation = validatePasswordMatch(
      password,
      confirmPassword
    );

    if (!passwordMatchValidation.valid) {
      setError(passwordMatchValidation.error || t.erro);
      return;
    }

    setLoading(true);
    try {
      await register(name.trim(), email.trim(), password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message || t.erro);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative">
      {/* Seletor de idioma */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="ThinkJS Logo"
            className="w-100 h-100 items-center justify-center mx-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            {t.cadastro}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.nomeUsuario}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.nomeUsuario}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.email}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.senha}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.senha}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Confirmar Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.confirmarSenha}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t.confirmarSenha}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Erro */}
          {error && (
            <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Botões */}
          <div className="flex gap-3 pt-4">
            <Link to="/login" className="flex-1">
              <button
                type="button"
                disabled={loading}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition"
              >
                {t.voltar}
              </button>
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition"
            >
              {loading ? t.carregando : t.registrar}
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-8">
          Developers by{" "}
          <a
            href="https://www.linkedin.com/in/oewersson/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Ewersson Assis</strong>
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/maria-de-fatima-alves/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Maria de Fátima</strong>
          </a>
        </p>
      </div>
    </div>
  );
}