var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

// ===============================
// Verificar token. Es un middlware
// ===============================

exports.verificaToken = function(req, res, next) {
    var token = req.query.token; //Lo toma de la URL
    jwt.verify(token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }
        req.usuario = decoded.usuario; // En cualquier lugar donde se verifiqueToken, se tendrá informaicón del usuiario en el request
        next(); //Este next es para que continue ejecutando las siguientes instrucciones hacaia abajo
    });
}