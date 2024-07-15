const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const dbRoutes = require('./routes/dbRoutes');
const tableRoutes = require('./routes/tableRoutes');

const app = express();

// Middleware para sesiones
app.use(session({
    secret: 'your-secret-key', // Cambia esto por una clave secreta real
    resave: false,
    saveUninitialized: true,
}));

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// Middleware para parsear bodies de formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos desde la carpeta 'web'
app.use(express.static(path.join(__dirname, '../frontend/web')));

// Middleware para las rutas de autenticación
app.use('/auth', authRoutes);

// Middleware para las rutas de bases de datos
app.use('/db', dbRoutes);

// Middleware para las rutas de tablas
app.use('/tables', tableRoutes);

// Ruta para la URL raíz
app.get('/', (req, res) => {
    res.redirect('/auth/login'); // Redirige a la página de inicio de sesión o cualquier otra página de inicio
});

// Configuración del puerto
const port = process.env.PORT || 3000;

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor en http://127.0.0.1:${port}`);
});

