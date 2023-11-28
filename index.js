import {Api} from './Api.js'
import 'dotenv/config'

//console.log(process.env)

//Para usar una clase debo crear un objeto
//Para usar una clase se debe crear una instancia
// Todo objeto es una variable
let servidor=new Api()
//levantar o despertar el servidor
servidor.leventarServidor()