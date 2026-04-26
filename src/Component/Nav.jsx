import { NavLink } from "react-router-dom";
import "../Component/Nav.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={isHome ? "nav-dark" : "nav-light"}>
      <img src="/Wande-logo.png" alt="logo" />

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""} extra-class`}>
        <NavLink className="link" to="/"  onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink className="link" to="./Blog"  onClick={() => setMenuOpen(false)}>
          Blog
        </NavLink>
        <NavLink className="link">
          <button className="boot">Subscribe</button>
        </NavLink>
      </ul>
      
    </nav>
  );
};

export default Nav;
