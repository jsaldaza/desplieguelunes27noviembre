import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'

//Para poder llamar al controlador
//debo crear un objeto de la clase controladorHabitacion
let controladorHabitacion=new ControladorHabitacion();
let controladorReserva=new ControladorReserva();

export let rutas=express.Router()

rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id',controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id',controladorHabitacion.borrarHabitacion)

rutas.post('/api/reservaciones', controladorReserva.registrarReserva);
rutas.get('/api/reservacion/:id', controladorReserva.buscarReservaPorId);
rutas.get('/api/reservaciones', controladorReserva.buscarReservaciones);
rutas.put('/api/reservaciones/:id', controladorReserva.modificarReserva);
rutas.delete('/api/reservaciones/:id', controladorReserva.borrarReserva);
