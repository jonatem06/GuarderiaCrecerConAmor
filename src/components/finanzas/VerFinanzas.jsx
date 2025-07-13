import { useState } from 'react';
import Finanzas from './Finanzas'; // Asegúrate de que la ruta de importación sea correcta

const VerFinanzas = () => {
  // Estado para controlar la visibilidad del modal
  const [modalOpen, setModalOpen] = useState(false);

  // Datos de ejemplo para la tabla de totales
  const totales = {
    mantenimiento: 500,
    compras: 1200,
    despensa: 300,
    operativos: 800,
    salarios: 5000,
    ganancias: 2000,
  };

  // Datos de ejemplo para la tabla de gastos completos
  const gastosCompletos = [
    { id: 1, gasto: 'Reparación de tubería', tipo: 'mantenimiento',costo:500, fecha: '2024-01-15' },
    { id: 2, gasto: 'Compra de papelería', tipo: 'compras',costo:500, fecha: '2024-01-16' },
    { id: 3, gasto: 'Frutas y verduras', tipo: 'despensa',costo:500, fecha: '2024-01-17' },
    { id: 4, gasto: 'Pago de luz', tipo: 'operativos',costo:500, fecha: '2024-01-18' },
    { id: 5, gasto: 'Salario Juan', tipo: 'salarios',costo:500, fecha: '2024-01-19' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Resumen Financiero</h1>

      {/* Tabla de Totales */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Totales por Categoría</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(totales).map(([key, value]) => (
            <div key={key} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold capitalize text-gray-600">{key.replace('_', ' ')}</h3>
              <p className="text-2xl font-semibold text-gray-800">${value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Botón para abrir modal y Tabla de Gastos Completos */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Detalle de Gastos</h2>
        <div className="mb-4">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar Nuevo Gasto
          </button>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gasto
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tipo de Gasto
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Costo
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Fecha del Gasto
                </th>
              </tr>
            </thead>
            <tbody>
              {gastosCompletos.map((gasto) => (
                <tr key={gasto.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{gasto.gasto}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap capitalize">{gasto.tipo}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap capitalize">{gasto.costo}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{gasto.fecha}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para Agregar Nuevo Gasto */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Agregar Nuevo Gasto</p>
                <div className="cursor-pointer z-50" onClick={() => setModalOpen(false)}>
                  <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                  </svg>
                </div>
              </div>
              <Finanzas />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerFinanzas;
