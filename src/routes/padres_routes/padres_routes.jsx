import React from 'react'; // Importar React para React.Fragment
import { Route } from 'react-router-dom';
import Padres from '../../modules/padres/Padres';
import VerPadres from '../../modules/padres/VerPadres';

// PadresRoutes ahora acepta Layout como prop
function PadresRoutes({ ProtectedRoute, User, Layout }) {
  // Si no se pasa un Layout, se usa un Fragment para no romper la estructura
  const RouteWrapper = Layout || React.Fragment;

  return (
    <>
      <Route 
        path="/padres/ver_padres" 
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora']} allowedPermissions={['get_padres']}>
            <RouteWrapper>
              <VerPadres />
            </RouteWrapper>
          </ProtectedRoute>
        } 
      />
      <Route
        path="/padres"
        element={
          <ProtectedRoute user={User} allowedRoles={['Directora','Padres']} >
            <RouteWrapper>
              <Padres />
            </RouteWrapper>
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default PadresRoutes;
