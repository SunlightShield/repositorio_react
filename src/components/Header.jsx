const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-center gap-16 text-white text-sm">
        {[
          { href: "#quien-soy", label: "Sobre mi" },
          { href: "#experiencias", label: "Experiencias" },
          { href: "#proyectos", label: "Proyectos" },
          { href: "#certificaciones", label: "Certificaciones" }

        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="relative after:block after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
