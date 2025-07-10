import React, { useState } from 'react';

const FormularioGasto = () => {
  const [gasto, setGasto] = useState('');
  const [tipoGasto, setTipoGasto] = useState('mantenimiento');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría la lógica de envío del formulario
    console.log({
      gasto,
      tipoGasto,
      fecha,
    });
    // Resetear formulario opcionalmente
    // setGasto('');
    // setTipoGasto('mantenimiento');
    // setFecha('');
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Registrar Gasto</h2>

        {/* Campo Gasto */}
        <div className="mb-4">
          <label htmlFor="gasto" className="block text-gray-700 text-sm font-bold mb-2">
            Monto del Gasto:
          </label>
          <input
            type="number"
            id="gasto"
            value={gasto}
            onChange={(e) => setGasto(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ej: 150.00"
            required
          />
        </div>

        {/* Campo Tipo de Gasto */}
        <div className="mb-4">
          <label htmlFor="tipoGasto" className="block text-gray-700 text-sm font-bold mb-2">
            Tipo de Gasto:
          </label>
          <select
            id="tipoGasto"
            value={tipoGasto}
            onChange={(e) => setTipoGasto(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="mantenimiento">Mantenimiento</option>
            <option value="compras">Compras</option>
            <option value="despensa">Despensa</option>
            <option value="operativo">Operativo</option>
          </select>
        </div>

        {/* Campo Fecha */}
        <div className="mb-6">
          <label htmlFor="fecha" className="block text-gray-700 text-sm font-bold mb-2">
            Fecha del Gasto:
          </label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Botón Guardar */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar Gasto
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioGasto;
