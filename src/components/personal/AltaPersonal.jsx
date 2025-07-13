import React, { useState, useEffect } from 'react';
import Persona from '../common/persona';
import Direccion from '../common/direccion';
import InformacionContacto from '../common/informacion_contacto';

const AltaPersonal = ({ isOpen, onClose, personalData }) => {
    const [formData, setFormData] = useState({
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

    useEffect(() => {
        if (personalData) {
            setFormData(personalData);
        } else {
            setFormData({
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
        }
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{personalData ? 'Editar Personal' : 'Alta de Personal'}</h3>
                    <div className="mt-2 px-7 py-3">
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
                            <Persona />
                            <Direccion />
                            <InformacionContacto />
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
                        </form>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-primario text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-acento focus:outline-none focus:ring-2 focus:ring-acento"
                        >
                            Guardar
                        </button>
                        <button
                            onClick={onClose}
                            className="mt-3 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AltaPersonal;
