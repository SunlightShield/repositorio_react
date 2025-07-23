import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const renderContenido = () => {
    if (data === "Certificaciones SQL") {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Certificaciones SQL</h2>
          <div className="grid grid-cols-3 gap-4">
            <img src="/img/sql/Certificacion1.png" alt="SQL Cert 1" className="w-full h-auto rounded shadow" />
            <img src="/img/sql/Certificacion2.png" alt="SQL Cert 2" className="w-full h-auto rounded shadow" />
            <img src="/img/sql/Certificacion3.png" alt="SQL Cert 3" className="w-full h-auto rounded shadow" />
            <img src="/img/sql/Certificacion4.png" alt="SQL Cert 4" className="w-full h-auto rounded shadow" />
            <img src="/img/sql/Certificacion5.png" alt="SQL Cert 5" className="w-full h-auto rounded shadow" />
          </div>
          <p className="text-center text-gray-700">
            Certificaciones básicas de consultas SQL, obtenidas en cursos de Desafío Latam.
          </p>
        </div>
      );
    }

    if (data === "Certificaciones Azure") {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Certificaciones Azure</h2>
          <p className="text-center">Aquí podrías mostrar imágenes o texto de Azure también.</p>
        </div>
      );
    }

    return <p>{data}</p>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="mt-4 text-gray-800">{renderContenido()}</div>
      </div>
    </div>
  );
};

export default Modal;
