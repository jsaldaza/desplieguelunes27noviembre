
import { ServicioHabitacion } from '../services/ServicioHabitacion.js'

export class ControladorHabitacion{

    constructor(){}
    async registrarHabitacion(peticion,respuesta){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar=peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar)
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos":datosHabitacionRegistrar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    async buscarHabitaciones(peticion,respuesta){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. INTENTAR BUSCAR LOS DATOS EN BD
            //2. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":await servicioHabitacion.buscarHabitaciones()
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    async buscarHabitacionPorId(peticion,respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //1.Esculcar los parametros de la peticion
            let idHabitacionBuscar=peticion.params.id
            //2. validar el dato que llego
            //3.Intento buscar el dato en BD
            //4. responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    async modificarHabitacion(peticion,respuesta){
        try{
            let servicioHabitacion= new ServicioHabitacion()
            //1.traigo el id a editar de la peticion
            let idHabitacionModificar=peticion.params.id
            let datosHabitacionModificar=peticion.body
            //validar los datos
            //Intentar buscar y modificar en BD
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar,datosHabitacionModificar)
            //responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos":datosHabitacionModificar
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion"+error
            })
        }
    }
    async borrarHabitacion(peticion,respuesta){
        try{

            let idHabitacionBorrar=peticion.params.id
            //validar
            //intento borrar la habitacion en BD
            const servicioHabitacion=new ServicioHabitacion()
            await servicioHabitacion.borrarHabitacion(idHabitacionBorrar)
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de borrado"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion" + error
            })
        }
    }

}