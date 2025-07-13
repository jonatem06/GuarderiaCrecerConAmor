import React, { useState } from 'react';
import AltaPadres from './AltaPadres'; // Asegúrate que la ruta sea correcta

const VerPadres = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Datos de ejemplo
  const padres = [
    { id: 1, nombrePadre: 'Juan Pérez', nombreMadre: 'María García' },
    { id: 2, nombrePadre: 'Carlos Sánchez', nombreMadre: 'Ana López' },
    { id: 3, nombrePadre: 'Luis Fernández', nombreMadre: 'Laura Martínez' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Padres Registrados</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar Padre
        </button>
      </div>

      <AltaPadres isOpen={isModalOpen} onClose={closeModal} />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Nombre del Padre</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Nombre de la Madre</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {padres.map((padre) => (
              <tr key={padre.id} className="border-b">
                <td className="py-3 px-4">{padre.nombrePadre}</td>
                <td className="py-3 px-4">{padre.nombreMadre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerPadres;
