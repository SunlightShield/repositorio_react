import React, { useState } from 'react';
import Modal from './Modal';

const CardModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contenidoActual, setContenidoActual] = useState(null);

  const abrirModal = (opcion) => {
    switch (opcion) {
      case 1:
        setContenidoActual("Certificaciones SQL");
        break;
      case 2:
        setContenidoActual("Certificaciones Azure");
        break;
      default:
        setContenidoActual("Contenido desconocido");
    }
    setIsOpen(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-full text-base text-gray-200 shadow-lg p-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow">
        📜 Mis <span className="text-blue-400">certificaciones</span>
      </h2>

      <p className="mb-4">
        Aquí puedes revisar algunos de los logros y certificados que he obtenido en Desafío Latam, actualmente estoy estudiando para certificarme en Azure.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button
          onClick={() => abrirModal(1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Certificaciones SQL
        </button>

        <button
          disabled
          onClick={() => abrirModal(2)}
          className="bg-green-500 opacity-50 cursor-not-allowed text-white px-4 py-2 rounded transition"
        >
          Certificaciones Azure (Próximamente)
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} data={contenidoActual} />
    </div>
  );
};

export default CardModal;
