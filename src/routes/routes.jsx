import { BrowserRouter, Routes } from 'react-router-dom'; // Route importado
import ProtectedRoute from '../components/route_guards/ProtectedRoute';
import MainLayout from '../layouts/MainLayout'; // Importar MainLayout
import FinanzasRoutes from './finanzas_routes/finanzas_routes';
import LoginRoutes from './login_routes/login_routes';
import PadresRoutes from './padres_routes/padres_routes';
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
      name: 'Reporte Finanzas',
      path: '/finanzas/ver_finanzas',
      icon: null,
    },
    {
      id: 'personal',
      name: 'Ver personal',
      path: '/personal/ver_personal',
      icon: null
    }
    ,
    {
      id: 'padres',
      name: 'Padres',
      path: null,
      icon: null,
      submenu:[
        {
          id: 'ver_padres',
          name: 'Ver Padres',
          path: '/padres/ver_padres',
          icon: null
        },
        {
          id: 'ver_reportes',
          name: 'Ver reportes',
          path: '/reportes/ver_reportes',
          icon: null
        }
      ]
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