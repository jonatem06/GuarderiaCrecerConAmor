import React, { useState } from 'react';
import AltaPadres from './AltaPadres';

const VerPadres = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const padres = [
    { id: 1, nombrePadre: 'Juan Pérez', nombreMadre: 'María García' },
    { id: 2, nombrePadre: 'Carlos Sánchez', nombreMadre: 'Ana López' },
    { id: 3, nombrePadre: 'Luis Fernández', nombreMadre: 'Laura Martínez' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Padres Registrados</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Agregar Padre
        </button>
      </div>

      <AltaPadres isOpen={isModalOpen} onClose={closeModal} />

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-left text-xs sm:text-sm uppercase font-semibold">Nombre del Padre</th>
              <th className="py-3 px-5 text-left text-xs sm:text-sm uppercase font-semibold">Nombre de la Madre</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {padres.map((padre, index) => (
              <tr key={padre.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b`}>
                <td className="py-3 px-5 text-sm">{padre.nombrePadre}</td>
                <td className="py-3 px-5 text-sm">{padre.nombreMadre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerPadres;
