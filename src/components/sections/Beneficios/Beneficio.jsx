import React, { useEffect, useRef, useState } from "react";
import "./Beneficio.css";

const BENEFICIOS = [
  {
    icon: "⚡",
    title: "Web rápida que no hace perder ventas",
    text: "Optimización para que cargue ágil y el usuario no se vaya antes de ver tu oferta.",
    tag: "Velocidad + Retención",
  },
  {
    icon: "🎯",
    title: "Diseño web pensado para convertir",
    text: "Estructura, jerarquía visual y CTA para que la gente entienda y te escriba.",
    tag: "Conversión",
  },
  {
    icon: "🧠",
    title: "Mensaje claro que transmite confianza",
    text: "Texto y secciones que ordenan tu propuesta y te posicionan como opción seria.",
    tag: "Autoridad",
  },
  {
    icon: "📈",
    title: "Base SEO para que te encuentren",
    text: "Buenas prácticas de estructura, títulos y contenido para arrancar con SEO prolijo.",
    tag: "Visibilidad",
  },
  {
    icon: "📱",
    title: "Se ve excelente en celular",
    text: "Mobile-first real: estética + usabilidad para el lugar donde te miran más.",
    tag: "Experiencia",
  },
  {
    icon: "🧩",
    title: "Escalable para crecer sin rehacer todo",
    text: "Una web lista para sumar secciones, servicios, campañas y nuevas landing pages.",
    tag: "Escalabilidad",
  },
];

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, inView];
}

export default function Beneficios() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });

  return (
    <section id="beneficios" className="beneficios" ref={sectionRef}>
      <div className="beneficios__container">
        <div className={`beneficios__head ${inView ? "is-visible" : ""}`}>
          <p className="beneficios__eyebrow">Beneficios</p>
          <h2 className="beneficios__title">
            Una web linda no alcanza: <span>tiene que vender</span>.
          </h2>
          <p className="beneficios__subtitle">
            En Nama diseñamos páginas web estratégicas para que tu negocio se vea
            profesional, genere confianza y convierta visitas en mensajes.
          </p>
        </div>

        <div className="beneficios__grid">
          {BENEFICIOS.map((b, idx) => (
            <article
              key={b.title}
              className={`beneficios__card ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: inView ? `${idx * 70}ms` : "0ms" }}
            >
              <div className="beneficios__cardTop">
                <div className="beneficios__icon" aria-hidden="true">
                  {b.icon}
                </div>
                <span className="beneficios__tag">{b.tag}</span>
              </div>

              <h3 className="beneficios__cardTitle">{b.title}</h3>
              <p className="beneficios__cardText">{b.text}</p>

              <div className="beneficios__miniProof">
                <span className="beneficios__dot" aria-hidden="true" />
                Pensado para negocios que quieren crecer.
              </div>
            </article>
          ))}
        </div>

        <div className={`beneficios__cta ${inView ? "is-visible" : ""}`}>
          <div className="beneficios__ctaText">
            <h3 className="beneficios__ctaTitle">¿Listo para una web que convierta?</h3>
            <p className="beneficios__ctaSubtitle">
              Te decimos qué mejorar y cómo lo haríamos para tu nicho.
            </p>
          </div>

          <a className="beneficios__ctaBtn" href="https://wa.me/543516104592">
            Quiero mi propuesta
          </a>
        </div>
      </div>
    </section>
  );
}