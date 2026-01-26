import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/logo.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex items-center gap-3 mb-8">
          <img
            src={logo}
            alt="ThinkJS Logo"
            className="w-100 h-100 items-center justify-center mx-auto"
          />
        </div>

        <h2 className="text-xl font-semibold mb-6  text-gray-600">
          {t("auth.login.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("auth.login.email")}
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
              {t("auth.login.password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-600 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
        </form>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg mt-6 transition"
        >
          {loading ? t("common.loading") : t("auth.login.button")}
        </button>

        <Link to="/cadastro">
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg mt-3 transition">
            {t("auth.login.register")}
          </button>
        </Link>

        <button className="w-full text-sm text-gray-600 hover:text-gray-900 mt-4">
          {t("auth.login.forgotPassword")}
        </button>

        <p className="text-xs text-gray-500 text-center mt-8">
          Developers by{" "}
          <a href="https://www.linkedin.com/in/oewersson/" target="_blank">
            <strong>Ewersson Assis</strong>
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/maria-de-fatima-alves/"
            target="_blank"
          >
            <strong>Maria de Fátima</strong>
          </a>
        </p>
      </div>
    </div>
  );
}
