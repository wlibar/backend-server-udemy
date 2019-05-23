// Requires
var express = require('express');

var mongooge = require('mongoose');


// Inicializar variables
var app = express();

// Conexión a la base de datos
mongooge.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos \x1b[32m%s\x1b[0m', 'online');
});

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});
// Escuchar peticiones
app.listen(3000, () => {
    //console.log('Expres server puerto 3000 online');
    console.log('Expres server puerto 3000 \x1b[32m%s\x1b[0m', 'online');
});