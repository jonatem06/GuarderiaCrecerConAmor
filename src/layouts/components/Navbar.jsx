
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { profileMenuItems } from '../menuConfig';
import schoolLogo from '../../assets/img/school/crecer_con_amor.jpeg'; // Importar la imagen

const Navbar = ({ menuItems = [] }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const targetElement = event.target;

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

      const profileMenuButton = document.getElementById('user-menu-button');
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(targetElement) && profileMenuButton && !profileMenuButton.contains(targetElement)) {
        setProfileMenuOpen(false);
      }

      const mobileMenuButton = document.getElementById('mobile-menu-button');
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(targetElement) && mobileMenuButton && !mobileMenuButton.contains(targetElement)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, profileMenuOpen, mobileMenuOpen]);

  const handleLogout = () => {
    console.log('Usuario deslogueado');
    setProfileMenuOpen(false);
    navigate('/login');
  };

  const handleParentLinkClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Cierra el menú móvil al navegar
  };


  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/dashboard" className="text-xl font-bold">
              <img src={schoolLogo} alt="Logo" className="h-10" /> {/* Logo del colegio */}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) =>
                item.submenu && item.submenu.length > 0 ? (
                  <div key={item.id} className="relative" ref={openDropdown === item.id ? dropdownRef : null}>
                    <div className="flex items-center">
                      {item.path ? (
                        <Link to={item.path} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">{item.name}</Link>
                      ) : (
                        <span className="px-3 py-2 rounded-md text-sm font-medium">{item.name}</span>
                      )}
                      <button
                        type="button"
                        className="menu-item-toggler p-1 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none"
                        onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                      >
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {openDropdown === item.id && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path || '#'}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
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

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative" ref={profileDropdownRef}>
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
                  </button>
                </div>
                {profileMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
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

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              id="mobile-menu-button"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) =>
              item.submenu && item.submenu.length > 0 ? (
                <div key={`mobile-${item.id}`}>
                  <div className="flex justify-between items-center w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                    {item.path ? (
                      <Link to={item.path} onClick={() => handleParentLinkClick(item.path)} className="block px-3 py-2 text-base font-medium flex-grow">{item.name}</Link>
                    ) : (
                      <span className="block px-3 py-2 text-base font-medium flex-grow">{item.name}</span>
                    )}
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                      className="p-2"
                    >
                      <svg className={`h-5 w-5 transform ${openDropdown === item.id ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  {openDropdown === item.id && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={`mobile-${subItem.id}`}
                          to={subItem.path || '#'}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
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
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
              </div>
              <div className="ml-3">
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
                      setMobileMenuOpen(false);
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
