import { BrowserRouter, Routes } from 'react-router-dom';
//import { lazy } from 'react'
import LoginRoutes from './login_routes/login_routes';
//import ProtectedRoute from '../components/RouteGuards/ProtectedRoute'

const currentUser = {
  rol: 'educadora',
  permisos: ['ver_reportes', 'editar_niños']
}

function RouteComponent() {
    return (
      <BrowserRouter>
        <Routes>
          <LoginRoutes />
        </Routes>
      </BrowserRouter>
    );
  }

export default RouteComponent;