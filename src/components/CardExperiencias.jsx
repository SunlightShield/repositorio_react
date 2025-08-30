import React from "react";

const proyectos = [
  {
    title: "Proyecto de Ruleta",
    description:
      "Para una tienda de juegos de mesa, participe en la creacion de una sencilla aplicacion web con un juego de ruleta, se alimenta de un archivo excel y esta echo mayoritariamente con React y JavaScript",
    imageUrl: "/Img/Proyectos/ruleta.png",
    href: "https://tu-link-1.example",
    tags: ["React", "Bootstrap", "JavaScript"],
  },
  {
    title: "Prueba tecnica Python + Jinja",
    description:
      "Un juego matematico creado como prueba tecnica, usando Jinja y Python, actualmente no se encuentra deployado",
    imageUrl: "/Img/Proyectos/python_jinja.png",
    href: "https://github.com/SunlightShield/pruebaTecnicaENIAX",
    tags: ["Jinja", "Python"],
  },
  {
    title: "Prueba tecnica ",
    description:
      "Una aplicacion Crud para la una prueba tecnica, es una aplicacion en dos partes con front y backend separado",
    imageUrl: "/Img/Proyectos/TCIT.png",
    href: "https://github.com/SunlightShield/pruebaTecnicaTCITFront",
    href2: "https://github.com/SunlightShield/pruebaTecnicaTCITBack",
    tags: ["Redux", "Redux Toolkit", "Bootstrap","NodeJS","NestJS","Sequelize"],
  },
];

const CardExperiencias = () => {
  return (
    <section className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-gray-200 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Algunos de mis proyectos</h3>

      <div className="space-y-6">
        {proyectos.map((p, i) => {
          const mediaLeft = i % 2 === 0; // alterna: 1º izq, 2º der
          const primaryUrl = p.href || p.href2; // la imagen apunta al primer link disponible

          // etiquetas básicas para el/los botones
          const btnLabel1 =
            p.href && /github\.com/i.test(p.href) ? "Repositorio" : "Visitar proyecto";
          const btnLabel2 =
            p.href2 && /github\.com/i.test(p.href2)
              ? (/back|api|server/i.test(p.href2) ? "Repositorio Backend" : "Repositorio 2")
              : "Enlace 2";

          return (
            <div key={i} className="group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
                {/* Media */}
                <div className={`md:col-span-4 ${mediaLeft ? "md:order-1" : "md:order-2"}`}>
                  {primaryUrl ? (
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${p.title}`}
                      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-lg"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-lg ring-1 ring-white/10">
                        <img
                          src={p.imageUrl}
                          alt={`Vista previa de ${p.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-black/20 to-transparent" />
                      </div>
                    </a>
                  ) : (
                    <div className="relative h-full w-full overflow-hidden rounded-lg ring-1 ring-white/10">
                      <img
                        src={p.imageUrl}
                        alt={`Vista previa de ${p.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div
                  className={`md:col-span-8 flex flex-col justify-between ${
                    mediaLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">{p.title}</h4>
                    <p className="text-sm text-white/90">{p.description}</p>
                  </div>

                  {p.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 ring-1 ring-white/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Botones de enlace: soporta 1 o 2 */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1"
                      >
                        {btnLabel1}
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path d="M12.293 2.293a1 1 0 011.414 0l4 4a.997.997 0 01.082 1.32l-.082.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 8H9a5 5 0 00-4.995 4.783L4 13a1 1 0 11-2 0A7 7 0 019 6h5.585l-2.292-2.293a1 1 0 01-.083-1.32l.083-.094z" />
                        </svg>
                      </a>
                    )}

                    {p.href2 && (
                      <a
                        href={p.href2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1"
                      >
                        {btnLabel2}
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path d="M12.293 2.293a1 1 0 011.414 0l4 4a.997.997 0 01.082 1.32l-.082.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 8H9a5 5 0 00-4.995 4.783L4 13a1 1 0 11-2 0A7 7 0 019 6h5.585l-2.292-2.293a1 1 0 01-.083-1.32l.083-.094z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {i < proyectos.length - 1 && <div className="my-6 h-px bg-white/10" />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardExperiencias;
