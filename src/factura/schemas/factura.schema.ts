import { Schema } from "mongoose";

export const FacturaSchema = new Schema({
    fecha: Date,
    montoDescuento: Schema.Types.Decimal128,
    total: Schema.Types.Decimal128,
    pedido: {
        type: Schema.Types.ObjectId,
        ref: "Pedidos"
    } 
});

FacturaSchema.set("toJSON", {
    transform: (doc, ret) => {
      ret.montoDescuento = parseFloat(ret.montoDescuento);
      ret.total = parseFloat(ret.total);
    }
  });