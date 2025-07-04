// src/components/RouteGuards/ProtectedRoute.jsx

const ProtectedRoute = ({ user, allowedRoles = [], allowedPermissions = [], children }) => {
  const hasRole = allowedRoles.length === 0 || allowedRoles.includes(user?.rol)
  const hasPermission =
    allowedPermissions.length === 0 || allowedPermissions.some(p => user?.permisos?.includes(p))

  if (hasRole || hasPermission) {
    return children
  }

  //return <Navigate to="/" replace />
}

export default ProtectedRoute
