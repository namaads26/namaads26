import "./Proceso.css";

const steps = [
  {
    num: "01",
    title: "Estrategia",
    desc: "Entendemos tu negocio, tu cliente ideal y definimos una estructura pensada para convertir.",
    tag: "Brief + Mapa de contenido",
  },
  {
    num: "02",
    title: "Diseño Web",
    desc: "Diseño UI moderno y claro: jerarquía visual, confianza y foco total en la acción.",
    tag: "UI/UX + Look & Feel",
    highlight: true,
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Implementación rápida y optimizada. Sitio veloz, responsive y listo para escalar.",
    tag: "Performance + Responsive",
  },
  {
    num: "04",
    title: "Optimización",
    desc: "Ajustes finales para mejorar SEO, velocidad y experiencia. Medimos y refinamos.",
    tag: "SEO + Ajustes",
  },
];

export default function Proceso() {
  return (
    <section className="proceso" id="proceso">
      <div className="proceso-container">
        <header className="proceso-header">
          <span className="proceso-kicker">Metodología</span>
          <h2 className="proceso-title">
            Un proceso claro para <span>resultados reales</span>
          </h2>
          <p className="proceso-subtitle">
            No hacemos “una web linda” y listo. Diseñamos una experiencia pensada para
            vender, con estructura, foco y optimización.
          </p>
        </header>

        <div className="proceso-grid">
          <div className="proceso-line" aria-hidden="true" />

          {steps.map((s) => (
            <article
              key={s.num}
              className={`proceso-card ${s.highlight ? "is-highlight" : ""}`}
            >
              <div className="proceso-dot" aria-hidden="true" />
              <div className="proceso-cardTop">
                <span className="proceso-num">{s.num}</span>
                <span className="proceso-tag">{s.tag}</span>
              </div>

              <h3 className="proceso-cardTitle">{s.title}</h3>
              <p className="proceso-cardDesc">{s.desc}</p>

              <div className="proceso-cardGlow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

