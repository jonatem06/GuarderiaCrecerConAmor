import React from 'react';
import { Link } from 'react-router-dom';
import { profileMenuItems } from '../menuConfig';
import schoolImage from '../../assets/img/school/crecer_con_amor.jpeg';
import './Navbar.css';

const Navbar = ({ menuItems = [] }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-logo">
          Logo
        </Link>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link to={item.path || '#'} className="nav-links">
                {item.name}
              </Link>
              {item.submenu && item.submenu.length > 0 && (
                <ul className="submenu">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id} className="submenu-item">
                      <Link to={subItem.path || '#'} className="submenu-links">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="profile-menu">
          <img
            className="profile-image"
            src={schoolImage}
            alt="User profile"
          />
          <ul className="profile-submenu">
            {profileMenuItems.map((item) => (
              <li key={item.id} className="profile-submenu-item">
                {item.action === 'logout' ? (
                  <button onClick={() => console.log('logout')} className="profile-submenu-links">
                    {item.name}
                  </button>
                ) : (
                  <Link to={item.path} className="profile-submenu-links">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
