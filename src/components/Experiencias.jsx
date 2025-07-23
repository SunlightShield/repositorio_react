import { Timeline } from 'primereact/timeline';


const Experiencias = () => {
    const eventos = [
        { status: 'Servicios Financieros Tanner', date: 'Octubre 2024 - Abril 2025', cargo: 'Técnico de Desarrollo', funciones: `<ul class="list-disc  ml-6 space-y-1"> <li> Trabajé como un desarrollador Front-end, creando la página web de Tanner Banco Digital, usando tecnologías como React, Axios, Astro, TailwindCSS y Typescript. Todo el contenido de la página se manejaba con Strapi.</li> </ul>` },
        {
            status: "Voultech",
            date: "Agosto 2024 – Octubre 2024",
            cargo: "Desarrollador Back End",
            funciones: `
    <ul class="list-disc  ml-6 space-y-1">
      <li>Trabajé como desarrollador Back-end, modificando y manteniendo código en C#.</li>
      <li>Realicé mantenimiento y creación de procedimientos almacenados en SQL Server.</li>
      <li>Creé tareas y flujos automatizados en Azure DevOps.</li>
      <li>Utilicé NodeJS para consumir información desde una base de datos MongoDB.</li>
      <li>Usé Axios para gestionar peticiones a servicios externos.</li>
      <li>Desarrollé un Service Bus en Azure como parte de mi última tarea.</li>
    </ul>
  `
        },

        {
            status: 'Softek', date: 'Septiembre 2022 – Marzo 2024', cargo: 'Desarrollador Front End',
            funciones: `
    <ol class="list-disc  ml-6 space-y-1">
      <li>Me desempeñé como un desarrollador Front-end, creando
scripts y CRMs para Call centers, usando HTML,
JavaScript, React, CSS, Material UI, Bootstrap y NodeJS.</li>
      <li>También, tuve la oportunidad de desarrollar un panel 
informativo con el detalle de las tareas automáticas de la 
compañía con JavaScript, React, CSS, Bootstrap, C# y SQL.</li>
      <li>Desarrollé un sistema de videollamada para la intranet de la compañía incluyendo la
implementación de notificaciones push, usando HTML, JavaScript, React, CSS,
Bootstrap, C#, SQL, y la API de Jitsi.
</li>
      <li>Desarrollé varias APIs en C# y procedimientos almacenados en SQL.</li>
      <li>Participé en el desarrollo de un sistema de OCR para documentos médicos en
colaboración con un equipo ubicado en Colombia, usando Python, C#, and SQL y
NodeJS</li>
    </ol>
  `
        },
        {
            status: 'Transportes Duo', date: 'Abril 2022 – Julio 2022', cargo: 'Desarrollador Front End',
            funciones: `
    <ul class="list-disc  ml-6 space-y-1">
      <li>Trabajé como desarrollador Front-end, creando las vistas de la aplicación web en Vue, Vuetify, Javascript y también 
me encargué del posicionamiento Seo.
</li>
      <li>Mi última tarea fue la migración de la aplicación web en Vue a
Nuxt</li>
    </ul>
  `
        },
    ];

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-6 text-white">

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow">
                🚀 <span className="text-blue-400">Mi camino</span> como desarrollador
            </h2>

<div className='-ml-20 mr-10'>
            <Timeline
                value={eventos}
                content={(item) => (
                    <div className="text-white">
                        <h3 className="text-lg font-semibold">{item.status}</h3>
                        <p className="text-sm text-blue-300">{item.date}</p>
                        <p className="text-sm text-blue-300" dangerouslySetInnerHTML={{ __html: item.funciones }} />

                    </div>
                )}
                opposite={(item) => <span className="text-gray-400 hidden sm:block">{item.cargo}</span>}
            />

        </div>
</div>
    );
};

export default Experiencias;
