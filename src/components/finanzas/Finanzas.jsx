import FormularioGasto from './FormularioGasto'; // Importar el nuevo formulario

// El nombre del componente se mantiene como Finanzas según el archivo,
// pero su contenido se actualizará para usar FormularioGasto.
// Si este componente "Finanzas" debe tener más elementos además del formulario,
// se pueden agregar aquí. Por ahora, solo renderizará el formulario.

const Finanzas = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Título opcional para la sección de finanzas */}
      {/* <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Gestión de Finanzas</h1> */}

      {/* Integrar el formulario de gastos */}
      <FormularioGasto />

      {/* Aquí se podrían añadir otros componentes relacionados con finanzas si fuera necesario */}
      {/* Ejemplo: Listado de gastos, gráficos, etc. */}
    </div>
  );
}

export default Finanzas;
