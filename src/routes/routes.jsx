import { BrowserRouter, Routes } from 'react-router-dom'; // Route importado
import PadresRoutes from './padres_routes/padres_routes';
import ProtectedRoute from '../components/route_guards/ProtectedRoute';
import MainLayout from '../layouts/MainLayout'; // Importar MainLayout
import FinanzasRoutes from './finanzas_routes/finanzas_routes';
import LoginRoutes from './login_routes/login_routes';
import PersonalRoutes from './personal_routes/personal_routes';
// Importar otros componentes de página que usarán MainLayout si es necesario
// import Perfil from '../modules/perfil/Perfil'; // Ejemplo

const User = {
  rol: 'Directora',
  permisos: ['ver_reportes', 'editar_niños'],
  // navMenuItems se define aquí directamente para simulación.
  // En una aplicación real, esto vendría de una API o lógica de negocio basada en el rol/permisos.
  navMenuItems: [
    {
      id: 'dashboard',
      name: 'Dashboard',
      path:'/dashboard',
      icon: null,
    },
    {
      id: 'finanzas',
      name: 'Finanzas',
      path: null,
      icon: null,
      submenu: [
        {
          id: 'finanzas_gastos',
          name: 'Gastos',
          path:'/finanzas/gastos',
          icon: null,
        },
        {
          id: 'reporte',
          name: 'Reporte de Gastos',
          path:'/finanzas/ReporteGastos',
          icon: null,
        }
      ]
    },
    {
      id: 'personal',
      name: 'Personal',
      path: null,
      icon: null,
      submenu: [
        {
          id: 'add_Personal',
          name: 'Alta de personal',
          path:'/Personal/alta',
          icon: null,
        },
        {
          id: 'get_personal',
          name: 'Ver Personal',
          path:'/Personal',
          icon: null,
        }
      ]
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
{PadresRoutes({          ProtectedRoute,          User,          Layout: (props) => <MainLayout userMenuItems={User.navMenuItems} {...props} />        })}
        {PersonalRoutes({
          ProtectedRoute,
          User,
          Layout: (props) => <MainLayout userMenuItems={User.navMenuItems} {...props} />
        })}
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