import Estrellas from "./components/Estrellas";
import CardQuienSoy from "./components/CardQuienSoy";
import Experiencias from "./components/Experiencias";
import CardFlotante from "./components/CardFlotante"
import Header from "./components/Header";
import BotonScrollUp from "./components/BotonScrollUp";
import Footer from "./components/Footer";
import CardModal from "./components/CardModal";

function App() {
  return (
    <>
     <Header />
      <Estrellas />
<div className="z-10 m-20 text-center">
  <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide drop-shadow-sm animate-fade-in">
    Bienvenido a mi <span className="text-blue-400">portafolio</span>
  </h1>
</div>
      <div className="flex justify-center items-center px-4 mt-5" id="quien-soy">
        <div className="w-full max-w-2xl">
          <CardQuienSoy />
        </div>
      </div>
      <div className="flex justify-center items-center px-4 mt-5" id="experiencias">
        <div className="w-full max-w-2xl">
          <Experiencias />
        </div>
      </div>
      <div className="flex justify-center items-center px-4 mt-5" id="proyectos">
        <div className="w-full max-w-2xl">
          <CardFlotante />
        </div>
      </div>
      <div className="flex justify-center items-center px-4 mt-5" id="certificaciones">
        <div className="w-full max-w-2xl">
          <CardModal />
        </div>
      </div>
      <BotonScrollUp />
      <Footer/>
    </>
  );
}

export default App;
