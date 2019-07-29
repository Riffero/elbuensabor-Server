import { Schema } from "mongoose";

export const DetallePedidoSchema = new Schema({
    cantidad: Number,
    subtotal: Schema.Types.Decimal128,
    articulo: {
        type: Schema.Types.ObjectId,
        require: true,
        refPath: "onModel", //referencia para el populate segun el tipo de producto
        autopopulate: true
    },
    onModel: {
        type: String,
        require: true,
        enum: ["Productos", "ProductosManofacturados"]
    }
});

DetallePedidoSchema.set("toJSON", {
    transform: (doc, ret) => {
        ret.subtotal = parseFloat(ret.subtotal);
    }
});