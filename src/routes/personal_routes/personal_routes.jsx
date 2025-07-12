import React from 'react'; // Importar React para React.Fragment
import { Route } from 'react-router-dom';
import Personal from '../../modules/personal/Personal';

// PersonalRoutes ahora acepta Layout como prop
function PersonalRoutes({ ProtectedRoute, User, Layout }) {
  // Si no se pasa un Layout, se usa un Fragment para no romper la estructura
  const RouteWrapper = Layout || React.Fragment;

  return (
    <>
      <Route
        path="/personal/alta"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['add_personal']}>
            <RouteWrapper>
              <Personal />
            </RouteWrapper>
          </ProtectedRoute>
        }
      />
      <Route
        path="/personal"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['get_personal']}>
            <RouteWrapper>
              <ReportesPersonal /> {}
            </RouteWrapper>
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default PersonalRoutes;
