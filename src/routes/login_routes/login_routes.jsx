// src/routes/login_routes/login_routes.jsx
import { Route } from 'react-router-dom'
import Login from '../../modules/login/login'

const LoginRoutes = () => (
  <>
    <Route path="/" element={<Login />} />
    <Route path="*" element={<Login />} />
  </>
)

export default LoginRoutes
