import React from 'react';

const Persona = () => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-textoPrincipal text-sm font-bold mb-2">Nombre(s)</label>
                <input type="text" id="nombre" name="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="apellidoPaterno" className="block text-textoPrincipal text-sm font-bold mb-2">Apellido Paterno</label>
                <input type="text" id="apellidoPaterno" name="apellidoPaterno" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="apellidoMaterno" className="block text-textoPrincipal text-sm font-bold mb-2">Apellido Materno</label>
                <input type="text" id="apellidoMaterno" name="apellidoMaterno" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="fechaNacimiento" className="block text-textoPrincipal text-sm font-bold mb-2">Fecha de Nacimiento</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
        </div>
    );
};

export default Persona;
