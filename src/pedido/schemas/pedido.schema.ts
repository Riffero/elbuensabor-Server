import { Schema } from "mongoose";

export const PedidoSchema = new Schema({
    fecha: {
        type: Date,
        default: Date
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: "Estados"
    },
    horaEstimadaFin: Date,
    tipoEnvio: {
        type: Schema.Types.ObjectId,
        ref: "EnviosTipos"
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Clientes"
    },
    detalles: [
        {
            type: Schema.Types.ObjectId,
            ref: "DetallesPedido"
        }
    ]
})