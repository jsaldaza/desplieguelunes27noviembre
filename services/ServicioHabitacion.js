import {modeloHabitacion} from '../models/modeloHabitacion.js'
export class ServicioHabitacion{
    constructor(){}

    async registrarHabitacion(datos){
        let habitacionNueva=new modeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async buscarHabitaciones(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }
    async buscarHabitacion(id){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }
    async modificarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
    async borrarHabitacion(id){
        return await modeloHabitacion.deleteOne({ _id: id })
    }

}