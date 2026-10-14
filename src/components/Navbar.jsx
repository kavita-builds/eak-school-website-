
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        Admissions open for the new academic session!
        <Link to="/admissions"> Explore now →</Link>
      </div>

      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">🎓</span>
          <span>
            <strong>EAK</strong>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
          <a href="/#academics" onClick={closeMenu}>
            Academics
          </a>
          <NavLink to="/admissions" onClick={closeMenu}>
            Admissions
          </NavLink>

          <Link
            to="/admissions"
            className="button button-primary nav-cta"
            onClick={closeMenu}
          >
            Apply Now ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}
