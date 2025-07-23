import Estrellas from "./components/Estrellas";
import CardQuienSoy from "./components/CardQuienSoy";
import Experiencias from "./components/Experiencias";
import CardFlotante from "./components/CardFlotante"
import Header from "./components/Header";
import BotonScrollUp from "./components/BotonScrollUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Header />
      <Estrellas />
      <div className=" z-10 text-white text-2xl flex justify-center items-center mt-20">
        <h1>Bienvenido a mi portafolio</h1>
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
      <BotonScrollUp />
      <Footer/>
    </>
  );
}

export default App;
