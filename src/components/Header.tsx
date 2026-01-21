import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Think JS
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-orange-500">{user.streak}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span className="font-bold text-yellow-500">{user.xp} XP</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xl">📊</span>
            <span className="font-bold text-blue-500">Nível {user.level}</span>
          </div>

          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-gray-900 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
