import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <h2 className="cta__title">
          ¿Listo para tener una página web que venda por vos?
        </h2>

        <p className="cta__text">
          Diseñamos sitios estratégicos, rápidos y optimizados para convertir visitas en clientes.
        </p>

        <a
          href="https://wa.me/5548996336958"
          target="_blank"
          rel="noopener noreferrer"
          className="cta__button"
        >
          Hablemos por WhatsApp
        </a>
      </div>
    </section>
  );
}