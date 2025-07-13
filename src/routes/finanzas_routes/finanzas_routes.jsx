import VerFinanzas from '../../modules/finanzas/VerFinanzas';
import React from 'react'; // Importar React para React.Fragment
import { Route } from 'react-router-dom';

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
    </>
  );
}

export default FinanzasRoutes;
