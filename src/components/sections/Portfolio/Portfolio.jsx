import './Portfolio.css';

const proyectos = [
  {
    id: 1,
    titulo: 'Catalogo Maquinas Viales',
    categoria: 'Catalogo con CTA a WSP',
    descripcion: 'Catálogo digital de máquinas viales diseñado para mostrar equipos de forma impactante, clara y profesional. Convertir visitas en consultas reales.',
    url: 'https://namaads26.github.io/catalogo-maquinas-viales/',
  },
  {
    id: 2,
    titulo: 'L&M',
    categoria: 'sistema de gestión / ERP simple ',
    descripcion: 'Plataforma para controlar stock, ventas y clientes en tiempo real, pensada para ordenar el negocio y vender más sin perder control.',
    url: 'https://namaads26.github.io/lm-app/',
  },
  {
    id: 3,
    titulo: 'Napoli Vibes',
    categoria: 'Catálogo con carrito de compras',
    descripcion: 'Menu virtual diseñado para una pizzería, enfocada en maximizar pedidos. Combina un menú visual atractivo, carrito dinámico y envío directo del pedido por WhatsApp, creando un flujo simple, rápido y orientado a conversión.',
    url: 'https://napoli-vibes.vercel.app/',
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <span className="portfolio-badge">Portfolio</span>
        <h2>Trabajos reales que muestran cómo hacemos que una web se vea profesional y funcione de verdad.</h2>
        <p>
          Mirá algunos ejemplos de páginas desarrolladas con foco en diseño, claridad y resultados.
        </p>
      </div>

      <div className="portfolio-grid">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="portfolio-card">
            <div className="portfolio-card-top">
              <span className="portfolio-category">{proyecto.categoria}</span>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>

            <div className="portfolio-preview">
              <iframe
                src={proyecto.url}
                title={proyecto.titulo}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="portfolio-card-bottom">
              <a
                href={proyecto.url}
                target="_blank"
                rel="noreferrer"
                className="portfolio-link"
              >
                Ver sitio completo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;