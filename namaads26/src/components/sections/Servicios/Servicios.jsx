import React from "react";
import "./Servicios.css";

const PACKAGES = [
  {
    id: "landing",
    name: "Landing Web",
    label: "Para empezar fuerte",
    priceNote: "Ideal para presencia rápida",
    features: [
      "Diseño web estratégico",
      "1 landing optimizada",
      "Responsive (mobile-first)",
      "SEO básico",
      "Botón de WhatsApp",
      "Hosting + dominio (opcional)",
    ],
    cta: "Quiero mi landing",
    highlight: true,
  },
  {
    id: "web-auto",
    name: "Web + Automatización",
    label: "Más elegido",
    priceNote: "Captá y gestioná leads",
    features: [
      "Todo lo del plan anterior",
      "Formularios inteligentes",
      "Integración con CRM",
      "Automatización básica de leads",
      "WhatsApp Business configurado",
      "Seguimiento y tracking",
    ],
    cta: "Quiero automatizar",
    highlight: true,
  },
  {
    id: "full",
    name: "Sistema de Ventas",
    label: "Para escalar",
    priceNote: "Estrategia + performance",
    features: [
      "Web estratégica completa",
      "Embudo de ventas",
      "Pixel + eventos + tracking",
      "Optimización de conversión",
      "Reportes mensuales",
      "Soporte y mejoras",
    ],
    cta: "Quiero escalar",
    highlight: true,
  },
];

export default function Servicios() {
  const whatsappNumber = "5493510000000"; // <-- cambia por el tuyo (formato internacional sin +)
  const baseMessage =
    "Hola! Quiero info sobre los paquetes de Nama.ads. ¿Me asesorás?";

  const buildWhatsAppLink = (planName) => {
    const text = `${baseMessage}\n\nMe interesa: ${planName}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="servicios" id="servicios">
      <div className="servicios__container">
        <header className="servicios__header">
          <p className="servicios__eyebrow">Servicios</p>
          <h2 className="servicios__title">Paquetes pensados para vender</h2>
          <p className="servicios__subtitle">
            Elegí el nivel que necesitás hoy. Nosotros nos encargamos de que se
            vea pro y convierta.
          </p>
        </header>

        <div className="servicios__grid">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`servicios__card ${
                pkg.highlight ? "is-highlight" : ""
              }`}
            >
              <div className="servicios__cardTop">
                <div className="servicios__badgeRow">
                  <span
                    className={`servicios__badge ${
                      pkg.highlight ? "is-badgeHighlight" : ""
                    }`}
                  >
                    {pkg.label}
                  </span>
                </div>

                <h3 className="servicios__cardTitle">{pkg.name}</h3>
                <p className="servicios__cardNote">{pkg.priceNote}</p>
              </div>

              <ul className="servicios__list">
                {pkg.features.map((f, i) => (
                  <li key={i} className="servicios__item">
                    <span className="servicios__check" aria-hidden="true">
                      ✓
                    </span>
                    <span className="servicios__text">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="servicios__actions">
                <a
                  className={`servicios__button ${
                    pkg.highlight ? "is-primary" : "is-secondary"
                  }`}
                  href={buildWhatsAppLink(pkg.name)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pkg.cta}
                </a>

                <p className="servicios__microcopy">
                  Te asesoramos gratis por WhatsApp.
                </p>
              </div>
            </article>
          ))}
        </div>

        <footer className="servicios__footer">
          <p className="servicios__footerText">
            ¿No sabés cuál elegir? Te armamos una recomendación según tu rubro y
            objetivo.
          </p>
          <a
            className="servicios__footerLink"
            href={buildWhatsAppLink("Recomendación")}
            target="_blank"
            rel="noreferrer"
          >
            Pedir recomendación →
          </a>
        </footer>
      </div>
    </section>
  );
}