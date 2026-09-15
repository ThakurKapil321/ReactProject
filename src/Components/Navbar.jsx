import "../CSS/Navbar.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") == "true"
  );

  return (
    <div className="home-page">
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "red",
              fontSize: "120%",
            }}
          >
            CarZone
          </NavLink>
        </div>

        <ul className="nav-links">

          {/* Home */}
          <li className="icon">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Contact */}
          <li className="icon">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Contact
            </NavLink>
          </li>

          {/* About */}
          <li className="icon">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              About
            </NavLink>
          </li>
           {/* CART*/}
           <li className="icon">
           <NavLink to="/Cart"
           className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }>
             Cart
           </NavLink>

           </li>
          {/* Login / Profile */}
          {!isLogged ? (
            <li className="icon">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Login / Signup
              </NavLink>
            </li>
          ) : (
            <li className="icon">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Profile
              </NavLink>
            </li>
          )}

        </ul>
      </nav>
    </div>
  );
}

export default Header;
