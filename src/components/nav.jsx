import { NavLink } from "react-router-dom";
import "../index.css";

function Nav() {
  return (
    <nav className="bg-primary text-white shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center py-2">
        
        {/* Logo on Left */}
        <h1 className="h4 m-0">
          Greeting<span className="text-warning">App</span>
        </h1>

        {/* Buttons on Right */}
        <div className="d-flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-warning text-dark" : "btn-outline-light"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-warning text-dark" : "btn-outline-light"}`
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
