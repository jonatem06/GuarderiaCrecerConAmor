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

const UserSection = () => {
    return (
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
};


const AltaPadres = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({
    usuario: true,
    papa: false,
    mama: false,
    hijos: false,
    direccion: false,
    alergias: false,
    permitidas: false,
    noPermitidas: false,
  });

  const [hijos, setHijos] = useState([{}]);
  const [allowedPersons, setAllowedPersons] = useState([{}]);
  const [notAllowedPersons, setNotAllowedPersons] = useState([{}]);

  const [alergias, setAlergias] = useState([]);
  const [currentAlergia, setCurrentAlergia] = useState('');

  const availableAlergias = ['Polen', 'Nueces', 'Lacteos', 'Mariscos', 'Soja'];

  const addHijo = () => setHijos([...hijos, {}]);
  const removeHijo = (index) => setHijos(hijos.filter((_, i) => i !== index));

  const addAllowedPerson = () => setAllowedPersons([...allowedPersons, {}]);
  const removeAllowedPerson = (index) => setAllowedPersons(allowedPersons.filter((_, i) => i !== index));

  const addNotAllowedPerson = () => setNotAllowedPersons([...notAllowedPersons, {}]);
  const removeNotAllowedPerson = (index) => setNotAllowedPersons(notAllowedPersons.filter((_, i) => i !== index));

  const addAlergia = () => {
    if (currentAlergia && !alergias.includes(currentAlergia)) {
      setAlergias([...alergias, currentAlergia]);
      setCurrentAlergia('');
    }
  };
  const removeAlergia = (alergiaToRemove) => {
    setAlergias(alergias.filter(alergia => alergia !== alergiaToRemove));
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 p-4">
      <div className="relative top-10 mx-auto border w-full max-w-lg md:max-w-2xl lg:max-w-6xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4 p-4 border-b">
            <h2 className="text-2xl font-bold">Alta de Padres</h2>
            <button onClick={onClose} className="text-black text-2xl">&times;</button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {/* Columna Izquierda */}
            <div>
              <AccordionSection title="Usuario" isOpen={openSections.usuario} setIsOpen={() => toggleSection('usuario')}>
                <UserSection />
              </AccordionSection>

              <AccordionSection title="Papá" isOpen={openSections.papa} setIsOpen={() => toggleSection('papa')}>
                <Persona />
                <InformacionContacto />
              </AccordionSection>

              <AccordionSection title="Mamá" isOpen={openSections.mama} setIsOpen={() => toggleSection('mama')}>
                <Persona />
                <InformacionContacto />
              </AccordionSection>

              <AccordionSection title="Hijo(s)" isOpen={openSections.hijos} setIsOpen={() => toggleSection('hijos')}>
                {hijos.map((_, index) => (
                    <div key={index} className="relative mb-4 p-4 border rounded">
                    <Persona />
                    {hijos.length > 1 && (
                        <button onClick={() => removeHijo(index)} className="absolute top-2 right-2 text-red-500">
                        Eliminar
                        </button>
                    )}
                    </div>
                ))}
                <button onClick={addHijo} className="text-blue-500">+ Añadir Hijo</button>
              </AccordionSection>
            </div>

            {/* Columna Derecha */}
            <div>
              <AccordionSection title="Dirección" isOpen={openSections.direccion} setIsOpen={() => toggleSection('direccion')}>
                <Direccion />
              </AccordionSection>

              <AccordionSection title="Alergias" isOpen={openSections.alergias} setIsOpen={() => toggleSection('alergias')}>
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
                    <button onClick={addAlergia} className="bg-blue-500 text-white py-2 px-4 rounded">Agregar</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {alergias.map(alergia => (
                    <div key={alergia} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center">
                        {alergia}
                        <button onClick={() => removeAlergia(alergia)} className="ml-2 text-red-500">x</button>
                    </div>
                    ))}
                </div>
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
          </div>
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
