const { response, request } = require('express');

const usuarioGet = (req = request, res = response) => {

    const { usuario, edad = 45, nombre } = req.query;
    res.json({
        msg: 'get Api - controlador',
        usuario,
        nombre,
        edad
    });
}

const usuarioPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put Api- controlador',
        id
    });
}

const usuarioPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post Api - controle',
        nombre,
        edad
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api- controlador'
    });
}

module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
}