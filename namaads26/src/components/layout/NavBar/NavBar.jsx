import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
         <div className="navbar-logo">
          <a href="#/">
            <img src={logo} alt="Nama Ads Logo" />
          </a>
        </div>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proceso" onClick={closeMenu}>Proceso</a>
          <a href="#beneficios" onClick={closeMenu}>Beneficios</a>
          <a href="#testimonios" onClick={closeMenu}>Testimonios</a>
          <a
            href="https://wa.554899633695800"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
            onClick={closeMenu}
          >
            Habla con nosotros
          </a>
        </nav>

        <div 
          className={`navbar-toggle ${menuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;