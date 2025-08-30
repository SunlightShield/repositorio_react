import React from "react";

const dotByColor = {
    blue: "bg-blue-500 ring-blue-100",
    purple: "bg-purple-500 ring-purple-100",
    yellow: "bg-yellow-500 ring-yellow-100",
    red: "bg-red-500 ring-red-100",
    gray: "bg-neutral-400 ring-neutral-200",
};

const Experiencias = () => {
    const eventos = [
        {
            status: "Tribucorp",
            date: "Agosto 2025 - Presente",
            cargo: "Ingeniero de Software",
            funciones: `
  <ul class="list-disc ml-6 space-y-1">
    <li>Me desempeñé como desarrollador Back-end, creando un servicio de OTP con NestJS, Node.js y PostgreSQL.</li>
    <li>Integré autenticación de cuentas con Firebase y un servicio de lectura de Excel con Node.js y MariaDB.</li>
  </ul>
`,
            color: "red",
        },
        {
            status: "Servicios Financieros Tanner",
            date: "Agosto 2024 - Abril 2025",
            cargo: "Técnico de Desarrollo",
            funciones: `
  <ul class="list-disc ml-6 space-y-1">
    <li>Trabajé como un desarrollador Front-end, creando la página web de Tanner Banco Digital, usando tecnologías como React, Axios, Astro, TailwindCSS y Typescript.</li>
    <li>Todo el contenido de la página se manejaba con Strapi.</li>
  </ul>
`,
            color: "blue",
        },
        {
            status: "Softek",
            date: "Julio 2022 – Junio 2024",
            cargo: "Desarrollador Front End",
            funciones: `
  <ul class="list-disc ml-6 space-y-1">
    <li>Me desempeñé como desarrollador Front-end, creando scripts y CRMs para call centers usando HTML, JavaScript, React, CSS, Material UI, Bootstrap y Node.js.</li>
    <li>Desarrollé un panel informativo con el detalle de las tareas automáticas de la compañía con JavaScript, React, CSS, Bootstrap, C# y SQL.</li>
    <li>Implementé un sistema de videollamada para la intranet, incluyendo notificaciones push, usando HTML, JavaScript, React, CSS, Bootstrap, C#, SQL y la API de Jitsi.</li>
    <li>Desarrollé varias APIs en C# y procedimientos almacenados en SQL.</li>
    <li>Participé en el desarrollo de un sistema de OCR para documentos médicos en colaboración con un equipo ubicado en Colombia, usando Python, C#, SQL y Node.js.</li>
    <li>La comunicación entre el Front y las APIs se realizaba a través de Axios.</li>
  </ul>
`,
            color: "purple",
        },
        {
            status: "Transportes Duo",
            date: "Abril 2022 – Julio 2022",
            cargo: "Desarrollador Front End",
            funciones: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Trabajé como desarrollador Front-end, creando las vistas de la aplicación web en Vue, Vuetify, Javascript y también me encargué del posicionamiento SEO.</li>
        <li>Mi última tarea fue la migración de la aplicación web en Vue a Nuxt.</li>
      </ul>
      `,
            color: "yellow",
        },
    ];

    return (
        <section className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-6 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight drop-shadow">
                🚀 <span className="text-blue-400">Mi camino</span> como desarrollador
            </h2>

            {/* Timeline vertical: línea a la izquierda, contenido a la derecha */}
            <ol role="list" className="relative border-l border-blue-500/30">
                {eventos.map((ev, i) => {
                    const color = dotByColor[ev.color || "blue"];
                    return (
                        <li key={i} className="relative pl-6 mb-10">
                            {/* Punto */}
                            <span className={`absolute left-0 top-1.5 -translate-x-1/2 inline-flex h-3 w-3 rounded-full ring-4 ring-white ${color}`} />
                            {/* Contenido (solo derecha) */}
                            <div>
                                <h3 className="text-lg font-semibold">{ev.status}</h3>
                                <p className="text-sm text-blue-300">
                                    {ev.cargo} • {ev.date}
                                </p>

                                {/* No metas <ul>/<ol> dentro de <p>. Usamos un contenedor neutro */}
                                <div
                                    className="mt-2 text-sm text-blue-100/90
                             [&>ul]:list-disc [&>ul]:ml-6
                             [&>ol]:list-decimal [&>ol]:ml-6
                             space-y-1"
                                    dangerouslySetInnerHTML={{ __html: ev.funciones }}
                                />
                            </div>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
};

export default Experiencias;
