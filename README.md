# Starter TypeScript + Webpack

Esqueleto inicial de carpetas y archivos de configuración para un proyecto con TypeScript y Webpack.

### Instalación

Ejecuta `npm install` para instalar todas las dependencias npm.

### Configuración webpack

La configuración común a los dos entornos (desarrollo y producción) está en `webpack.common.js`. La configuración propia de cada entorno está en `webpack.dev.js` y `webpack.prod.js`.

### Estructura archivos

El código fuente está en la carpeta `src`, tanto el de TypeScript como el HTML. En la carpeta `public` está el CSS, y en esta misma carpeta webpack creará el bundle y el `index.html` resultante, quedando las rutas así:

`public/index.html`
`public/js/scripts.js`

### Tareas del package.json

En package.json hay definidos dos scripts, _build_ y _start_. Ejecuta `npm start` para lanzar el servidor de desarrollo de webpack, y `npm run build` para lanzar el proceso de compilación para producción.
