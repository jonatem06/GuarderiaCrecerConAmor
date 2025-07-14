
import { useEffect, useRef, useState } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
// Se elimina la importación de 'menuItems' de '../menuConfig'
import { profileMenuItems } from '../menuConfig';

// Navbar ahora recibe 'menuItems' como prop
const Navbar = ({ menuItems = [], setUser }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null); // Ref para el menú móvil

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const targetElement = event.target;

      // Cerrar dropdown de menú principal
      if (dropdownRef.current && !dropdownRef.current.contains(targetElement)) {
        let isToggler = false;
        const togglerButtons = document.querySelectorAll('.menu-item-toggler');
        togglerButtons.forEach(button => {
          if (button.contains(targetElement)) {
            isToggler = true;
          }
        });
        if (!isToggler) {
          setOpenDropdown(null);
        }
      }

      // Cerrar dropdown de perfil
      const profileMenuButton = document.getElementById('user-menu-button');
      if (profileDropdownRef.current &&
          !profileDropdownRef.current.contains(targetElement) &&
          profileMenuButton &&
          !profileMenuButton.contains(targetElement)
        ) {
        setProfileMenuOpen(false);
      }

      // Cerrar menú móvil
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      if (mobileMenuRef.current &&
          !mobileMenuRef.current.contains(targetElement) &&
          mobileMenuButton &&
          !mobileMenuButton.contains(targetElement)
         ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, profileMenuOpen, mobileMenuOpen]);


  const handleLogout = () => {
    // Aquí iría la lógica de logout (ej. limpiar token, redirigir)
    console.log('Usuario deslogueado');
    setProfileMenuOpen(false);
    setUser(null);
    navigate('/login'); // Asumiendo que la ruta de login es /login
  };

  const userProfileImageUrl = 'https://via.placeholder.com/40'; // URL de imagen de perfil placeholder

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / App Name */}
          <div className="flex-shrink-0">
            <Link to="/dashboard" className="text-xl font-bold">
            </Link>
          </div>

          {/* Menús Principales (Derecha) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) =>
                item.submenu && item.submenu.length > 0 ? (
                  <div key={item.id} className="relative" ref={item.submenu && openDropdown === item.id ? dropdownRef : null}> {/* Asignar ref dinámicamente */}
                    <button
                      type="button"
                      className="menu-item-toggler px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none flex items-center" // Añadida clase menu-item-toggler
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    >
                      {item.name}
                      <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdown === item.id && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        // onMouseEnter y onMouseLeave eliminados del div del dropdown
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path || '#'}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              onClick={() => {
                                // navigate(subItem.path); // Opcional: navegar directamente si es necesario
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    to={item.path || '#'}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Menú de Perfil (Derecha) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative" ref={profileDropdownRef}> {/* Asignar ref al contenedor del dropdown de perfil */}
                <div>
                  <button
                    type="button"
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded={profileMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={userProfileImageUrl}
                      alt="User profile"
                    />
                  </button>
                </div>
                {profileMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" // Added z-50
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    {profileMenuItems.map((item) =>
                      item.action === 'logout' ? (
                        <button
                          key={item.id}
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          key={item.id}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Botón de Menú Móvil (Hamburguesa) */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              id="mobile-menu-button" // ID para el botón del menú móvil
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icono de hamburguesa, se muestra si mobileMenuOpen es false */}
              <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icono de cierre (X), se muestra si mobileMenuOpen es true */}
              <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              item.submenu && item.submenu.length > 0 ? (
                <div key={`mobile-${item.id}`}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                    <svg className={`inline-block ml-1 h-5 w-5 transform ${openDropdown === item.id ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openDropdown === item.id && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={`mobile-${subItem.id}`}
                          to={subItem.path || '#'}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={`mobile-${item.id}`}
                  to={item.path || '#'}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          {/* Sección de perfil en menú móvil */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={userProfileImageUrl} alt="User profile" />
              </div>
              <div className="ml-3">
                {/* Estos datos deberían ser dinámicos si el usuario está logueado */}
                <div className="text-base font-medium leading-none text-white">Usuario</div>
                <div className="text-sm font-medium leading-none text-gray-400">usuario@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {profileMenuItems.map((item) =>
                item.action === 'logout' ? (
                  <button
                    key={`mobile-${item.id}`}
                    onClick={() => {
                      handleLogout();
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={`mobile-${item.id}`}
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
