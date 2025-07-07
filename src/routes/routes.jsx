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
    },
    // Podríamos tener otro usuario con diferentes menús:
    // const UserMaestro = {
    //   rol: 'Maestro',
    //   isLoggedIn: true,
    //   navMenuItems: [
    //     { id: 'dashboard', name: 'Mi Dashboard', path: '/dashboard' },
    //     { id: 'maestros', name: 'Mis Alumnos', path: '/maestros/alumnos' },
    //   ]
    // };
  ]
};

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que no usan MainLayout (como Login) */}
        {LoginRoutes()}

        {/*
          Para FinanzasRoutes y cualquier otra ruta modular que use MainLayout,
          necesitamos pasarle los userMenuItems.
          La forma más limpia sería que MainLayout siempre los reciba de su ruta padre.
          FinanzasRoutes ahora debe ser modificado para que su 'Layout' prop (que es MainLayout)
          reciba 'userMenuItems'.
        */}
        {FinanzasRoutes({
          ProtectedRoute,
          User,
          Layout: (props) => <MainLayout userMenuItems={User.navMenuItems} {...props} />
        })}

        {/* Ruta para el perfil del usuario */}
        {/* Si /perfil usa MainLayout, también necesitaría userMenuItems */}
        {/* <Route
          path="/perfil"
          element={
            <ProtectedRoute user={User} allowedRoles={['Directora', 'Maestro', 'Admin']}>
              <MainLayout>
                <Perfil /> {}
              </MainLayout>
            </ProtectedRoute>
          }
        /> */}

        {/* Otras rutas protegidas que usarán MainLayout */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;