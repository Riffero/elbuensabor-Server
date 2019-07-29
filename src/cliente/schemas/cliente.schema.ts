import { Schema } from "mongoose";

export const ClienteSchema = new Schema({
    nombre: String,
    apellido: String,
    telefono: Number,
    email: String,
    creacion: {
        type: Date,
        default: Date
    },
    domicilio: {
        calle: String,
        numero: Number,
        localidad: String
    }
});