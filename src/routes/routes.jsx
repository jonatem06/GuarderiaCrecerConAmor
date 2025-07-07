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
  menuItems:[
    {
      id: 'dashboard',
      name: 'Dashboard',
      path: '/dashboard', // Asumiendo que tienes una ruta para dashboard
      icon: null, // Espacio para un futuro ícono
    },
    {
      id: 'finanzas',
      name: 'Finanzas',
      icon: null,
      path: null, // Un menú padre podría no tener una ruta directa si solo abre submenús
      submenu: [
        {
          id: 'Reporte Gastos',
          name: 'Reporte Gastos',
          path: '/gastos',
          icon: null,
        },
        {
          id: 'alta_gastos',
          name: 'Alta de Gastos',
          path: '/AltaGastos',
          icon: null,
        }
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

        {FinanzasRoutes({ ProtectedRoute, User, Layout: MainLayout })}

        {/* Ruta para el perfil del usuario */}
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