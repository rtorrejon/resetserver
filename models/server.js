const express = require('express')
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';
        //Middleware
        this.middlewares();
        // Rutas de mi aplicacion .. simil middleware.
        this.route();
    }

    middlewares() {
        this.app.use(cors());
        //lectura y paseo a json
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    route() {
        this.app.use(this.usuarioPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

}

module.exports = Server;