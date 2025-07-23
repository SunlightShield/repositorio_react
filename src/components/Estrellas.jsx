const Estrellas = () => {
  const estrellas = Array.from({ length: 60 });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden pointer-events-none">
      {/* Fondo degradado nocturno */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950 -z-10" />

      {estrellas.map((_, i) => {
        const size = Math.random() * 4 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 1;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

export default Estrellas;
