import { Route } from 'react-router-dom';
import Finanzas from '../../modules/finanzas/Finanzas';

function FinanzasRoutes({ ProtectedRoute, User }) {
  return (
    <>
      <Route
        path="/finanzas"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['ver_gastos']}>
            <Finanzas />
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default FinanzasRoutes
