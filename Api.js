import express from 'express'
import {rutas} from './routes/rutas.js'
import {establecerConexion} from './database/conexion.js'
import cors from 'cors'

export class Api {
    constructor() {
        this.app = express()
        this.conectarBD()
        this.procesarPeticiones()
    }
    leventarServidor() {
        this.app.listen(process.env.PORT, function () {
            console.log("servidor operando con exito")
        })
    }
    procesarPeticiones() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
        this.app.use('/',rutas)
       
    }
    conectarBD() { 
        establecerConexion()
    }
}