// Archivo del servidor express
const express = require('express');
const app = express();
const morgan = require('morgan'); // Módulo que permite que vea a traves de consola mis peticiones
const path = require('path'); // Necesito la dirección de mi index.js
const { mongoose } = require('./database');

// Configuración
app.set('port', process.env.PORT || 8080);

// Middlewares (funciones que se ajecutan antes de llegar a las rutas)
app.use(morgan('dev'));
app.use(express.json()); // Verifica que los datos sean en formato json

// Routes
app.use('/order', require('./routes/order.routes'));

// Archivos estaticos (react)
app.use(express.static(path.join(__dirname, 'public')));

// Inicializa el servidor
app.listen(app.get('port') , ()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
})