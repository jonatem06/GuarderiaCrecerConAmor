import { Route, Routes } from 'react-router-dom';
import Maestros from '../../modules/maestros/Maestros';

function MaestrosRoutes({ ProtectedRoute, currentUser }) {
  return (
    <Routes>
      <Route
        path="/Maestros"
        element={
          <ProtectedRoute currentUser={currentUser} >
            <Maestros />
          </ProtectedRoute>
        }
      />
      {/* otras rutas */}
    </Routes>
  );
}

export default MaestrosRoutes
