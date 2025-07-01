# Usa la imagen completa de Node.js (como pediste, no la versión Alpine).
# Puedes especificar una versión exacta, por ejemplo, node:20.12.2
FROM node:20

# Establece el directorio de trabajo dentro del contenedor.
# Aquí es donde se montará tu código fuente local gracias a Docker Compose.
WORKDIR /app

# Copia solo los archivos de configuración de dependencias (package.json, package-lock.json).
# Esto permite a Docker cachear la instalación de dependencias.
COPY package.json ./
# Si usas yarn, descomenta la siguiente línea:
# COPY yarn.lock ./

# Instala todas las dependencias (incluyendo las de desarrollo como Vite).
# Docker las instalará una vez cuando se construya la imagen por primera vez,
# o si package.json cambia.
RUN npm install
# Si usas yarn, descomenta la siguiente línea:
# RUN yarn install

# Copia el resto del código fuente de la aplicación.
COPY . .

# Exponemos el puerto que Vite usa por defecto para el desarrollo.
# Asegúrate de que tu vite.config.js esté configurado para escuchar en este puerto
# y que Docker Compose mapee este puerto correctamente (ej. 3000:3000).
EXPOSE 3000

# El comando por defecto del contenedor.
# Aunque Docker Compose sobrescribirá esto con "npm run dev",
# es buena práctica tenerlo como fallback o para entender el propósito.
# Este CMD no se ejecutará directamente si usas 'command' en docker-compose.yml.
CMD ["npm", "run", "dev"]