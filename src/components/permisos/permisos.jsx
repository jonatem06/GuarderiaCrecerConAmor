import React from 'react';

const Permisos = () => {
    return (
        <div>
            <div className="mb-4">
                <label className="block text-textoPrincipal text-sm font-bold mb-2">Permisos</label>
                <div className="flex items-center">
                    <input type="checkbox" id="permiso1" name="permiso1" className="mr-2" />
                    <label htmlFor="permiso1">Permiso 1</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="permiso2" name="permiso2" className="mr-2" />
                    <label htmlFor="permiso2">Permiso 2</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="permiso3" name="permiso3" className="mr-2" />
                    <label htmlFor="permiso3">Permiso 3</label>
                </div>
            </div>
        </div>
    );
};

export default Permisos;
