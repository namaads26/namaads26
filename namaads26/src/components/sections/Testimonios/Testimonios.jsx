import "./Testimonios.css";

const testimonios = [
  {
    id: 1,
    nombre: "Martín Gómez",
    empresa: "MG Arquitectura",
    comentario:
      "Nama nos diseñó la web desde cero y en 2 meses empezamos a recibir consultas todos los días. Profesionalismo total.",
    rating: 5,
  },
  {
    id: 2,
    nombre: "Lucía Fernández",
    empresa: "Estética LF",
    comentario:
      "No solo hicieron la página, sino que optimizaron todo para Google. Hoy aparecemos primeros en nuestra ciudad.",
    rating: 5,
  },
  {
    id: 3,
    nombre: "Santiago Ríos",
    empresa: "SR Construcciones",
    comentario:
      "Entendieron exactamente lo que necesitábamos. La web transmite confianza y cerramos más presupuestos.",
    rating: 5,
  },
];

function Testimonios() {
  return (
    <section className="testimonios" id="testimonios">
      <div className="testimonios__header">
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Resultados reales en diseño web y posicionamiento.</p>
      </div>

      <div className="testimonios__container">
        {testimonios.map((item) => (
          <div className="testimonio__card" key={item.id}>
            <div className="testimonio__stars">
              {"★".repeat(item.rating)}
            </div>

            <p className="testimonio__text">"{item.comentario}"</p>

            <div className="testimonio__author">
              <strong>{item.nombre}</strong>
              <span>{item.empresa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonios;