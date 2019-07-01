var express = require('express');
var app = express();
const path = require('path'); //no requiere instalar nada con npm
const fs = require('fs');

// Rutas
app.get('/:tipo/:img', (req, res, next) => {
    var tipo = req.params.tipo;
    var img = req.params.img;

    var imagenPath = path.resolve(__dirname, `../uploads/${ tipo }/${ img }`);
    if (fs.existsSync(imagenPath)) {
        res.sendFile(imagenPath);
    } else {
        var pathNoImagen = path.resolve(__dirname, '../assets/no-img.jpg');
        res.sendFile(pathNoImagen);
    }
});

module.exports = app