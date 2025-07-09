export const menuItems = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard', // Asumiendo que tienes una ruta para dashboard
    icon: null, // Espacio para un futuro ícono
  },
  {
    id: 'finanzas',
    name: 'Finanzas',
    path: '/finanzas',
    icon: null,
  },
  {
    id: 'maestros',
    name: 'Maestros',
    path: '/maestros',
    icon: null,
  },
  {
    id: 'reportes',
    name: 'Reportes',
    icon: null,
    // path: null, // Un menú padre podría no tener una ruta directa si solo abre submenús
    submenu: [
      {
        id: 'reportes_ventas',
        name: 'Reporte Ventas',
        path: '/reportes/ventas',
        icon: null,
      },
      {
        id: 'reportes_alumnos',
        name: 'Reporte Alumnos',
        path: '/reportes/alumnos',
        icon: null,
      },
    ],
  },
  {
    id: 'configuracion',
    name: 'Configuración',
    icon: null,
    submenu: [
      {
        id: 'config_general',
        name: 'General',
        path: '/configuracion/general',
        icon: null,
      },
      {
        id: 'config_usuarios',
        name: 'Usuarios',
        path: '/configuracion/usuarios',
        icon: null,
      },
      {
        id: 'config_vacia', // Ejemplo de submenú sin path directo, podría abrir otro nivel o no hacer nada
        name: 'Avanzada',
        submenu: [] // Submenú vacío
      }
    ]
  }
];

export const profileMenuItems = [
  {
    id: 'profile',
    name: 'Mi Perfil',
    path: '/perfil', // Asumiendo una ruta /perfil
  },
  {
    id: 'logout',
    name: 'Logout',
    action: 'logout', // Identificador para la acción de logout
  },
];
