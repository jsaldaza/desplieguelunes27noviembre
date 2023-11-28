import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Reserva = new Schema({
    fechaEntrada: {
        type: Date,
        required: true
    },
    fechaSalida: {
        type: Date,
        required: true
    },
    numPersonas: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: false
    },
    nombreQuienReserva: {
        type: String,
        required: true
    }
});

export const modeloReserva = mongoose.model('reservas', Reserva);
