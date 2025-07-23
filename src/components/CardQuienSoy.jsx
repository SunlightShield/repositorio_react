import { Github, Linkedin } from "lucide-react";

const CardQuienSoy = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-full text-base text-gray-200 shadow-lg p-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow">
        👋 Soy <span className="text-blue-400">Sebastián Espinoza</span>
      </h2>

      <p className="mb-4">
        Soy un desarrollador Front End con experiencia en diversos proyectos, utilizando tecnologías como JavaScript, TypeScript, React, Vue, HTML, Node.js, CSS, Tailwind, Bootstrap, Material UI, REST APIs, .NET, C# y Python.
      </p>

      <p className="mb-4">
        Me apasiona crear interfaces limpias y funcionales, y siempre estoy buscando nuevos desafíos donde pueda aportar mis habilidades técnicas y seguir aprendiendo.
      </p>

      <p className="mb-4">
        <strong>Algunos datos freaks</strong><br />
        • DC es mejor que Marvel.<br />
        • Soy fanático de la saga Dark Souls.
      </p>

      <div className="mt-5 flex justify-center gap-4">
        <a
          href="https://github.com/seba"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition"
        >
          <Github size={20} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sebastian-espinoza-software-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default CardQuienSoy;
