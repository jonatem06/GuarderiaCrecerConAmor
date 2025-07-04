import React from 'react'; // Importar React para React.Fragment
import { Route } from 'react-router-dom';
import Finanzas from '../../modules/finanzas/Finanzas';

// FinanzasRoutes ahora acepta Layout como prop
function FinanzasRoutes({ ProtectedRoute, User, Layout }) {
  // Si no se pasa un Layout, se usa un Fragment para no romper la estructura
  const RouteWrapper = Layout || React.Fragment;

  return (
    <>
      <Route
        path="/finanzas"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['ver_gastos']}>
            <RouteWrapper>
              <Finanzas />
            </RouteWrapper>
          </ProtectedRoute>
        }
      />
      {/* Aquí se podrían añadir más sub-rutas de finanzas que también usarían el RouteWrapper */}
      {/* Ejemplo:
      <Route
        path="/finanzas/reportes"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']}>
            <RouteWrapper>
              <ReportesFinanzas /> {}
            </RouteWrapper>
          </ProtectedRoute>
        }
      />
      */}
    </>
  );
}

export default FinanzasRoutes;
