import { BrowserRouter, Routes } from 'react-router-dom';
import FinanzasRoutes from './finanzas_routes/finanzas_routes';
//import { lazy } from 'react'
import ProtectedRoute from '../components/route_guards/ProtectedRoute';
import LoginRoutes from './login_routes/login_routes';

const User = {
  rol: 'Directora',
  permisos: ['ver_reportes', 'editar_niños']
}

function RouteComponent() {
    return (
      <BrowserRouter>
        <Routes>
        {FinanzasRoutes({ ProtectedRoute, User })}
          {LoginRoutes() }
        </Routes>
      </BrowserRouter>
    );
  }

export default RouteComponent;