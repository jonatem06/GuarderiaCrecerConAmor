import { BrowserRouter, Routes } from 'react-router-dom'; // Route importado
import ProtectedRoute from '../components/route_guards/ProtectedRoute';
import MainLayout from '../layouts/MainLayout'; // Importar MainLayout
import FinanzasRoutes from './finanzas_routes/finanzas_routes';
import LoginRoutes from './login_routes/login_routes';
// Importar otros componentes de página que usarán MainLayout si es necesario
// import Perfil from '../modules/perfil/Perfil'; // Ejemplo

const User = {
  isLoggedIn: true, // Añadir un indicador de si el usuario está logueado
  rol: 'Directora',
  permisos: ['ver_reportes', 'editar_niños'],
  // navMenuItems se define aquí directamente para simulación.
  // En una aplicación real, esto vendría de una API o lógica de negocio basada en el rol/permisos.
  navMenuItems: [
    {
      id: 'finanzas',
      name: 'Finanzas',
      path: '/finanzas',
      icon: null,
    },
    {
      id: 'reportes',
      name: 'Reportes (Directora)',
      icon: null,
      submenu: [
        {
          id: 'reportes_ventas',
          name: 'Reporte Ventas',
          path: '/reportes/ventas',
          icon: null,
        },
        {
          id: 'reportes_alumnos',
          name: 'Reporte Alumnos',
          path: '/reportes/alumnos',
          icon: null,
        },
      ],
    }
  ]
};

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que no usan MainLayout (como Login) */}
        {LoginRoutes()}
        {FinanzasRoutes({
          ProtectedRoute,
          User,
          Layout: (props) => <MainLayout userMenuItems={User.navMenuItems} {...props} />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;