import React from 'react'; // Importar React para React.Fragment
import { Route } from 'react-router-dom';
import VerPersonal from '../../modules/personal/VerPersonal';

// PersonalRoutes ahora acepta Layout como prop
function PersonalRoutes({ ProtectedRoute, User, Layout }) {
  // Si no se pasa un Layout, se usa un Fragment para no romper la estructura
  const RouteWrapper = Layout || React.Fragment;

  return (
    <>
      <Route 
        path="/personal/ver_personal" 
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['get_personal']}>
            <RouteWrapper>
              <VerPersonal />
            </RouteWrapper>
          </ProtectedRoute>
        } 
      />
    </>
  );
}

export default PersonalRoutes;
