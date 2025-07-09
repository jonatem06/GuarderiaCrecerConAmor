import React from 'react';
// import PropTypes from 'prop-types'; // Eliminado
import Navbar from './components/Navbar';

const MainLayout = ({ children, userMenuItems }) => { // Se añade userMenuItems a las props
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuItems={userMenuItems} /> {/* Se pasa userMenuItems al Navbar */}
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      {/* Footer opcional podría ir aquí */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        © 2023 Mi Aplicación
      </footer> */}
    </div>
  );
};

// MainLayout.propTypes = { // Eliminado
//   children: PropTypes.node.isRequired,
// };

export default MainLayout;
