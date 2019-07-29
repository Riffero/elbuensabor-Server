import { Schema } from "mongoose";

export const InsumoSchema = new Schema({
    unidadMedida: String,
    denominacion: String,
    costo: Schema.Types.Decimal128,
    stockActual: Schema.Types.Decimal128
});

InsumoSchema.set("toJSON",{
    transform: (doc, ret) =>{
        ret.costo = parseFloat(ret.costo);
        ret.stockActual = parseFloat(ret.stockActual);
    }
});