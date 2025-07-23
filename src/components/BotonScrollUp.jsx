import { ArrowUp } from "lucide-react";

const BotonScrollUp = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg backdrop-blur transition duration-300"
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BotonScrollUp;
