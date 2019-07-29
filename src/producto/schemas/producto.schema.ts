import { Schema} from "mongoose";

export const ProductoSchema = new Schema({
    denominacion: String,
    costo: Schema.Types.Decimal128,
    stockActual: Number,
    rubro: {
        type: Schema.Types.ObjectId,
        ref: "Rubros"
    }
});

ProductoSchema.set("toJSON",{
    transform: (doc, ret) => {
        ret.costo = parseFloat(ret.costo);
    }
});