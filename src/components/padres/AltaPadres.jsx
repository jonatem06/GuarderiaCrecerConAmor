import React, { useState } from 'react';
import Direccion from '../common/direccion';
import InformacionContacto from '../common/informacion_contacto';
import Persona from '../common/persona';

const AccordionSection = ({ title, children, isOpen, setIsOpen }) => (
  <div className="border-b">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full text-left py-4 px-6 focus:outline-none"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
    </button>
    {isOpen && <div className="px-6 pb-4">{children}</div>}
  </div>
);

const UserSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Usuario
            </label>
            <input
                id="username"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
            </label>
            <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    </div>
);

const AlergiasSection = ({ alergias, onAddAlergia, onRemoveAlergia }) => {
    const [currentAlergia, setCurrentAlergia] = useState('');
    const availableAlergias = ['Polen', 'Nueces', 'Lacteos', 'Mariscos', 'Soja'];

    const handleAdd = () => {
        onAddAlergia(currentAlergia);
        setCurrentAlergia('');
    };

    return (
        <div>
            <div className="flex items-center gap-2 mb-4">
                <input
                    list="alergias-list"
                    value={currentAlergia}
                    onChange={(e) => setCurrentAlergia(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <datalist id="alergias-list">
                    {availableAlergias.map(alergia => <option key={alergia} value={alergia} />)}
                </datalist>
                <button type="button" onClick={handleAdd} className="bg-blue-500 text-white py-2 px-4 rounded">Agregar</button>
            </div>
            <div className="flex flex-wrap gap-2">
                {alergias.map((alergia, index) => (
                    <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center">
                        {alergia}
                        <button type="button" onClick={() => onRemoveAlergia(index)} className="ml-2 text-red-500">x</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AltaPadres = ({ isOpen, onClose }) => {
    const [openSections, setOpenSections] = useState({ usuario: true });
    const [hijos, setHijos] = useState([{ alergias: [] }]);
    const [allowedPersons, setAllowedPersons] = useState([{}]);
    const [notAllowedPersons, setNotAllowedPersons] = useState([{}]);

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const addHijo = () => setHijos([...hijos, { alergias: [] }]);
    const removeHijo = (index) => setHijos(hijos.filter((_, i) => i !== index));

    const addAlergiaToHijo = (hijoIndex, alergia) => {
        if (alergia && !hijos[hijoIndex].alergias.includes(alergia)) {
            const newHijos = [...hijos];
            newHijos[hijoIndex].alergias.push(alergia);
            setHijos(newHijos);
        }
    };

    const removeAlergiaFromHijo = (hijoIndex, alergiaIndex) => {
        const newHijos = [...hijos];
        newHijos[hijoIndex].alergias.splice(alergiaIndex, 1);
        setHijos(newHijos);
    };

    const addAllowedPerson = () => setAllowedPersons([...allowedPersons, {}]);
    const removeAllowedPerson = (index) => setAllowedPersons(allowedPersons.filter((_, i) => i !== index));

    const addNotAllowedPerson = () => setNotAllowedPersons([...notAllowedPersons, {}]);
    const removeNotAllowedPerson = (index) => setNotAllowedPersons(notAllowedPersons.filter((_, i) => i !== index));

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 p-4">
            <div className="relative top-10 mx-auto border w-full max-w-lg md:max-w-2xl lg:max-w-4xl shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4 p-4 border-b">
                    <h2 className="text-2xl font-bold">Alta de Padres</h2>
                    <button onClick={onClose} className="text-black text-2xl">&times;</button>
                </div>
                <div className="max-h-[75vh] overflow-y-auto p-4">
                    <AccordionSection title="Usuario" isOpen={openSections.usuario} setIsOpen={() => toggleSection('usuario')}>
                        <UserSection />
                    </AccordionSection>

                    <AccordionSection title="Papá" isOpen={openSections.papa} setIsOpen={() => toggleSection('papa')}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Persona />
                            <InformacionContacto />
                        </div>
                    </AccordionSection>

                    <AccordionSection title="Mamá" isOpen={openSections.mama} setIsOpen={() => toggleSection('mama')}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Persona />
                            <InformacionContacto />
                        </div>
                    </AccordionSection>

                    <AccordionSection title="Hijo(s)" isOpen={openSections.hijos} setIsOpen={() => toggleSection('hijos')}>
                        {hijos.map((hijo, index) => (
                            <div key={index} className="relative mb-4 p-4 border rounded">
                                {hijos.length > 1 && (
                                    <button onClick={() => removeHijo(index)} className="absolute top-2 right-2 text-red-500">
                                        Eliminar
                                    </button>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Persona />
                                </div>
                                <h3 className="text-lg font-semibold mt-4">Alergias</h3>
                                <AlergiasSection
                                    alergias={hijo.alergias}
                                    onAddAlergia={(alergia) => addAlergiaToHijo(index, alergia)}
                                    onRemoveAlergia={(alergiaIndex) => removeAlergiaFromHijo(index, alergiaIndex)}
                                />
                            </div>
                        ))}
                        <button onClick={addHijo} className="text-blue-500">+ Añadir Hijo</button>
                    </AccordionSection>

                    <AccordionSection title="Dirección" isOpen={openSections.direccion} setIsOpen={() => toggleSection('direccion')}>
                        <Direccion />
                    </AccordionSection>

                    <AccordionSection title="Personas permitidas para buscar al hijo" isOpen={openSections.permitidas} setIsOpen={() => toggleSection('permitidas')}>
                        {allowedPersons.map((_, index) => (
                            <div key={index} className="relative mb-4 p-4 border rounded">
                                <Persona />
                                {allowedPersons.length > 1 && (
                                    <button onClick={() => removeAllowedPerson(index)} className="absolute top-2 right-2 text-red-500">
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        ))}
                        <button onClick={addAllowedPerson} className="text-blue-500">+ Añadir Persona</button>
                    </AccordionSection>

                    <AccordionSection title="Personas que no están permitidas a buscar al hijo" isOpen={openSections.noPermitidas} setIsOpen={() => toggleSection('noPermitidas')}>
                        {notAllowedPersons.map((_, index) => (
                            <div key={index} className="relative mb-4 p-4 border rounded">
                                <Persona />
                                {notAllowedPersons.length > 1 && (
                                    <button onClick={() => removeNotAllowedPerson(index)} className="absolute top-2 right-2 text-red-500">
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        ))}
                        <button onClick={addNotAllowedPerson} className="text-blue-500">+ Añadir Persona</button>
                    </AccordionSection>
                </div>
                <div className="flex justify-end mt-4 p-4 border-t">
                    <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2">
                        Cancelar
                    </button>
                    <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AltaPadres;
