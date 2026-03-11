import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo_footer from "../../../assets/images/logo_footer.png"

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo"><img src= {logo_footer} alt="" /></h2>
          <p>
            Creamos páginas web estratégicas que convierten visitas en clientes.
            Diseño, desarrollo y rendimiento en un solo lugar.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
          
          </ul>
        </div>


        <div className="footer-contact">
          <h3>Contacto</h3>
          <a
            href="https://wa.me/543516104592"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
          >
            <FaWhatsapp /> Hablemos por WhatsApp
          </a>

          <div className="footer-social">
            <a href="https://www.instagram.com/nama.adss?igsh=ZnV1bndoeGN2N3dz&utm_source=qr"><FaInstagram /></a>
            <a href="https://wa.me/543516104592"><FaWhatsapp /></a>
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