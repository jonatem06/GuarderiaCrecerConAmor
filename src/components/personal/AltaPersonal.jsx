import React, { useState, useEffect } from 'react';
import Persona from '../common/persona';
import Direccion from '../common/direccion';
import InformacionContacto from '../common/informacion_contacto';

const AltaPersonal = ({ isOpen, onClose, personalData }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(personalData || {
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            fechaNacimiento: '',
            calle: '',
            numeroCasa: '',
            cruzamientos: '',
            colonia: '',
            codigoPostal: '',
            telefono: '',
            email: '',
            curp: '',
            rfc: '',
            sueldo: '',
            rol: ''
        });
    }, [personalData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose(); // Cierra el modal al enviar
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 p-4 flex justify-center items-center">
            <div className="relative mx-auto border w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{personalData ? 'Editar Personal' : 'Alta de Personal'}</h3>
                    <button onClick={onClose} className="text-black text-2xl font-bold">&times;</button>
                </div>
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                    <form onSubmit={handleSubmit} className="bg-white rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Persona />
                            <InformacionContacto />
                        </div>
                        <Direccion />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="curp" className="block text-textoPrincipal text-sm font-bold mb-2">CURP</label>
                                <input type="text" id="curp" name="curp" onChange={handleChange} value={formData.curp || ''} className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rfc" className="block text-textoPrincipal text-sm font-bold mb-2">RFC</label>
                                <input type="text" id="rfc" name="rfc" onChange={handleChange} value={formData.rfc || ''} className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="sueldo" className="block text-textoPrincipal text-sm font-bold mb-2">Sueldo</label>
                                <input type="number" id="sueldo" name="sueldo" onChange={handleChange} value={formData.sueldo || ''} className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rol" className="block text-textoPrincipal text-sm font-bold mb-2">Rol</label>
                                <input type="text" id="rol" name="rol" onChange={handleChange} value={formData.rol || ''} className="shadow appearance-none border rounded w-full py-2 px-3 text-textoPrincipal leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end items-center p-4 border-t">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 py-2 px-4 mr-2"
                    >
                        Cancelar
                    </button>
                    <button
                        id="ok-btn"
                        onClick={handleSubmit}
                        className="bg-primario text-white text-base font-medium rounded-md shadow-sm hover:bg-acento focus:outline-none focus:ring-2 focus:ring-acento py-2 px-4"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AltaPersonal;
