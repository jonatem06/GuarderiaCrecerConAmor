
import { useEffect, useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/navbar.css'; // Importamos el nuevo archivo CSS
import userProfileImageUrl from '../../assets/img/school/crecer_con_amor.jpeg'; // Importar la imagen de perfil
import { profileMenuItems } from '../menuConfig';

// Navbar ahora recibe 'menuItems' como prop
const Navbar = ({ menuItems = [] }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null); // Ref para el menú móvil

  useEffect(() => {
    const handleClickOutside = (event) => {
      const targetElement = event.target;

      // No cerrar el menú si se hace clic en un enlace del submenú
      if (targetElement.closest('.navbar-dropdown-content a, .navbar-mobile-dropdown-content a')) {
        return;
      }

      // Cerrar dropdown de menú principal
      if (dropdownRef.current && !dropdownRef.current.contains(targetElement) && !targetElement.closest('.navbar-dropdown-toggler')) {
        setOpenDropdown(null);
      }

      // Cerrar dropdown de perfil
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(targetElement) && !targetElement.closest('#user-menu-button')) {
        setProfileMenuOpen(false);
      }

      // Cerrar menú móvil
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(targetElement) && !targetElement.closest('#mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleLogout = () => {
    // Aquí iría la lógica de logout (ej. limpiar token, redirigir)
    console.log('Usuario deslogueado');
    setProfileMenuOpen(false);
    navigate('/login'); // Asumiendo que la ruta de login es /login
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo / App Name */}
          <div className="navbar-logo">
            <Link to="/dashboard">
              Logo
            </Link>
          </div>

          {/* Menús Principales (Centro) */}
          <div className="navbar-menu">
            <div className="navbar-menu-items">
              {menuItems.map((item) =>
                item.submenu && item.submenu.length > 0 ? (
                  <div key={item.id} className="navbar-dropdown" ref={item.submenu && openDropdown === item.id ? dropdownRef : null}>
                    <button
                      type="button"
                      className="navbar-dropdown-toggler"
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    >
                      {item.name}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdown === item.id && (
                      <div className="navbar-dropdown-content">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path || '#'}
                            role="menuitem"
                            onClick={() => {
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
                    key={item.id}
                    to={item.path || '#'}
                    className="navbar-menu-item"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Menú de Perfil (Derecha) */}
          <div className="navbar-profile">
            <div className="navbar-profile-container">
              <div className="navbar-profile-dropdown" ref={profileDropdownRef}>
                <div>
                  <button
                    type="button"
                    className="navbar-profile-button"
                    id="user-menu-button"
                    aria-expanded={profileMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      src={userProfileImageUrl}
                      alt="User profile"
                    />
                  </button>
                </div>
                {profileMenuOpen && (
                  <div
                    className="navbar-profile-dropdown-content"
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
                          role="menuitem"
                          tabIndex="-1"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          key={item.id}
                          to={item.path}
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
          <div className="navbar-mobile-button">
            <button
              type="button"
              id="mobile-menu-button"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={mobileMenuOpen ? 'hidden' : 'block'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={mobileMenuOpen ? 'block' : 'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobile-menu" ref={mobileMenuRef}>
        <div className="navbar-mobile-menu-items">
          {menuItems.map((item) => (
            item.submenu && item.submenu.length > 0 ? (
              <div key={`mobile-${item.id}`}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                  className="navbar-mobile-dropdown-toggler"
                >
                  {item.name}
                  <svg className={`inline-block ml-1 h-5 w-5 transform ${openDropdown === item.id ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openDropdown === item.id && (
                  <div className="navbar-mobile-dropdown-content">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={`mobile-${subItem.id}`}
                        to={subItem.path || '#'}
                        className="navbar-mobile-menu-item"
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
                className="navbar-mobile-menu-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
        {/* Sección de perfil en menú móvil */}
        <div className="navbar-mobile-profile-section">
          <div className="navbar-mobile-profile-info">
            <div className="avatar">
              <img src={userProfileImageUrl} alt="User profile" />
            </div>
            <div className="user-details">
              <div className="name">Usuario</div>
              <div className="email">usuario@example.com</div>
            </div>
          </div>
          <div className="navbar-mobile-profile-links">
            {profileMenuItems.map((item) =>
              item.action === 'logout' ? (
                <button
                  key={`mobile-${item.id}`}
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={`mobile-${item.id}`}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
