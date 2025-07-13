import React from 'react';

const Direccion = () => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="calle" className="block text-textoPrincipal text-sm font-bold mb-2">Calle</label>
                <input type="text" id="calle" name="calle" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="numeroCasa" className="block text-textoPrincipal text-sm font-bold mb-2">Número de Casa</label>
                <input type="text" id="numeroCasa" name="numeroCasa" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="cruzamientos" className="block text-textoPrincipal text-sm font-bold mb-2">Cruzamientos</label>
                <input type="text" id="cruzamientos" name="cruzamientos" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="colonia" className="block text-textoPrincipal text-sm font-bold mb-2">Colonia</label>
                <input type="text" id="colonia" name="colonia" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="codigoPostal" className="block text-textoPrincipal text-sm font-bold mb-2">Código Postal</label>
                <input type="text" id="codigoPostal" name="codigoPostal" className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
            </div>
        </div>
    );
};

export default Direccion;
