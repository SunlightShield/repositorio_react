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
    <div className="p-6 space-x-4">
      <button onClick={() => abrirModal(1)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Certificaciones SQL
      </button>
      <button disabled onClick={() => abrirModal(2)} className="bg-green-500 text-white px-4 py-2 rounded">
        Certificaciones Azure (Proximamente)
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} data={contenidoActual}>
      </Modal>
    </div>
  );
};

export default CardModal;
