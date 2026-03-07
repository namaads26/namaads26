import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo">nama.ads</h2>
          <p>
            Creamos páginas web estratégicas que convierten visitas en clientes.
            Diseño, desarrollo y rendimiento en un solo lugar.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Servicios</h3>
          <ul>
            <li>Diseño Web</li>
            <li>Landing Pages</li>
            <li>Optimización SEO</li>
            <li>Desarrollo React</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <a
            href="https://wa.me/549XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
          >
            <FaWhatsapp /> Hablemos por WhatsApp
          </a>

          <div className="footer-social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} nama.ads — Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;