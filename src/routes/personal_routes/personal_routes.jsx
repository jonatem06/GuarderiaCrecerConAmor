import React from 'react'; // Importar React para React.Fragment
import { Route } from 'react-router-dom';
import AltaPersonal from '../../modules/personal/AltaPersonal';
import Personal from '../../modules/personal/Personal';
import VerPersonal from '../../modules/personal/VerPersonal';

// PersonalRoutes ahora acepta Layout como prop
function PersonalRoutes({ ProtectedRoute, User, Layout }) {
  // Si no se pasa un Layout, se usa un Fragment para no romper la estructura
  const RouteWrapper = Layout || React.Fragment;

  return (
    <>
      <Route 
        path="/personal/alta_personal" 
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['add_personal']}>
            <RouteWrapper>
              <AltaPersonal />
            </RouteWrapper>
          </ProtectedRoute>
        } 
      />
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
      <Route
        path="/personal"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} >
            <RouteWrapper>
              <Personal />
            </RouteWrapper>
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default PersonalRoutes;
