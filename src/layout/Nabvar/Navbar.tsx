import { useState } from "react";
import "./Nabvar.scss";
import { Servicios } from "./Servicios";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">GestorU</a>
        </div>

        {/* Botón hamburguesa */}
        <div className="btn menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars">x</i>
        </div>

        {/* Navegación */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Inicio</a>
          </li>

          {/* Dropdown simple */}
          <li
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <a href="#" className="desktop-item">
              Servicios
            </a>
            <span
              className="mobile-item"
              onClick={() => setDropOpen(!dropOpen)}
            >
              Servicios
            </span>
            <Servicios dropOpen={dropOpen} />
          </li>

          {/* Mega menú */}
          <li
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <a href="#" className="desktop-item">
              Nosotros
            </a>
            <span
              className="mobile-item"
              onClick={() => setMegaOpen(!megaOpen)}
            >
              Nosotros
            </span>
            <div className={`mega-box ${megaOpen ? "open" : ""}`}>
              <div className="content">
                <div className="row">
                  <header>Historia</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Quiénes somos</a>
                    </li>
                    <li>
                      <a href="#">Misión</a>
                    </li>
                    <li>
                      <a href="#">Visión</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Equipo</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Profesores</a>
                    </li>
                    <li>
                      <a href="#">Colaboradores</a>
                    </li>
                    <li>
                      <a href="#">Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
