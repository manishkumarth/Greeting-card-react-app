import { Link, NavLink } from 'react-router-dom';
import '../index.css';
function Nav() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">Greeting_App</h1>

        {/* Links */}
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? 'font-semibold' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? 'font-semibold' : ''
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
