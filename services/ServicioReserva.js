
import  {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{
    constructor(){}

    async registrarReserva(datos){
        let ReservaNueva=new modeloReserva(datos)
        return await ReservaNueva.save()
    }
    async buscarReservaciones(){
        let Reservaciones=await modeloReserva.find()
        return Reservaciones
    }
    async buscarReserva(id){
        let Reserva=await modeloReserva.findById(id)
        return Reserva
    }
    async modificarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async borrarReserva(id){
        return await modeloReserva.deleteOne({ _id: id })
    }

}