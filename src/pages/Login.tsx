import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from '../context/TranslationContext';
import LanguageSelector from '../components/LanguageSelector';
import logo from '../assets/logo.png';

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (email && password) {
        setTimeout(() => {
          navigate('/home');
          setLoading(false);
        }, 1000);
      } else {
        setError(t.erro);
        setLoading(false);
      }
    } catch {
      setError(t.erro);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Seletor de idioma */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="ThinkJS Logo"
              className="w-100 h-100 items-center justify-center mx-auto"
            />

            <h1 className="text-3xl font-bold text-gray-800">ThinkJS</h1>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
className="
      w-full px-4 py-3 rounded-lg
      bg-gray-100
      text-gray-800
      placeholder-gray-400
      border-2 border-yellow-400
      focus:outline-none
      focus:ring-2 focus:ring-yellow-300
      focus:border-yellow-500
      disabled:bg-gray-200
      disabled:cursor-not-allowed
    "                disabled={loading}
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
                className="
      w-full px-4 py-3 rounded-lg
      bg-gray-100
      text-gray-800
      placeholder-gray-400
      border-2 border-yellow-400
      focus:outline-none
      focus:ring-2 focus:ring-yellow-300
      focus:border-yellow-500
      disabled:bg-gray-200
      disabled:cursor-not-allowed
    "
                disabled={loading}
              />
            </div>

            {/* Erro */}
            {error && (
              <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Botão Entrar */}
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg"
            >
              {loading ? t.carregando : t.entrar}
            </button>
          </form>

          {/* Esqueci senha */}
          <div className="text-center mt-4">
            <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
              {t.esqueciMinhaSenha}
            </button>
          </div>

          {/* Cadastro */}
          <div className="text-center mt-6 pt-6 border-t-2 border-gray-200">
            <p className="text-gray-600 text-sm mb-3">
              {t.naoTemConta}
            </p>
            <Link
              to="/cadastro"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg w-full text-center"
            >
              {t.registrar}
            </Link>
          </div>
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
    </div>
  );
};