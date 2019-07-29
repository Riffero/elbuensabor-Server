import { Schema } from "mongoose";

export const ProductoManofacturadoSchema = new Schema({
    denominacion:String,
    tiempoCoccion: Number,
    precioVenta: Schema.Types.Decimal128,
    rubro: {
        type: Schema.Types.ObjectId,
        ref: "Rubros"
    },
    ingredientes: [
        {
            cantidad: Number,
            unidadMedida: String,
            insumo: {
                type: Schema.Types.ObjectId,
                ref: "Insumos"
            }
        }
    ]
});

//para parsear el valor guardado en la base de datos a float y podes mostrarlo
ProductoManofacturadoSchema.set("toJSON",{
    transform: (doc, ret) => {
        ret.precioVenta = parseFloat(ret.precioVenta);
    }
});