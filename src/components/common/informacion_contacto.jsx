import React from 'react';

const InformacionContacto = () => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="telefono" className="block text-textoPrincipal text-sm font-bold mb-2">Teléfono</label>
                <input type="text" id="telefono" name="telefono" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-textoPrincipal text-sm font-bold mb-2">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
        </div>
    );
};

export default InformacionContacto;
