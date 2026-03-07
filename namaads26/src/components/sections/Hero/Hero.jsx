import { useEffect, useMemo, useState } from "react";
import "./Hero.css";

import heroGoogle from "../../../assets/images/hero-google.png";
import heroSocial from "../../../assets/images/hero-social.png";
import heroEcommerce from "../../../assets/images/hero-ecommerce.png";
import heroWeb  from "../../../assets/images/hero-web.png";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
      kicker: "Web & Conversión",
      title: "Diseñamos páginas que venden.",
      subtitle: "Landing pages estratégicas enfocadas en generar clientes reales.",
      img: heroWeb,
      alt: "Diseño de páginas web",
    },
    {
      kicker: "Google",
      title: "Te ponemos arriba cuando te buscan.",
      subtitle: "SEO + Google Ads para captar demanda activa.",
      img: heroGoogle,
      alt: "Posicionamiento en Google",
    },
    {
      kicker: "Paid Media",
      title: "Generamos tráfico calificado.",
      subtitle: "Campañas optimizadas para resultados.",
      img: heroSocial,
      alt: "Publicidad en redes sociales",
    },
    {
      kicker: "Performance",
      title: "Convertimos visitas en ventas.",
      subtitle: "Medición, remarketing y optimización continua.",
      img: heroEcommerce,
      alt: "Estrategia de conversión",
    }
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setIndex((p) => (p + 1) % slides.length);

  return (
    <section className="hero" aria-label="Hero principal Nama Ads">
      <div className="hero__inner">
        <div className="hero__viewport">
          <div
            className="hero__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <article className="hero__slide" key={i} aria-hidden={index !== i}>
                <div className="hero__content">
                  <span className="hero__kicker">{s.kicker}</span>
                  <h1 className="hero__title">{s.title}</h1>
                  <p className="hero__subtitle">{s.subtitle}</p>
                </div>

                <div className="hero__media">
                  <img className="hero__img" src={s.img} alt={s.alt} />
                </div>
              </article>
            ))}
          </div>

          <button className="hero__arrow hero__arrow--left" onClick={prev} type="button" aria-label="Anterior">
            ‹
          </button>
          <button className="hero__arrow hero__arrow--right" onClick={next} type="button" aria-label="Siguiente">
            ›
          </button>
        </div>

        <div className="hero__dots" role="tablist" aria-label="Diapositivas del hero">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${index === i ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
              aria-current={index === i ? "true" : "false"}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}