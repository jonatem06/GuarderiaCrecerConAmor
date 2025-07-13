import { useState } from 'react';
import AltaPersonal from './AltaPersonal'; // Asegúrate de que la ruta de importación sea correcta

const VerPersonal = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPersonal, setSelectedPersonal] = useState(null);

    // Datos de ejemplo
    const personalData = [
        { id: 1, nombre: 'Juan', apellidoPaterno: 'Perez', apellidoMaterno: 'Gomez', telefono: '5512345678' },
        { id: 2, nombre: 'Maria', apellidoPaterno: 'Lopez', apellidoMaterno: 'Hernandez', telefono: '5587654321' },
    ];

    const handleOpenModal = (personal) => {
        setSelectedPersonal(personal);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPersonal(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-textoPrincipal">Personal Registrado</h1>
            <button onClick={() => handleOpenModal(null)} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end">
                Agregar Personal
            </button>
            <div className="shadow-lg rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-textoPrincipal uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-textoPrincipal uppercase tracking-wider">
                                Apellido Paterno
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-textoPrincipal uppercase tracking-wider">
                                Apellido Materno
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-textoPrincipal uppercase tracking-wider">
                                Teléfono
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-textoPrincipal uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {personalData.map((personal) => (
                            <tr key={personal.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-textoPrincipal whitespace-no-wrap">{personal.nombre}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-textoPrincipal whitespace-no-wrap">{personal.apellidoPaterno}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-textoPrincipal whitespace-no-wrap">{personal.apellidoMaterno}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-textoPrincipal whitespace-no-wrap">{personal.telefono}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button onClick={() => handleOpenModal(personal)} className="text-blue-600 hover:text-blue-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AltaPersonal isOpen={isModalOpen} onClose={handleCloseModal} personalData={selectedPersonal} />
        </div>
    );
};

export default VerPersonal;
