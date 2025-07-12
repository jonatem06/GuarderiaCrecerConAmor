import VerFinanzas from '../../modules/finanzas/VerFinanzas';
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
        path="/finanzas/ver_finanzas" 
        element={
            <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['ver_gastos']}>
              <RouteWrapper>
                <VerFinanzas />
              </RouteWrapper>
            </ProtectedRoute>
          } 
        />
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
    </>
  );
}

export default FinanzasRoutes;
