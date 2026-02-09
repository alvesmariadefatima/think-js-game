import logoTexto from "../assets/logo-texto.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/home">
            <img
              src={logoTexto}
              alt="ThinkJS"
              className="h-8 sm:h-10 md:h-12"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
