import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva{

    constructor(){}
    async registrarReserva(peticion,respuesta){
        try{
            let servicioReserva=new ServicioReserva()
            //1. Esculcar los datos que quieren usar para el registro
            let datosReservaRegistrar=peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            await servicioReserva.registrarReserva(datosReservaRegistrar)
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos":datosReservaRegistrar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    async buscarReservaciones(peticion,respuesta){
        try{
            let servicioReserva=new ServicioReserva()
            //1. INTENTAR BUSCAR LOS DATOS EN BD
            //2. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":await servicioReserva.buscarReservaciones()
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    async buscarReservaPorId(peticion,respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            //1.Esculcar los parametros de la peticion
            let idReservaBuscar=peticion.params.id
            //2. validar el dato que llego
            //3.Intento buscar el dato en BD
            //4. responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":await servicioReserva.buscarReserva(idReservaBuscar)
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    async modificarReserva(peticion,respuesta){
        try{
            let servicioReserva= new ServicioReserva()
            //1.traigo el id a editar de la peticion
            let idReservaModificar=peticion.params.id
            let datosReservaModificar=peticion.body
            //validar los datos
            //Intentar buscar y modificar en BD
            await servicioReserva.modificarReserva(idReservaModificar,datosReservaModificar)
            //responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos":datosReservaModificar
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion"+error
            })
        }
    }
    async borrarReserva(peticion,respuesta){
        try{

            let idReservaBorrar=peticion.params.id
            //validar
            let servicioReserva=new ServicioReserva()
            await servicioReserva.borrarReserva(idReservaBorrar)



            //intento borrar la Reserva en BD
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de borrado"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion"+error
            })
        }
    }

}