import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Route importado
import FinanzasRoutes from './finanzas_routes/finanzas_routes';
import ProtectedRoute from '../components/route_guards/ProtectedRoute';
import LoginRoutes from './login_routes/login_routes';
import MainLayout from '../layouts/MainLayout'; // Importar MainLayout
import Dashboard from '../modules/dashboard/Dashboard'; // Asumiendo que existe Dashboard
import Maestros from '../modules/maestros/Maestros'; // Asumiendo que existe Maestros
import Finanzas from '../modules/finanzas/Finanzas'; // Para la ruta de finanzas dentro del layout
// Importar otros componentes de página que usarán MainLayout si es necesario
// import Perfil from '../modules/perfil/Perfil'; // Ejemplo

const User = {
  isLoggedIn: true, // Añadir un indicador de si el usuario está logueado
  rol: 'Directora',
  permisos: ['ver_reportes', 'editar_niños']
};

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que no usan MainLayout (como Login) */}
        {LoginRoutes()}

        {/* Rutas que usan MainLayout */}
        <Route
          path="/"
          element={
            <ProtectedRoute user={User} allowedRoles={['Directora', 'Maestro', 'Admin']}> {/* Ajustar roles según necesidad */}
              <MainLayout>
                {/* La ruta raíz podría redirigir a dashboard o ser una página de bienvenida */}
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={User} allowedRoles={['Directora', 'Maestro', 'Admin']}>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        {/* Integración de FinanzasRoutes con MainLayout */}
        {/* FinanzasRoutes ahora debería devolver solo los <Route> hijos, no el <Routes> padre */}
        {/* Se envuelve cada ruta de Finanzas con MainLayout y ProtectedRoute */}

        {/* Opción 1: Modificar FinanzasRoutes para que acepte MainLayout y lo aplique internamente */}
        {/* FinanzasRoutes({ ProtectedRoute, User, MainLayout }) */}

        {/* Opción 2: Envolver explícitamente aquí (ejemplo para la ruta principal de finanzas) */}
        {/* Esto asume que FinanzasRoutes define rutas como <Route path="" element={<Finanzas />} /> */}
        {/* Necesitaremos ver el contenido de finanzas_routes.jsx para la mejor integración */}

        {/* Se llama a FinanzasRoutes y se le pasa MainLayout para que envuelva sus rutas */}
        {/* Es necesario modificar FinanzasRoutes para que acepte y use el Layout */}
        {FinanzasRoutes({ ProtectedRoute, User, Layout: MainLayout })}

        <Route
          path="/maestros"
          element={
            <ProtectedRoute user={User} allowedRoles={['Directora', 'Admin']}> {/* Ajustar roles */}
              <MainLayout>
                <Maestros />
              </MainLayout>
            </ProtectedRoute>
          }
        />
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